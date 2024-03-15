import PropTypes from "prop-types";
const Recipe = ({ recipe }) => {

  const {
    recipe_name,
    recipe_image,
    short_description,
    // preparing_time,
    // calories,
    ingredients
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
              <li className=" list-disc" key={index}>{ingredient}</li>
            ))}
          
          <div className="card-actions justify-start">
            <button className="btn btn-primary">Buy Now</button>
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
};

export default Recipe;


