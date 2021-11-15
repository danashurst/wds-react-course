import React from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit'

const RecipeEdit = () => {
    return (
        <div className='recipe-edit'>
          <div>
            <button>&times;</button>
          </div>

          <div>
            <label htmlFor="name">Name</label>
            <input type='text' name='name' id="name" />
            <label htmlFor="cookTime">Cook Time</label>
            <input type='text' name='cookTime' id="cookTime" />
            <label htmlFor="name">Servings</label>
            <input type='number' min='1' name='servings' id="servings" />
            <label htmlFor="name">Instructions</label>
            <textarea name='instructions' id="Instructions" />
          </div>
          <br />
          <label>Ingredients</label>
          <div>
            <div>
              <div>Name</div>
              <div>Amount</div>
              <div></div>
              <RecipeIngredientEdit />
              <RecipeIngredientEdit />
            </div>
            <div>
              <button>Add Ingredient</button>
              </div>
          </div>
            
        </div>
    )
}

export default RecipeEdit