import { Link } from "react-router-dom";

function CocktailCard ({cocktailToDisplay} ) {

    const handleDeleteCocktail = async (event, id) => {
            // je récupère lid de l'élément cliqué
            // je fait un appel fetch de type delete
            // j'utilise la methode http delete afin de supprimer l'id directement dans la base de données
            await fetch ("https://www.thecocktaildb.com/api/json/v1/1/fake-delete.php?i=" +id, {
            method: "DELETE", 
            }); 
            
    }

    return (
        <article>
            <h2>{cocktailToDisplay.strDrink}</h2>
            <img src= {cocktailToDisplay.strDrinkThumb} alt= {cocktailToDisplay.strDrink}/>
            <Link to= {`/cocktail/detail/${cocktailToDisplay.idDrink}`}> voir détail</Link>   

             {/*un listener a toujours comme premier paramètre dans une fonction un event
             on se sert alors d'une fonction flêchée pour appeler la fonction qui contiens en paramètre l'id de l'élément a supprimer */}
            <button onClick={
                (event) => {
                handleDeleteCocktail (event, cocktailToDisplay.idDrink);
                }}
                
                >Supprimer le cocktail 
            </button>        
        </article>
    )
}

export default CocktailCard;