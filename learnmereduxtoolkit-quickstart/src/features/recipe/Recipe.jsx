import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addRecipe } from './recipeSlice';

function Recipe() {
  const [recipeName, setRecipeName] = useState('');
  const [recipeDescription, setRecipeDescription] = useState('');

  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);

  const submitRecipe = () => {
    const newRecipe = { name: recipeName, description: recipeDescription };
    console.log({ newRecipe });
    dispatch(addRecipe(newRecipe));
    console.log(recipes);
    setRecipeName('');
    setRecipeDescription('');
  };

  return (
    <div>
      <h2>Recipes</h2>
      <label htmlFor="recipeName">Recipe Name</label>
      <input
        name="recipeName"
        type="text"
        value={recipeName}
        onChange={(e) => setRecipeName(e.target.value)}
      />
      <br />
      <label htmlFor="recipeDescription">Recipe Description</label>
      <input
        name="recipeDescription"
        type="text"
        value={recipeDescription}
        onChange={(e) => setRecipeDescription(e.target.value)}
      />
      <button onClick={submitRecipe}>Submit Recipe</button>

      <ul>
        {recipes.value.map((recipe, i) => {
          <h3 key={i}>
            {recipe.name}name
            <br />
            {recipe.description}
          </h3>;
          console.log('mapped recipe', recipe.name);
        })}
      </ul>
    </div>
  );
}

export default Recipe;
