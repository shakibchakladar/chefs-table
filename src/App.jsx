// import { useEffect } from 'react';
import { useState } from 'react';
import './App.css'
// import AddCont from './components/AddCont/AddCont'
import Header from './components/Header/Header'
import Recipes from './components/Recipes/Recipes'

function App() {
  const [cart,setcart]=useState([])

  const handleCard=(p)=>{
    // console.log(p);
    setcart(p)
  }
  return (
    <>
    <Header></Header>
    <main className=' container mx-auto p-5'>
      <div className=' text-center p-7 m-2 space-y-3'>
        <h2 className=' text-4xl font-bold text-center'>Our Recipes</h2>
        <p>Indulge in culinary creativity with our websites <br/> recipe section. Explore a diverse collection of mouthwatering dishes, from quick weeknight meals to gourmet delights. <br /> With clear instructions and vibrant imagery, our recipes are designed to inspire both novice cooks and seasoned chefs alike. <br></br> Dive in and elevate your cooking experience today!</p>
      </div>
      <div className=' flex md:flex-row flex-col'>
        <Recipes handleCard={handleCard}></Recipes>
        {/* <AddCont></AddCont> */}
        <div className=" card-container w-2/6 border-green-400 border-2">
            <h2 className="text-4xl font-bold text-center">Want to cook:{cart.length}</h2>
            <hr />
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className="bg-base-200">
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
    </tbody>
  </table>

{
  

}

</div>
            
        </div>
      </div>
    </main>

    </>
  )
}

export default App
