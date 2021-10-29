import { Link } from "react-router-dom";


const RecipeList = ({ recipeData }) => {
  
  return (
    <div>
      <h3>{recipeData.fields.Name}</h3>
      <img src={recipeData.fields.image} className='thumbnail' alt='drink'></img>
      <br />

      <div className = 'links'>
        <Link id='more' to={`/recipes/${recipeData.id}`}><button className='moreButton'>More Info</button></Link>
      </div>
        
    </div>
  )
}

export default RecipeList;