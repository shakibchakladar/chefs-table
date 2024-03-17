import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = ({ handleCard}) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  return (
    <div>
      <h2>recipes: {recipes.length}</h2>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {recipes.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} handleCard={handleCard} />
        ))}
      </div>
    </div>
  );
};

Recipes.propTypes = {
  handleCard: PropTypes.func,
  handlepreparing:PropTypes.func,
};

export default Recipes;
