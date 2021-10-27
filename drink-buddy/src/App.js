import axios from "axios";
import { useEffect, useState } from 'react';
import { Route, Link } from "react-router-dom";
//import Form from "./components/Form.jsx";
import RecipeList from "./components/RecipeList.jsx";
import RecipeInfo from "./components/RecipeInfo.jsx";
import './App.css';

const API_URL = 'https://api.airtable.com/v0/appfw6fQjC0mW34OF/Table%201?api_key='
const API_KEY = 'keyt8Rv1pHLbChQYb';

function App() {

    const [recipes, setRecipes] = useState([]);
    const [toggleFetch, setToggleFetch] = useState(true);
  
  useEffect(() => {
    console.log('Getting Recipes');
    const getRecipes = async () => {
      console.log('Getting request')
      const resp = await axios.get(API_URL + API_KEY);
      console.log(resp.data.records);
      setRecipes(resp.data.records);
    }
    getRecipes();
  }, []);
  
  return (
    <div className="App">
      <nav>
      <Link id= 'home' to="/"><h3>Home</h3></Link>
        Search
        Add
      </nav>
      <div className='main'>
        <div className='Recipe List'>Recipe List
          <Route path='/' exact>
        
            {recipes.map((indRecipe) => (
          
            <RecipeList 
            key={indRecipe.id}
            postData={indRecipe}
            toggleFetch={toggleFetch}
            setToggleFetch={setToggleFetch}
            />
            ))}
          </Route>

          <Route path='/recipes/:id' exact>
        <RecipeInfo
          recipes = {recipes}
        />
          </Route>
          
        </div>
      </div>


      <footer className='footer'>
        GitHub Link
        LinkedIn Link
        Delete record
      </footer>
    </div>
  );
}

export default App;