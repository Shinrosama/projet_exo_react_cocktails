import { Link } from "react-router-dom"

function Header () {

    return (
        <>
            <div>
                <h2> Alcool</h2>
                <ul>
                    <li>
                        <Link to="/">Home</Link> 
                    </li>
                    <li>
                        <Link to="/cocktail">coctails</Link> 
                    </li>
                    <li>
                        <Link to="/coctailRandom">Random Cocktail</Link>
                    </li>
                    <li>
                        <Link to="/categories">Categories</Link>
                    </li>
                    <li>
                        <Link to={"/ingredients"}>Ingredients</Link>
                    </li>

                </ul>
                
                     
            </div>
        </>
    )
}

export default Header