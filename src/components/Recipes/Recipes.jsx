import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
    const [recipes,setRecipies]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setRecipies(data));
    })
    return (
        <div>
            <h2>recipies:{recipes.length}</h2>
           <div className=" grid md:grid-cols-2 grid-cols-1 gap-3">
           {
            recipes.map(recipe=> <Recipe key={recipe.id} recipe={recipe}></Recipe>)
            }
           </div>
            
        </div>
    );
};

export default Recipes;