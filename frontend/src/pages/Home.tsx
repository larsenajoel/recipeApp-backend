import { useState, useEffect } from "react"
import api from "../api"
import Recipe from "../components/Recipe";
import "../styles/Home.css"

function Home() {
    const [recipes, setRecipes] = useState([]);
    const [content, setContent] = useState([]);
    const [title, setTitle] = useState([]);

    useEffect(() => {
        getRecipes();
    }, [])

    const getRecipes = () => {
        api.get("/api/recipes/").then((res) =>res.data).then((data) => {setRecipes(data); console.log(data)}).catch((err) => alert(err));
    }

    const deleteRecipe = (id) => {
        api.delete(`/api/recipes/delete/${id}/`).then((res) => {
            if (res.status === 204) alert("Recipe deleted")
            else alert("Did not delete note")
            getRecipes();
        }).catch((error) => alert(error))
    
    };


    const createRecipe = (e) => {
        e.preventDefault()
        api.post("/api/recipes/", {content, title}).then((res) => {
            if(res.status === 201) alert("Recipe created")
            else alert("Could not add recipe");
            getRecipes();
        })
        .catch((error) => alert(error))
        
    }



    return (
        <div>
            <div>
                <h2>Recipes</h2>
                {recipes.map((recipe) => (
                    <Recipe recipe={recipe} onDelete={deleteRecipe} key={recipe.id} />
                ))}
            </div>
            <h2>Create a Recipe</h2>
            <form onSubmit={createRecipe}>
                <label htmlFor="title">Title:</label>
                <br />
                <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <label htmlFor="content">Content:</label>
                <br />
                <textarea
                    id="content"
                    name="content"
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <br />
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}

export default Home