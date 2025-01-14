import { useState, useEffect } from 'react';
import { HiArrowsRightLeft } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

export function RandomRecipes (){
    const [recipe, setRecipe] = useState(null);
    const [description, setDescription] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    
    const API_URL = "https://www.themealdb.com/api/json/v1/1/random.php";
        
    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        setIsLoading(true);
        try{
                const response = await fetch(API_URL);
                const data = await response.json();
        
                setRecipe(data.meals[0]);
                setDescription(data.meals[0].strInstructions.substring(0, 100) + "..." );
        }catch (error) { console.log("error message: "+ error);}
        finally{
            setIsLoading(false);
        }
         };
    
         

    return(
        <>
            { recipe &&
            <article className="recipe-main">
                <div className="card-random">
                    <Link className="card-random link" style={{ textDecoration: 'none', color: 'inherit'}} to={`recipe/${recipe.idMeal}`}>
                    <img className='random-img' src={ recipe.strMealThumb } alt={ recipe.strMeal } />
                    <div className="content">
                        <h2>{ recipe.strMeal }</h2>
                        <p>{ description }</p>
                    </div>
                    </Link>
                <button className="button random-btn" onClick={ () => fetchData() }>
                    { isLoading &&
                       <div className="spin"></div>
                    }
                    {
                       !isLoading && <> <HiArrowsRightLeft size={32} /> </>
                    }
                </button>
               </div> 
            </article>
             }
             { recipe == '' &&
             Array(1).fill().map((_, index) => (
                <div className="random-placeholder">
                    <img className='random-img-placeholder' src={''} alt={ recipe.strMeal } />
                    <div className="content-placeholder">
                    </div>
               </div> 
             ))    
        }
        </>
    );
}