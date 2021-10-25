import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = 'https://api.airtable.com/v0/appvxbhqTL1DTOaXR/Table%201?api_key='
const API_KEY = 'keyt8Rv1pHLbChQYb';


const BlogPost = ({ postData, toggleFetch, setToggleFetch }) => {

    const deleteRecipe = async () => {
        console.log('DELETE');

        // add toggleFetch
        await axios.delete(API_URL + API_KEY + `&records[]=${postData.id}`);

        setToggleFetch(!toggleFetch);
    };

    return (
      <div>
            <h4>Drink Name: {postData.fields.title}</h4>code <div className=""></div>
            <p>{postData.fields.ingredients}</p>
        <em>Steps: {postData.fields.steps}</em>
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

export default BlogPost;