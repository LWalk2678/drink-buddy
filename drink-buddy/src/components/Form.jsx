import axios from "axios";
import { useState } from "react";
import { Redirect, useParams } from "react-router-dom";

const API_URL = 'https://api.airtable.com/v0/appfw6fQjC0mW34OF/Table%201?api_key=';
const API_KEY = 'keyt8Rv1pHLbChQYb';


const Form = ({formType, toggleFetch, setToggleFetch}) => {

  const [Name, setName] = useState([]);
  // const [drinkType, setDrinkType] = useState([]);
  const [measurement1, setMeasurement1] = useState([]);
  const [ingredient1, setIngredient1] = useState('');
  const [measurement2, setMeasurement2] = useState([]);
  const [ingredient2, setIngredient2] = useState('');
  const [measurement3, setMeasurement3] = useState('n/a');
  const [ingredient3, setIngredient3] = useState('');
  // const [measurement4, setMeasurement4] = useState([]);
  // const [ingredient4, setIngredient4] = useState('');
  // const [measurement5, setMeasurement5] = useState([]);
  // const [ingredient5, setIngredient5] = useState('');
  // const [measurement6, setMeasurement6] = useState([]);
  // const [ingredient6, setIngredient6] = useState('');
  // const [measurement7, setMeasurement7] = useState([]);
  // const [ingredient7, setIngredient7] = useState('');
  // const [measurement8, setMeasurement8] = useState([]);
  // const [ingredient8, setIngredient8] = useState('');
  // const [glassType, setGlassType] = useState([]);
  // const [garnish, setGarnish] = useState([]);
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
            // drinkType,
            measurement1,
            ingredient1,
            measurement2,
            ingredient2,
            measurement3,
            // ingredient3,
            // measurement4,
            // ingredient4,
            // measurement5,
            // ingredient5,
            // measurement6,
            // ingredient6,
            // measurement7,
            // ingredient7,
            // measurement8,
            // ingredient8,
            // glassType,
            // garnish,
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
            // drinkType,
            measurement1,
            ingredient1,
            measurement2,
            ingredient2,
            measurement3,
            // ingredient3,
            // measurement4,
            // ingredient4,
            // measurement5,
            // ingredient5,
            // measurement6,
            // ingredient6,
            // measurement7,
            // ingredient7,
            // measurement8,
            // ingredient8,
            // glassType,
            // garnish,
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
        <br />
          <label htmlFor="Name">Drink Name:</label>
          <input type="text" id="Name" onChange={(ev) => setName(ev.target.value)} />
        <br />
          {/* <label htmlFor="drinkType">Drink Type:</label>
          <select id="drinkType" onChange={(ev) => setDrinkType(ev.target.value)}>
            <option value=''> --- </option>
            <option value='Mixed-drink'> mixed-drink</option>
            <option value='Martini'> Martini</option>
            <option value='Shot'> Shot</option>
          </select>
        <br /> */}
          <label htmlFor="meaurement1">Ingredient 1:</label>
          <select id="measurement1" onChange={(ev) => setMeasurement1(ev.target.value)}>
            <option value='n/a'> --- </option>
            <option value='1/4 oz'> 1/4 oz</option>
            <option value='1/2 oz'> 1/2 oz</option>
            <option value='3/4 oz'> 3/4 oz</option>
            <option value='1 oz'> 1 oz</option>
            <option value='1 1/4 oz'> 1 1/4 oz</option>
            <option value='1 1/2 oz'> 1 1/2 oz</option>
            <option value='2 oz'> 2 oz</option>
            <option value='3 oz'> 3 oz</option>
            <option value='4 oz'> 4 oz</option>
            <option value='fill'> fill</option>
            <option value='splash'> splash</option>
          </select>
          <label htmlFor="ingredient1"></label>
          <input type="text" placeholder='ingredient 1 name' id="ingredient1" onChange={(ev) => setIngredient1(ev.target.value)} />
        <br />
          <label htmlFor="meaurement2">Ingredient 2:</label>
          <select id="measurement2" onChange={(ev) => setMeasurement2(ev.target.value)}>
            <option value='n/a'> --- </option>
            <option value='1/4 oz'> 1/4 oz</option>
            <option value='1/2 oz'> 1/2 oz</option>
            <option value='3/4 oz'> 3/4 oz</option>
            <option value='1 oz'> 1 oz</option>
            <option value='1 1/4 oz'> 1 1/4 oz</option>
            <option value='1 1/2 oz'> 1 1/2 oz</option>
            <option value='2 oz'> 2 oz</option>
            <option value='3 oz'> 3 oz</option>
            <option value='4 oz'> 4 oz</option>
            <option value='fill'> fill</option>
            <option value='splash'> splash</option>
          </select>
          <label htmlFor="ingredient2"></label>
          <input type="text" placeholder='ingredient 2 name' id="ingredient2" onChange={(ev) => setIngredient2(ev.target.value)} />
        <br />
          <label htmlFor="meaurement3">Ingredient 3:</label>
          <select id="measurement3" onChange={(ev) => setMeasurement3(ev.target.value)}>
            {/* <option value='n/a'> --- </option> */}
            <option value='1/4 oz'> 1/4 oz</option>
            <option value='1/2 oz'> 1/2 oz</option>
            <option value='3/4 oz'> 3/4 oz</option>
            <option value='1 oz'> 1 oz</option>
            <option value='1 1/4 oz'> 1 1/4 oz</option>
            <option value='1 1/2 oz'> 1 1/2 oz</option>
            <option value='2 oz'> 2 oz</option>
            <option value='3 oz'> 3 oz</option>
            <option value='4 oz'> 4 oz</option>
            <option value='fill'> fill</option>
            <option value='splash'> splash</option>
          </select>
          <label htmlFor="ingredient3"></label>
          <input type="text" placeholder='ingredient 3 name' id="ingredient3" onChange={(ev) => setIngredient3(ev.target.value)} />
        <br />
          {/* <label htmlFor="meaurement4">Ingredient 4:</label>
          <select id="measurement4" onChange={(ev) => setMeasurement4(ev.target.value)}>
            <option value=''> --- </option>
            <option value='1/4 oz'> 1/4 oz</option>
            <option value='1/2 oz'> 1/2 oz</option>
            <option value='3/4 oz'> 3/4 oz</option>
            <option value='1 oz'> 1 oz</option>
            <option value='1 1/4 oz'> 1 1/4 oz</option>
            <option value='1 1/2 oz'> 1 1/2 oz</option>
            <option value='2 oz'> 2 oz</option>
            <option value='3 oz'> 3 oz</option>
            <option value='4 oz'> 4 oz</option>
            <option value='fill'> fill</option>
            <option value='splash'> splash</option>
          </select>
          <label htmlFor="ingredient4"></label>
          <input type="text" placeholder='ingredient 4 name' id="ingredient4" onChange={(ev) => setIngredient4(ev.target.value)} />
        <br />
          <label htmlFor="meaurement5">Ingredient 5:</label>
          <select id="measurement5" onChange={(ev) => setMeasurement5(ev.target.value)}>
            <option value=''> --- </option>
            <option value='1/4 oz'> 1/4 oz</option>
            <option value='1/2 oz'> 1/2 oz</option>
            <option value='3/4 oz'> 3/4 oz</option>
            <option value='1 oz'> 1 oz</option>
            <option value='1 1/4 oz'> 1 1/4 oz</option>
            <option value='1 1/2 oz'> 1 1/2 oz</option>
            <option value='2 oz'> 2 oz</option>
            <option value='3 oz'> 3 oz</option>
            <option value='4 oz'> 4 oz</option>
            <option value='fill'> fill</option>
            <option value='splash'> splash</option>
          </select>
          <label htmlFor="ingredient5"></label>
          <input type="text" placeholder='ingredient 5 name' id="ingredient5" onChange={(ev) => setIngredient5(ev.target.value)} />
        <br />
          <label htmlFor="meaurement6">Ingredient 6:</label>
          <select id="measurement6" onChange={(ev) => setMeasurement6(ev.target.value)}>
            <option value=''> --- </option>
            <option value='1/4 oz'> 1/4 oz</option>
            <option value='1/2 oz'> 1/2 oz</option>
            <option value='3/4 oz'> 3/4 oz</option>
            <option value='1 oz'> 1 oz</option>
            <option value='1 1/4 oz'> 1 1/4 oz</option>
            <option value='1 1/2 oz'> 1 1/2 oz</option>
            <option value='2 oz'> 2 oz</option>
            <option value='3 oz'> 3 oz</option>
            <option value='4 oz'> 4 oz</option>
            <option value='fill'> fill</option>
            <option value='splash'> splash</option>
          </select>
          <label htmlFor="ingredient6"></label>
          <input type="text" placeholder='ingredient 6 name' id="ingredient6" onChange={(ev) => setIngredient6(ev.target.value)} />
        <br />
          <label htmlFor="meaurement7">Ingredient 7:</label>
          <select id="measurement7" onChange={(ev) => setMeasurement7(ev.target.value)}>
            <option value=''> --- </option>
            <option value='1/4 oz'> 1/4 oz</option>
            <option value='1/2 oz'> 1/2 oz</option>
            <option value='3/4 oz'> 3/4 oz</option>
            <option value='1 oz'> 1 oz</option>
            <option value='1 1/4 oz'> 1 1/4 oz</option>
            <option value='1 1/2 oz'> 1 1/2 oz</option>
            <option value='2 oz'> 2 oz</option>
            <option value='3 oz'> 3 oz</option>
            <option value='4 oz'> 4 oz</option>
            <option value='fill'> fill</option>
            <option value='splash'> splash</option>
          </select>
          <label htmlFor="ingredient7"></label>
          <input type="text" placeholder='ingredient 7 name' id="ingredient7" onChange={(ev) => setIngredient7(ev.target.value)} />
        <br />
          <label htmlFor="meaurement8">Ingredient 8:</label>
          <select id="measurement8" onChange={(ev) => setMeasurement8(ev.target.value)}>
            <option value=''> --- </option>
            <option value='1/4 oz'> 1/4 oz</option>
            <option value='1/2 oz'> 1/2 oz</option>
            <option value='3/4 oz'> 3/4 oz</option>
            <option value='1 oz'> 1 oz</option>
            <option value='1 1/4 oz'> 1 1/4 oz</option>
            <option value='1 1/2 oz'> 1 1/2 oz</option>
            <option value='2 oz'> 2 oz</option>
            <option value='3 oz'> 3 oz</option>
            <option value='4 oz'> 4 oz</option>
            <option value='fill'> fill</option>
            <option value='splash'> splash</option>
          </select>
          <label htmlFor="ingredient8"></label>
          <input type="text" placeholder='ingredient 8 name' id="ingredient8" onChange={(ev) => setIngredient8(ev.target.value)} />
        <br />
          <label htmlFor="glassType">Glass:</label>
          <select id="glassType" onChange={(ev) => setGlassType(ev.target.value)}>
            <option value=''> --- </option>
            <option value='Rocks'> Rocks</option>
            <option value='Highball'> Highball</option>
            <option value='Martini'> Martini</option>
            <option value='Shot'> Shot</option>
          </select>
        <br />
          <label htmlFor="garnish">Garnish:</label>
          <input type="text" id="garnish" placeholder="Lime, Lemon, Sugar, etc." onChange={(ev) => setGarnish(ev.target.value)}/>
        <br/> */}
          <label htmlFor="instructions">Instructions:</label>
          <input type="text" id="instructions" onChange={(ev) => setInstructions(ev.target.value)}/>
        
        <input id='submit' type="submit" />
        
      </form>
    </div>
  )
}

export default Form;