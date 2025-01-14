import{ useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'

export function RecipesByCategory(){

    const { category } = useParams();
    const [byCategory, setByCategory] = useState([]);

    const API_URL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`

    useEffect (() => {
        const fetchRecipes = async () => {
            const response = await fetch(API_URL);
            const data = await response.json ();

            console.log(data.meals.strTags)
            setByCategory(data.meals);
        }
        fetchRecipes();
    }, [category]);

    return(
        <section className="list-recipes">
        { byCategory && byCategory.map((item, index) => {
            const tags = item.strTags ? item.strTags.split(',') : [];
            return(
         <Link style={{ textDecoration: 'none', color: 'inherit'}} className="recipe-card" to={`/recipe/${item.idMeal}`} >
            <div className="img-sector"><img src={ item.strMealThumb } alt={ item.strMeal } /></div>
            <div className="recipe-contain">
                <h2>{ item.strMeal }</h2>
                <ul className="tag-list">
                    {
                        tags.map((tag, indice) => (
                            <li key={ tag + indice }>{ tag }</li>
                    
                    ))}
                </ul>
            </div>
        </Link>
        )})
    }
    </section>
    )
}
