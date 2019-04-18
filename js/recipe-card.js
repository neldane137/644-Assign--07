/*eslint-env browser*/

function Recipe(title, servings, ingredients) {
    "use strict";
    var i;
    this.title = title;
    this.servings = servings;
    this.ingredients = [];
    for (i = 0; i < ingredients.length; i += 1) {
        this.ingredients.push(ingredients[i]);
    }
    
    Recipe.prototype.displayRecipe = function () {
        var ingredientList;
        ingredientList = this.title + "\n";
        ingredientList += "Serves: " + this.servings + "\n";
        ingredientList += "Ingredients: " + "\n";
        for (i = 0; i < ingredients.length; i += 1) {
            ingredientList += "-" + this.ingredients[i] + "\n";
        }
        return ingredientList;
    };
}

var recipe1 = new Recipe("Guacamole", 4, ["3 Avocado", "1 Lime", "1 Teaspoon Salt", "1/2 Cup Onion", "3 Tablesppons Cilantro", "2 Diced Tomatoes", "1 Teaspoon Garlic", "1 Pinch Ground Pepper"]);

window.console.log(recipe1.displayRecipe());