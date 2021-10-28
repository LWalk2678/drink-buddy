import axios from "axios";
import { useEffect, useState } from 'react';
import { Route, Link } from "react-router-dom";
import Form from "./components/Form.jsx";
import RecipeList from "./components/RecipeList.jsx";
import RecipeInfo from "./components/RecipeInfo.jsx";
import About from "./components/About.jsx";
import GitHub32 from "./images/GitHub32.png";
import LIBug from "./images/LIBug.png";
import './App.css';

const API_URL = 'https://api.airtable.com/v0/appfw6fQjC0mW34OF/Table%201?api_key='
const API_KEY = 'keyt8Rv1pHLbChQYb';

function App() {

    const [recipes, setRecipes] = useState([]);
    const [toggleFetch, setToggleFetch] = useState(true);
  
  useEffect(() => {
    const getRecipes = async () => {
      const resp = await axios.get(API_URL + API_KEY);
      console.log(resp.data)
      console.log(resp.data.records);
      setRecipes(resp.data.records);
    }
    getRecipes();
  }, [toggleFetch]);

  
    
  return (
    <div className="App">
      <nav>
        <Link id= 'home' to="/"><h3>Home</h3></Link>
        <Link id= 'newdrink' to="/newdrink"><h3>Add a Drink</h3></Link>
        <Link id= 'about' to="/about"><h3>About</h3></Link>
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


      <footer className='footer'>
       
        <a target="_blank" href='https://github.com/LWalk2678'><img src={GitHub32} className="githubIcon" alt='GitHub'/></a>
        
        <a target="_blank" href='https://www.linkedin.com/in/lancewalkerco/'><img src={LIBug} className="linkedInIcon" alt='LinkedIn'/></a>
        
      </footer>
    </div>
  );
}

export default App;