import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = 'https://api.airtable.com/v0/appfw6fQjC0mW34OF/Table%201?api_key='
const API_KEY = 'keyt8Rv1pHLbChQYb';


const RecipeList = ({ postData, toggleFetch, setToggleFetch }) => {

    const deleteRecipe = async () => {
        console.log('DELETE');

        // add toggleFetch
        await axios.delete(API_URL + API_KEY + `&records[]=${postData.id}`);

      setToggleFetch(!toggleFetch);
    };
  
  

    return (
      <div>
        <h4>{postData.fields.Name}</h4>
        
        <p>{postData.fields.measurement1} {postData.fields.ingredient1}</p>
        <p>{postData.fields.measurement2} {postData.fields.ingredient2}</p>
        <em>Steps: {postData.fields.instructions}</em>
        <br />

        <div className = 'links'>
          <button onClick={deleteRecipe}>Delete</button>
          <Link id='edit' to={`/edit/${postData.id}`}>Edit Recipe</Link>
          <Link id='more' to={`/recipes/${postData.id}`}>
            More Info</Link>
        </div>
        
        </div>
    )
}

export default RecipeList;