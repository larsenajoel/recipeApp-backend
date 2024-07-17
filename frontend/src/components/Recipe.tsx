import React from "react";
import "../styles/Recipe.css"

function Recipe({ recipe, onDelete }) {
    

    return (
        <div className="recipe-container">
            <p className="recipe-title">{recipe.title}</p>
            <p className="recipe-content">{recipe.content}</p>
            <button className="delete-button" onClick={() => onDelete(recipe.id)}>
                Delete
            </button>
        </div>
    );
}

export default Recipe