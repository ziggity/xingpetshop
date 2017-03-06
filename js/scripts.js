function Pet(animalType, name, age, color){
  this.animalType = animalType;
  this.name = name;
  this.age = age;
  this.color = color;
};





$(document).ready(function(){
  $("#formInput1").submit(function(event){
    event.preventDefault();
    var petType = $("#dogAdoption2").val();
    console.log(petType)
    var petName = $("#name").val();
    console.log(petName)
    var petColor = $("#color").val();
    console.log(petColor)
    var petAge = parseInt($("#age").val());
    console.log(petAge)

  if(petType === "Cat"){
    var cat = new Pet (petType, petName, petAge, petAge);
    console.log(cat.name);
    console.log("here")
  } else if (petType==="Dog"){
    var dog = new Pet (petType, petName, petAge, petAge);
    console.log(dog);
  } else if (petType==="Pig"){
    var pig = new Pet (petType, petName, petAge, petAge);
    console.log(pig);
  };

    $("#t1").append('<ul><li>Name: ' + cat.name + '</li><li>Age: ' + cat.age + '</li><li>Color: ' + cat.color + '</li>');
    $("#t2").append('<ul><li>Name: ' + dog.name + '</li><li>Age: ' + dog.age + '</li><li>Color: ' + dog.color + '</li>');
    $("#t3").append('<ul><li>Name: ' + pig.name + '</li><li>Age: ' + pig.age + '</li><li>Color: ' + pig.color + '</li>');









  })
})
