import { useEffect, useState } from "react"
import Banner from "./components/Banner/Banner"
import Cards from "./components/Cards/Cards"
import Header from "./components/Header/Header"
import Sidebar from "./components/Sidebar/Sidebar"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [cards, setCards] = useState([]);
  const [product, setProduct] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  useEffect(() => {
    fetch('fakeData.json')
      .then(res => res.json())
      .then(data => setCards(data))
  }, []);
  // toast
  const notify = () => {

  }
  // handle want to cook button 
  const handleSideBar = (products) => {
    const isExit = product.find(item => item.recipe_id === products.recipe_id);
    if (!isExit) {
      const newProducts = [...product, products];
      setProduct(newProducts);
      toast('✔✔ Added for preparing !!')
    }
    else {
      toast('Already exists !!')
    }
  }

  // handle preparing 
  const handleDelete = (id, time, calories) => {

    const newSideBar = product.filter(item => item.recipe_id != id);
    setProduct(newSideBar);
    toast('✔✔ Added for cooking !!')
    setTotalTime(time + totalTime);
    setTotalCalories(calories + totalCalories)
  }

  return (
    <>
      <Header />
      <Banner />
      <main className="container mx-auto px-2 lg:px-5 py-5 lg:py-10">
        <div className="space-y-3 my-5 lg:my-10">
          <h1 className="text-2xl lg:text-4xl text-center text-[#150B2B] font-bold">Our Recipes</h1>
          <p className="mx-auto text-center w-8/12">Welcome to our recipe collection! Here you'll find delicious dishes passed down through generations, alongside creative new favorites. We love using fresh, seasonal ingredients to create healthy and flavorful meals for the whole family.</p>
        </div>
        <div className="flex flex-col-reverse lg:flex-row justify-between gap-5 lg:gap-14">
          <Cards
            cards={cards}
            handleSideBar={handleSideBar}
            notify={notify}
          />
          <Sidebar
            product={product}
            handleDelete={handleDelete}
            totalTime={totalTime}
            totalCalories={totalCalories}
          />
          <ToastContainer />
        </div>
      </main>
    </>
  )
}

export default App
