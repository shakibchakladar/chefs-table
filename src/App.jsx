import './App.css'
import AddCont from './components/AddCont/AddCont'
import Header from './components/Header/Header'
import Recipes from './components/Recipes/Recipes'

function App() {
  return (
    <>
    <Header></Header>
    <main className=' container mx-auto p-5'>
      <div className=' text-center p-7 m-2 space-y-3'>
        <h2 className=' text-4xl font-bold text-center'>Our Recipes</h2>
        <p>Indulge in culinary creativity with our websites <br/> recipe section. Explore a diverse collection of mouthwatering dishes, from quick weeknight meals to gourmet delights. <br /> With clear instructions and vibrant imagery, our recipes are designed to inspire both novice cooks and seasoned chefs alike. <br></br> Dive in and elevate your cooking experience today!</p>
      </div>
      <div className=' flex md:flex-row flex-col'>
        <Recipes></Recipes>
        <AddCont></AddCont>
      </div>
    </main>

    </>
  )
}

export default App
