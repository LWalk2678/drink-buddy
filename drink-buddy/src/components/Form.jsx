import axios from "axios";
import { useState } from "react";
import { Redirect, useParams } from "react-router-dom";

const API_URL = 'https://api.airtable.com/v0/appfw6fQjC0mW34OF/Table%201?api_key=';
const API_KEY = 'keyt8Rv1pHLbChQYb';


const Form = ({formType, toggleFetch, setToggleFetch}) => {

  const [Name, setName] = useState([]);
  const [ingredient1, setIngredient1] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [redirectHome, setRedirectHome] = useState(false);
  const params = useParams();
  
  const handlePostRequest = async (ev) => {
    ev.preventDefault();
    console.log('form submitted');

    
    const newDrink = {
      records: [
        {
          fields: {
            Name,
            ingredient1,
            instructions,
          }
        }
      ]
    }

    await axios.post(API_URL + API_KEY, newDrink);

    setRedirectHome(true);
    setToggleFetch(!toggleFetch);
  }

  const handlePutRequest = async (ev) => {
    ev.preventDefault();
    const recipe_id = params.recipe_id;

    const updatedRecipeData = {
      records: [
        {
          id:recipe_id,
          fields: {
            Name,
            ingredient1,
            instructions,
          }
        }
      ]
    }

    await axios.put(API_URL + API_KEY, updatedRecipeData);

    setRedirectHome(true);
    setToggleFetch(!toggleFetch);
  }

  if (redirectHome) {
    return <Redirect to='/'/>
  }
  
  return (
    <div>
      <form onSubmit={formType === 'drink' ? handlePostRequest : handlePutRequest}>
        <br/>
        <label htmlFor="Name">Name:</label>
        <input type="text" id="Name" onChange={(ev) => setName(ev.target.value)} />
        <label htmlFor="ingredient1">Ingredients:</label>
        <input type="text" id="ingredient1" onChange={(ev) => setIngredient1(ev.target.value)} />
        <label htmlFor="instructions">Steps:</label>
        <input type="text" id="instructions" onChange={(ev) => setInstructions(ev.target.value)}/>
        
        <input id='submit' type="submit" />
        
      </form>
      </div>
  )
}

export default Form;