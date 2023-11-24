import { useState } from "react";
import { json } from "react-router-dom";

function CocktailPage () {


        // je crée un état null de useState afin de faire un premier passage avec un état par défaut
        const [cocktails, setCoctails] = useState (null);


        // pour éviter de faire constament la requète d'un même élément au serveur de l'api on dit que si ce n'est pas l'état par défaut, alors on ne fait plus de fetch
        if (!cocktails) {
    // je vais chercher la liste des cocktails sur une api via une url qui me retournera un tableau d'objets en json.
    // avec fetch je vais chercher les informations via l'url
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")

    // comme je ne reçoi pas directement la totalité de ma requète je récupère d'abord une promesse
    // j'obtiens une réponse qui n'est pas lisible par java script on transforme alors la réponse en json lisible par réact
    
    .then((response) => {

        return response.json();
    }) 

    // quand le fichier json est lisible par java scrip alors on envoi un console log
    .then((cocktailsInJs) => {

        //le console log sert a voir si on a récupéré le fichier lisible par js 
        console.log(cocktailsInJs);
        // on demande de stocker la valeur et de recharger le composant 
        setCoctails (cocktailsInJs.drinks);
    });

}

    return (
        <main>

            {/* si on a chargé le document alors il affiche ce qui suit */}
            {cocktails ? (
                <>
                {/* je veut parcourir mon objet */}
                    {cocktails.map((cocktail) => {
                    return (
                        // je demande d'afficher les noms cocktails présents dans le tableau
                        <article>
                            <h2>{cocktail.strDrink} </h2>
                            <img src= {cocktail.strDrinkThumb} alt= {cocktail.strDrink}/>
                            <p>Categorie: {cocktail.strCategory}</p>
                            <p>Instruction : {cocktail.strInstructions}</p>
                        </article>
                    );
                    })}
                </>
            ) : (
                // tant que le chargement n'est pas terminé il affichera le p
                <p>cocktail chargement</p>
            )}
        </main>

    );
}


export default CocktailPage;