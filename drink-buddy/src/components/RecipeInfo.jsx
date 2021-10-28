import { useParams } from "react-router-dom"
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = 'https://api.airtable.com/v0/appfw6fQjC0mW34OF/Table%201?api_key='
const API_KEY = 'keyt8Rv1pHLbChQYb';

const Display = ({recipes, toggleFetch, setToggleFetch }) => {

  const params = useParams()
  const currentRecipe = recipes.find(oneRecipe => oneRecipe.id === params.id)

  const deleteRecipe = async () => {
    // add toggleFetch
    await axios.delete(API_URL + API_KEY + `&records[]=${currentRecipe.id}`);
    
    setToggleFetch(!toggleFetch);
    
  };
  

  return (

      <div>
      <h2>{currentRecipe.fields.Name}</h2>
      <img src={currentRecipe.fields.image} alt={currentRecipe.fields.Name} className="drinkPhoto" />
      <br/>
        <div className='ingredientList'>
          <ul>
          {currentRecipe.fields.ingredient1 ? <li>{currentRecipe.fields.measurement1} {currentRecipe.fields.ingredient1} </li> : null}
          {currentRecipe.fields.ingredient2 ? <li>{currentRecipe.fields.measurement2} {currentRecipe.fields.ingredient2} </li> : null}
          {currentRecipe.fields.ingredient3 ? <li>{currentRecipe.fields.measurement3} {currentRecipe.fields.ingredient3} </li> : null }
          {currentRecipe.fields.ingredient4 ? <li>{currentRecipe.fields.measurement4} {currentRecipe.fields.ingredient4} </li> : null }
          {currentRecipe.fields.ingredient5 ? <li>{currentRecipe.fields.measurement5} {currentRecipe.fields.ingredient5} </li> : null }
          {currentRecipe.fields.ingredient6 ? <li>{currentRecipe.fields.measurement6} {currentRecipe.fields.ingredient6} </li> : null}
          {currentRecipe.fields.ingredient7 ? <li>{currentRecipe.fields.measurement7} {currentRecipe.fields.ingredient7} </li> : null }
          {currentRecipe.fields.ingredient8 ? <li>{currentRecipe.fields.measurement8} {currentRecipe.fields.ingredient8} </li> : null }
            
          </ul>
      </div>
      <br/>
      <em>Instructions: {currentRecipe.fields.instructions}</em>
      <br />
      <br />
      <br />
            <div className = 'links'>
          <button onClick={deleteRecipe} className='infoButtons'>Delete</button>
        <Link id='edit' to={`/edit/${currentRecipe.id}`}><button className='infoButtons'>Edit Recipe</button></Link>
        <br />
        <br />
      </div>
      
      </div>
  )
    
}

export default Display