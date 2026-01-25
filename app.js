const button = document.getElementById("outputbutton");

class Recipe 
{
  constructor() {
    this.title = "";
    this.ingredients = [];
    this.instructions = [];
    this.notes = "";
  }
}

function displayValue()
{
    const inputField1=document.getElementById("title");
    const inputField2=document.getElementById("ingredient");
    const inputField3=document.getElementById("instruction");

    inputValue1=inputField1.value;
    inputValue2=inputField2.value;
    inputValue3=inputField3.value;

    document.getElementById("output").value = "Input value: \n" + inputValue1+"\n"+inputValue2+"\n"+inputValue3;
}

button.addEventListener("click", displayValue);