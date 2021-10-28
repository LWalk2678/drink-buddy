import { Link } from "react-router-dom";


const RecipeList = ({ recipeData }) => {
  
  console.log(`Inside RecipeList Component ${recipeData.fields.Name}`)
  
    return (
      <div>
        <h3>{recipeData.fields.Name}</h3>
        <img src={recipeData.fields.image} className='thumbnail' alt='drink'></img>
        {/* <p>{recipeData.fields.ingredient1}</p>
        <p>{recipeData.fields.ingredient2}</p>
        <p>{recipeData.fields.ingredient3}</p>
        <p>{recipeData.fields.ingredient4}</p>
        <p>{recipeData.fields.ingredient5}</p>
        <em>Instructions: {recipeData.fields.instructions}</em> */}
        <br />

        <div className = 'links'>
           <Link id='more' to={`/recipes/${recipeData.id}`}><button className='moreButton'>More Info</button></Link>
        </div>
        
        </div>
    )
}

export default RecipeList;