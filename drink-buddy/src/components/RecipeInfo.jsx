import { useParams } from "react-router-dom"
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = 'https://api.airtable.com/v0/appfw6fQjC0mW34OF/Table%201?api_key='
const API_KEY = 'keyt8Rv1pHLbChQYb';

const Display = ({recipes, toggleFetch, setToggleFetch }) => {

  const params = useParams()
  const currentRecipe = recipes.find(oneRecipe => oneRecipe.id === params.id)

  const deleteRecipe = async () => {
    console.log('DELETE');

    // add toggleFetch
    await axios.delete(API_URL + API_KEY + `&records[]=${currentRecipe.id}`);

  setToggleFetch(!toggleFetch);
};

  return (

      <div>
      <h2>{currentRecipe.fields.Name}</h2>
      <img src={currentRecipe.fields.image} alt={currentRecipe.fields.Name} className="drinkPhoto"/>
        <div>
          <ul>
            <li>{currentRecipe.fields.measurement1} {currentRecipe.fields.ingredient1}</li>
            <li>{currentRecipe.fields.ingredient2}</li>
          </ul>
        </div>
      <p>Instructions:{currentRecipe.fields.instructions}</p>
      <div className = 'links'>
          <button onClick={deleteRecipe}>Delete</button>
        <Link id='edit' to={`/edit/${currentRecipe.id}`}>Edit Recipe</Link>
      </div>
      
      </div>
      
  )
    
}

export default Display