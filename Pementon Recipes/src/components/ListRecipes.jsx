import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

export function ListRecipes ({ listRecipes }) {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        if(listRecipes.length > 0){
            setRecipes(listRecipes);
        }else{
            const fetchData = async () =>{
                const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
                const data = await response.json();

                setRecipes(data.meals);
            }
            fetchData();
        }
    }, [listRecipes])

    return (
        <section className="list-recipes">
            {recipes && recipes.map((item, index) => {
                const tags = item.strTags ? item.strTags.split(',') : [];
                return (
                    <Link
                        style={{ textDecoration: 'none', color: 'inherit' }}
                        key={index}
                        className="recipe-card"
                        to={`/recipe/${item.idMeal}`}
                    >
                        <div className="img-sector">
                            <img src={item.strMealThumb} alt={item.strMeal} />
                        </div>
                        <div className="recipe-contain">
                            <h2>{item.strMeal}</h2>
                            <ul>
                                {tags.map((tag, indice) => (
                                    <li key={tag + indice}>{tag}</li>
                                ))}
                            </ul>
                        </div>
                    </Link>
                );
            })}
            { recipes == "" &&
                Array(8).fill().map((_, index) => (
                <div key={index} className="recipe-placeholder">
                    <div className="img-placeholder"><img src="" alt="" /></div>
                    <div className="title-placeholder"><h2></h2></div>
                </div>
                ))
            }
        </section>
    );
}