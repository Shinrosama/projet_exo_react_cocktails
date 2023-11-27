import { Link } from "react-router-dom";

function CocktailCard ({cocktailToDisplay} ) {

    return (
        <article>
            <h2>{cocktailToDisplay.strDrink}</h2>
            <img src= {cocktailToDisplay.strDrinkThumb} alt= {cocktailToDisplay.strDrink}/>
            <Link to= {`/cocktail/detail/${cocktailToDisplay.idDrink}`}> voir détail</Link>            
        </article>
    )
}

export default CocktailCard;