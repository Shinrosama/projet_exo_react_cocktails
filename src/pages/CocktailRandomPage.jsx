import { useEffect, useState } from "react";
import Header from "../component/Header";


function CocktailRandomPage () {

    // je cherche a effectuer un premier passage avec l'état par défaut, et pouvoir socker un second état afin d'afficher les éléments voulus.
    const [randomCocktail, setRandomCocktail] = useState (null)
    // j'utilise un if pour laisser le premier passage avec l'état par défaut effectuer les taches de récupération asynchrones
   
   

   //la fonction useEffect permet de passer par la fonction asyc lors du premier chargement et de faire barrage lors des chargements suivants.
   // le tableau vide a la fin de la fonction sert a préciser quand recharger le composant.
    useEffect (() => {
        // la fonction async est spéciale car on ne peu pas faire de await dans une fonction normale, on isole alors dans cette fonction une autre asychrone. 
        (async() => {

            //maintenant que nous sommes dans un environement asychrone on peut utiliser await et faire un fetch duquel on récupère une promesse
            const randomCocktailResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
            //on recoit un premier élément qui doit être tranformé en une version lisible par js
            const coctailJs = await randomCocktailResponse.json()
            // on retourne une nouvelle valeur d'état que l'on stoque tout en rechargeant le composant
            setRandomCocktail (coctailJs.drinks[0]);
        })();
    }, []);

    return (
        <>
            <Header/>
            <main>
                {/* si l'état n'est pas null alors on affiche un cocktail au hazard */}
                {randomCocktail != null ? (
                    <article>
                        <h1>{randomCocktail.strDrink}</h1>
                        <img src= {randomCocktail.strDrinkThumb} alt= {randomCocktail.strDrink}/>
                        <p>Categorie: {randomCocktail.strCategory}</p>
                        <p>Instruction : {randomCocktail.strInstructions}</p>
                    </article>

                ):(

                    // si on charge alors on affiche ce qui suis
                    <p>Cocktail en chargement</p>
                
                )}
            </main>
        </>
     )  
}

export default CocktailRandomPage;