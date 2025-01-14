import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function Recipe(){

    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [checkIngredients, setCheckIngredients] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
            const data = await response.json();

            setRecipe(data.meals[0]);
        }
        fetchData();
    }, [id]);

        const getIngredients = () =>{
            if(!recipe) return [];

            const ingredients = [];
            for (let i = 1; i <= 20; i++){
                const ingredient = recipe[`strIngredient${i}`];
                const measure = recipe[`strMeasure${i}`];
                if(ingredient) {
                    ingredients.push(`${measure} ${ingredient}`.trim());
                }
            }
        return ingredients;
    };

    const ingredientList = getIngredients();

    const checkingIngredients = (ingredient) => {
        setCheckIngredients((prev) => ({
            ...prev,
            [ingredient]: !prev[ingredient],
        }));
    }

    return(
       
        <div className="recipe-screen">
            {recipe && (
                <div className="recipe-container">
                    <div className="recipe-content">
                        <h1>{ recipe.strMeal}</h1>
                        <div className='recipe-info'>
                            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                            <div className='recipe-info2'>
                                <h2>Ingredients</h2>
                                <ul>
                                    {ingredientList.map((ingredient, index) => (
                                        <li key={index+ingredient}>
                                            <label>
                                                <input
                                                type="checkbox"
                                                checked={!!checkIngredients[ingredient]}
                                                onChange={() => checkingIngredients(ingredient)} />
                                            </label>
                                             {ingredient}</li>
                                    ))}
                                    </ul>
                                    <div className='micelaneas'>
                                    <div className='micelaneas1'>
                                        <p>Categorie: {recipe.strCategory}</p>
                                        <p>Area: {recipe.strArea}</p>
                                    </div>
                                    <div className='micelaneas2'>
                                    <ul className="recipe-tag-list">
                                    {recipe.strTags && recipe.strTags.split(',').map((tag, index) => (
                                        <li key={index}>{tag}</li>
                                    ))}
                                    </ul>
                                    </div>
                                </div>
                             </div>
                        </div>    
                        <p className='recipe-text'>{recipe.strInstructions}</p>                        
                    </div>
                    
                </div>
            )}
        </div>
      
    );
}