import { Link } from "react-router-dom";


const RecipeList = ({ recipeData}) => {


    return (
      <div>
        <h4>{recipeData.fields.Name}</h4>
        
        <p>{recipeData.fields.measurement1} {recipeData.fields.ingredient1}</p>
        <p>{recipeData.fields.measurement2} {recipeData.fields.ingredient2}</p>
        <em>Steps: {recipeData.fields.instructions}</em>
        <br />

        <div className = 'links'>
           <Link id='more' to={`/recipes/${recipeData.id}`}>
            More Info</Link>
        </div>
        
        </div>
    )
}

export default RecipeList;