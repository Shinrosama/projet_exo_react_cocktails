import { useEffect, useState } from "react";
import Header from "../component/Header";

function IngredientPage () {

    const [ingredients, setIngredients] = useState(null)

    useEffect (() => {

    (async () => {
        const IngredientsApiResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
        const ingredientApi = await IngredientsApiResponse.json();

        setIngredients(ingredientApi.drinks);
    }) ();

}, []);
    

    return ( 
        <>
            <Header/>
            <main>
                { ingredients ? (
                    <section>
                        {ingredients.map ((ingredient) => {

                            return (
                                <article>
                                    {ingredient.strIngredient1}
                                </article>
                            )
                        })}
                    </section>
                ) : (

                    <p>Liste des ingredients</p>
                
                )}

                
            </main>
        </>
    )
}

export default IngredientPage