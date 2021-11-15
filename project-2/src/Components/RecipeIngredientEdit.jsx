import React from 'react'

const RecipeIngredientEdit = ({ ingredient }) => {
  return (
    <>
      <input type="text" className="recipe-edit__input" value={ingredient.name} />
      <input type="text" className="recipe-edit__input" value={ingredient.amount} />
      <button className="btn btn--danger">&times;</button>
    </>
  )
}

export default RecipeIngredientEdit;
