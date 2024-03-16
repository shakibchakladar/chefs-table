import PropTypes from "prop-types";
import { CiStopwatch } from "react-icons/ci";
import { GiBurningDot } from "react-icons/gi";
const Recipe = ({ recipe, handleCard}) => {
    // console.log(handleCard);
  const {
    recipe_name,
    recipe_image,
    short_description,
    preparing_time,
    calories,
    ingredients,
  } = recipe;

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={recipe_image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{recipe_name}</h2>
          <p className="p-3">{short_description}</p>
          <hr />
          <h4>Ingredients:{ingredients.length}</h4>
          {recipe.ingredients.map((ingredient, index) => (
            // <h2>Ingridient:{ingredient.length}</h2>,
            <li className=" list-disc" key={index}>
              {ingredient}
            </li>
          ))}
          <hr />
          <div className="flex justify-between p-2">
            <div className="flex gap-3 items-center">
              <CiStopwatch /> <p>{preparing_time}</p>
            </div>
            <div className="flex gap-3 items-center">
              <GiBurningDot /> <p>{calories}</p>
            </div>
          </div>
          <div className="card-actions justify-start">
            <button onClick={()=>{handleCard(recipe)}} className="btn bg-green-500 rounded-3xl">Want to cook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.shape({
    recipe_name: PropTypes.string.isRequired,
    recipe_image: PropTypes.string.isRequired,
    short_description: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    preparing_time: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
  }).isRequired,
  handleCard:PropTypes.func
};

export default Recipe;
