import { useParams } from "react-router-dom"


const Display = ({recipes}) => {

  const params = useParams()
  const currentRecipe = recipes.find(oneRecipe => oneRecipe.id === params.id)

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
      </div>
      
  )
    
}

export default Display