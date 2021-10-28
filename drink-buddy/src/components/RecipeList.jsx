import { Link } from "react-router-dom";


const RecipeList = ({ recipeData}) => {


    return (
      <div>
        <h4>{recipeData.fields.Name}</h4>
        <img src={recipeData.fields.image} className='thumbnail'></img>
        {/* <p>{recipeData.fields.ingredient1}</p>
        <p>{recipeData.fields.ingredient2}</p>
        <p>{recipeData.fields.ingredient3}</p>
        <p>{recipeData.fields.ingredient4}</p>
        <p>{recipeData.fields.ingredient5}</p>
        <em>Instructions: {recipeData.fields.instructions}</em> */}
        <br />

        <div className = 'links'>
           <Link id='more' to={`/recipes/${recipeData.id}`}><button>More Info</button></Link>
        </div>
        
        </div>
    )
}

export default RecipeList;