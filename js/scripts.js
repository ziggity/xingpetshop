function Pet(petType, name, age, color){
  this.petType = petType;
  this.nm = name;
  this.color = color;
  this.age = age;
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
    var url = $("#image").val();

    var cat = new Pet (petType, petName, petAge, petColor);
    var dog = new Pet (petType, petName, petAge, petColor);
    var pig = new Pet (petType, petName, petAge, petColor);

  if(petType === "Dog"){
    $("#t1").prepend('<ul><li>Name: ' + cat.nm + '</li><li>Age: ' + cat.age + '</li><li>Color: ' + cat.color + '</li><img src="' + url + '"></li>');
  } else if (petType==="Cat"){
    $("#t2").prepend('<ul><li>Name: ' + dog.nm + '</li><li>Age: ' + dog.age + '</li><li>Color: ' + dog.color + '</li><img src="' + url + '"></li>');
  } else if (petType==="Pig"){
    $("#t3").prepend('<ul><li>Name: ' + pig.nm + '</li><li>Age: ' + pig.age + '</li><li>Color: ' + pig.color + '</li><img src="' + url + '"></li>');
  };

  $("#adopt1").click(function(event){
    event.preventDefault();
      $("#t1").empty();
      $("#t4").append('<ul><li>Name: ' + dog.nm + '</li><li>Age: ' + dog.age + '</li><li>Color: ' + dog.color + '</li><img src="' + url + '"></li>');
  });
  $("#adopt2").click(function(event){
    event.preventDefault();
    $("#t2").empty();
    $("#t5").append('<ul><li>Name: ' + cat.nm + '</li><li>Age: ' + cat.age + '</li><li>Color: ' + cat.color + '</li><img src="' + url + '"></li>');
  });
  $("#adopt3").click(function(event){
    event.preventDefault();
    $("#t3").empty();
    $("#t6").append('<ul><li>Name: ' + pig.nm + '</li><li>Age: ' + pig.age + '</li><li>Color: ' + pig.color + '</li><img src="' + url + '"></li>');
  });



  });
});
