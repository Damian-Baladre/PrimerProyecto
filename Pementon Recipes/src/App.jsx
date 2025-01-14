import { Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { HiMoon, HiOutlineSun } from "react-icons/hi";


import { Header } from './components/Header'
import { Main } from './components/Main';
import { Recipe } from './components/Recipe';
import { RecipesByCategory } from './components/RecipesByCategory'
import { Footer } from './components/Footer';
import './style.css';


export default function App() {

  const [search, setSearch] = useState('');
  const [listRecipes, setListRecipes] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const changeSearch = (value) => { setSearch(value); }

  const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + search

  useEffect(() => {
    const fetchData = async () => {
      try{
      const response = await fetch(API_URL + search);
      const data = await response.json();

      setListRecipes(data.meals);
    }catch (error){ console.log("error message: " + error); }
  }

    if(search) { fetchData();}
  },[search]);
  
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <>
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <Header search={search} changeSearch={changeSearch} />
      <button onClick={toggleDarkMode} className='dark-button'>
          {isDarkMode ? <HiOutlineSun size={40} /> : <HiMoon size={37} />}
        </button>
       
      <Routes>
        <Route index path="/" element={<Main listRecipes={listRecipes} />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/category/:category" element={<RecipesByCategory />} />
      </Routes>
    </div>
     <Footer />
     </>
  )
}

