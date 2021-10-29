import axios from "axios";
import { useEffect, useState } from 'react';
import { Route } from "react-router-dom";
import Form from "./components/Form.jsx";
import RecipeList from "./components/RecipeList.jsx";
import RecipeInfo from "./components/RecipeInfo.jsx";
import About from "./components/About.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import './App.css';

const API_URL = 'https://api.airtable.com/v0/appfw6fQjC0mW34OF/Table%201?api_key='
const API_KEY = 'keyt8Rv1pHLbChQYb';

function App() {

    const [recipes, setRecipes] = useState([]);
    const [toggleFetch, setToggleFetch] = useState(true);
  
  useEffect(() => {
    const getRecipes = async () => {
      const resp = await axios.get(API_URL + API_KEY);

      resp.data.records.sort((a, b) => {
        if (a.fields.Name < b.fields.Name) {
          return -1;
        }
        if (a.fields.Name > b.fields.Name) {
          return 1;
        } return 0;
      });
      setRecipes(resp.data.records)
    }
    getRecipes();
  }, [toggleFetch]);
    
  return (
    <div className="App">
      <nav>
        <Navbar />
      </nav>
      <div className='main'>
        <div className='body'>
          <div className='drinkOfDay'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/e/ee/Bartender.svg' className='bartender' alt='Bartender'></img>
            <h2>{recipes.fields}</h2>
            
          </div>
          <div className='Recipe List'>

            {/* Routing to Home page listing all Recipes */}
            <Route path='/' exact>
              {recipes.map((indRecipe) => (
                <RecipeList 
                key={indRecipe.id}
                recipeData={indRecipe}
                />
              ))}
            </Route>
          </div>
          
            {/* Routing to Add New recipe in Form Component */}
            <Route path='/newdrink' exact>
              <Form
                formType={'drink'}
                toggleFetch={toggleFetch}
                setToggleFetch={setToggleFetch}
              />
            </Route>

            {/* Routing to Edit a recipe with put request in Form Component */}
            <Route path='/edit/:recipe_id' exact>
              <Form
                formType={'put'}
                toggleFetch={toggleFetch}
                setToggleFetch={setToggleFetch}
              />
            </Route>

            {/* Routing to the About Page */}
            <Route path='/about' exact>
              <About/>
            </Route>
          
          {/* Routing to single Recipe Info */}
          <Route path='/recipes/:id' exact>
            <RecipeInfo
              recipes={recipes}
              toggleFetch={toggleFetch}
              setToggleFetch={setToggleFetch}
            />
          </Route>
          
          
          </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;