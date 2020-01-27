const db = require("../../../db-config");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db('recipes');
};

function getShoppingList(recipes_id) {
    return db('recipes_ingredients as ri')
    .join('ingredients as i', 'ri.ingredients_id', 'i.id')
    .where('ri.recipes_id', '=', recipes_id )
    .select('i.name', 'ri.quantity', 'ri.amount', 'ri.amount') 
  };

  function getInstructions(recipes_id) {
    return db('recipe_steps')
      .join('recipe', 'recipe_steps.recipe_id')
      .where("recipe.id", "=", recipes_id)
      .orderBy("instruction")
      .select('recipe_steps.steps', 'recipe_steps.instuctions')
  }