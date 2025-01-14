import { RandomRecipes } from './RandomRecipes';
import { ListRecipes } from './ListRecipes'

export function Main ({listRecipes}){
    return(
        <>
        <RandomRecipes />
        <ListRecipes listRecipes={listRecipes} />
        
        </>
    );
}