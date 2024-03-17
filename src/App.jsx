import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Recipes from "./components/Recipes/Recipes";
import Cart from "./components/Cart/Cart";

function App() {
  const [selectedRecipes, setSelectedRecipes] = useState([]);

  const handleCard = (recipe) => {
    setSelectedRecipes([...selectedRecipes, recipe]);
  };

  return (
    <>
      <Header />
      <main className="container p-5 mx-auto">
        <div className="w-full m-2 space-y-3 text-center md:w-2/3 p-7">
          <h2 className="text-4xl font-bold text-center">Our Recipes</h2>
          <p>
            Indulge in culinary creativity with our websites recipe section.
            Explore a diverse collection of mouthwatering dishes, from quick
            weeknight meals to gourmet delights. With clear instructions and
            vibrant imagery, our recipes are designed to inspire both novice
            cooks and seasoned chefs alike. Dive in and elevate your cooking
            experience today!
          </p>
        </div>
        <div className="flex flex-col gap-6 md:flex-row">
          <Recipes handleCard={handleCard} />
          <div className="w-full md:w-2/5 rounded-2xl card-container">
            <h2 className="text-4xl font-bold text-center">
              Want to cook: {selectedRecipes.length}
            </h2>
            <hr />
            <div className="p-5 ">
              <div className="flex justify-around">
                <h6>Name</h6>
                <h6 className="ml-2 ">Time</h6>
                <h6>Calories</h6>
                <h6></h6>
              </div>

              <table className="table">
                {/* head */}

                <tbody>
                  {/* row 1 */}
                  {selectedRecipes.map((cart) => (
                    <Cart key={cart.id} cart={cart} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
