const button = document.getElementById("output-button");

// model class for recipe to put things into LaTeX format
class Recipe 
{
  constructor() {
    this.title = "";
    this.ingredients = [];
    this.instructions = [];
    this.notes = "";
  }
}

// displays values in 3 input fields to text box after pressing button on page
function displayValue()
{
    const titleField=document.getElementById("recipe-title");
    const subtitleField=document.getElementById("recipe-subtitle");
    const ingredientField=document.getElementById("ingredient");
    const instructionField=document.getElementById("instruction");

    const title = titleField.value;
    const subtitle = subtitleField.value;
    const ingredients = ingredientField.value;
    const instructions = instructionField.value;

    document.getElementById("output").innerText =`Title: ${title}\nSubtitle: ${subtitle}\n\nIngredients:\n${ingredients}\n\nInstructions:\n${instructions}`;
}

button.addEventListener("click", displayValue);