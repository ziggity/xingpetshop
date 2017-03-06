function Pet(name, age, color){
  this.name = name;
  this.age = age;
  this.color = color;
};


var inputPet = "";
var petName = "";
var petColor = "";
var petAge = "";

function inputs () {
  inputPet = $("#dogAdoption2").val();
  petName = $("#name").val();
  petColor = $("#color").val();
  petAge = parseInt($("#age").val());
};

function choose () {
  if(inputPet==="cat"){
    var cat = new Pet(petName,petAge,petColor);
  } else if (inputPet === "dog") {
    var dog = new Pet(petName,petAge,petColor);
  } else if (inputPet === "pig") {
    var pig = new Pet(petName,petAge,petColor);
  }
};




$(document).ready(function(){
  $("#formInput1").submit(function(event){
    event.preventDefault();
    inputs();
    choose();







  })
})
