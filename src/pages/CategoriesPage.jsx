import { useEffect, useState } from "react";
import Header from "../component/Header";

function CategoriesPage () {

    const [categories,setCategories] = useState (null)

    useEffect(() =>{
        (async ()=>{
            const categoriesFetchResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
            const categoriesFetch = await categoriesFetchResponse.json()
            console.log(categoriesFetch)
            setCategories(categoriesFetch.drinks);
        })()
    },[] );

    return (
        <>
            <Header/>
            <main>
                {categories ? (
                    <div>
                        {categories.map((category) => {
                            return (
                                <article>
                                    <h2>{category.strCategory} </h2>
                                </article>
                            )
                        })}
                    </div>
                ) : (

                    <p>Loading</p>
                )}
            </main>
        </>
    )
}

export default CategoriesPage;