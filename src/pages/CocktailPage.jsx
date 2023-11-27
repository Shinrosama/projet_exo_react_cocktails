import { useEffect, useState } from "react";
import { Link, json } from "react-router-dom";
import Header from "../component/Header";

function CocktailPage () {


        // je crée un état null de useState afin de faire un premier passage avec un état par défaut
        const [cocktails, setCoctails] = useState (null);


        // pour éviter de faire constament la requète d'un même élément au serveur de l'api on dit que si ce n'est pas l'état par défaut, alors on ne fait plus de fetch
        useEffect (() => {
    // je vais chercher la liste des cocktails sur une api via une url qui me retournera un tableau d'objets en json.
    // avec fetch je vais chercher les informations via l'url
    // fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")

    // // comme je ne reçoi pas directement la totalité de ma requète je récupère d'abord une promesse
    // // j'obtiens une réponse qui n'est pas lisible par java script on transforme alors la réponse en json lisible par réact
    
    // .then((response) => {

    //     return response.json();
    // }) 

    // // quand le fichier json est lisible par java scrip alors on envoi un console log
    // .then((cocktailsInJs) => {

    //     //le console log sert a voir si on a récupéré le fichier lisible par js 
    //     console.log(cocktailsInJs);
    //     // on demande de stocker la valeur et de recharger le composant 
    //     setCoctails (cocktailsInJs.drinks);
    // });

// fonction anonyme asynchrone (elle pas de nom)
    // qui s'autoinvoque
    // cela permet d'effectuer des opérations asynchrones (fetch etc)
    // sans devoir créer une vraie fonction asynchrone
    // (qu'on devrait appeler avec un await)
    (async () => {

        // on appelle l'url avec le fetch on obtiens une promesse et on met await parce que la reception n'est pas immédiate (asycrhrone)
        const coktailsResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=");
        // on traite le document reçu pour le faire passer de json en un format lisible par js le await sert car ce n'est pas immédiat
        const cocktailsInJs = await coktailsResponse.json();

        // setCocktails sert a stocker la nouvelle valeur du state et recharger le composant
        setCoctails(cocktailsInJs.drinks);
      })();
    }, []);
    return (
        
        <>
            <Header/>
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
                                <Link to= {`/cocktail/detail/${cocktail.idDrink}`}> voir détail</Link> 
                                
                            </article>
                        );
                        })}
                    </>
                ) : (
                    // tant que le chargement n'est pas terminé il affichera le p
                    <p>cocktail chargement</p>
                )}
            </main>
        </>
    );
}


export default CocktailPage;