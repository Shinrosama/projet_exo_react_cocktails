import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Header from "../component/Header";

function CocktailDetailPage () {

    const {id} = useParams();

    const [cocktail, setCocktail] = useState(null);

useEffect ( () => {  
    (async () => {

        const cocktailApiResponse = await  fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id )
        const cocktailApi = await cocktailApiResponse.json()

        setCocktail(cocktailApi.drinks[0])
    })();

},[])

    return (
        <>
            <Header/>
            <main>
                {cocktail ? (
                 <article>
                        <h2>{cocktail.strDrink} </h2>
                        <img src= {cocktail.strDrinkThumb} alt= {cocktail.strDrink}/>
                        <p>Categorie: {cocktail.strCategory}</p>
                        <p>Instruction : {cocktail.strInstructions}</p>

                 </article>   
                ):(
                    <p>Pas de cocktail</p>
                )}
                <p>test</p>
            </main>
            
        </>
    )
}

export default CocktailDetailPage