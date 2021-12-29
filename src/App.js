import React, {useEffect, useState} from 'react'; 
import "./App.css";
import Recipe from './recipe';


const App = () => {

  const APP_ID = "731c3331";
  const APP_KEY = "ca060d09565c11a70455353b0b8e8260	";

  const [recipes, setRecipes]  = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(  () => {
    getRecipes();
  },[query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    // console.log(search);
  }


  const getSeacrh = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('')
  }

  return (
    <div className="App">
      <div className="info">
        <h1>Search Recipe API</h1>
        <span>Note : This app is made with the help of edamam api service</span>
      </div>
      <form onSubmit={getSeacrh} className='search-form'>
        <input type="text" className='search-bar' value={search} onChange={updateSearch}/>
        <button type='submit' className='search-button'>Search</button>
      </form>
      <div className="content">
      {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label}  
          title={recipe.recipe.label}  
          calories={recipe.recipe.calories}
          image={recipe.recipe.image} />
      ))}
      </div>
    </div>
  );
}

export default App;