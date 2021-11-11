import React from 'react';
import Recipe from './Recipe';

const RecipeList = ({Recipes}) => {
    return (
      <div className="recipe-list">
        <div>
        {Recipes.map(recipe => {
          return (
            <Recipe key={recipe.id} {...recipe} />
          )})}
        </div>
        <div className="recipe-list__add-recipe-btn-container">
          <button className="btn btn--primary">Add Recipe</button>
        </div>
      </div>
    );
}

export default RecipeList;