import React, { useState, useEffect } from 'react';
import RecipeList from './Components/RecipeList';
import './css/app.css';
import { v4 as uuidv4 } from 'uuid';
import RecipeEdit from './Components/RecipeEdit';

export const RecipeContext = React.createContext();

const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes';

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState();
  const [recipes, setRecipes] = useState(sampleRecipes);
  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId);

  useEffect(() => {
    const recipesJSON = localStorage.getItem(LOCAL_STORAGE_KEY);

    if(recipesJSON != null){
      setRecipes(JSON.parse(recipesJSON));
    }
    return () => console.log('recipes set') // Unmount function (aka cleanup)
  }, []) // Empty dependency array = call only once

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]); // Only call when array items change

  const handleRecipeAdd = () => {
    const newRecipe = {
      id: uuidv4(),
      name: 'New',
      servings: 1,
      cookTime: '1:00',
      instructions: 'Instr.',
      ingredients: [{
        id: uuidv4(),
        name: 'Name',
        amount: '1 Tbs'
      }]
    }
  
    setRecipes([...recipes, newRecipe]);
  }

  const handleRecipeDelete = (id) => {
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }

  const handleRecipeSelect = (id) => {
    setSelectedRecipeId(id);
  }

  const recipeContextValue =  {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes} />
      {selectedRecipe && (
        <RecipeEdit recipe={selectedRecipe} />
      )}
    </RecipeContext.Provider>

  )
}

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: "1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken",
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        amount: '2 Pounds'
      },
      {
        id: 2,
        name: 'Salt',
        amount: '1Tbs'
      }
    ]
  },
  {
    id: 2,
    name: 'Plain Pork',
    servings: 5,
    cookTime: '0:45',
    instructions: "1. Put paprika on chicken\n2. Put chicken in oven\n3. Eat chicken",
    ingredients: [
      {
        id: 1,
        name: 'Pork',
        amount: '3 Pounds'
      },
      {
        id: 2,
        name: 'Paprika',
        amount: '2Tbs'
      }
    ]
  }
]

export default App;