$(document).ready(function(){
  //keycode 13 = enter
  $("#name").keyup(function(event){
    if(event.keyCode === 13){
      $("button#bName").click();
    }
  });
  $(".hope").keyup(function(event){
    if(event.keyCode === 13){
      $("button#bOne").click();
    }
  });
  $(".this").keyup(function(event){
    if(event.keyCode === 13){
      $("button#bTwo").click();
    }
  });
  $(".works").keyup(function(event){
    if(event.keyCode === 13){
      $("button#bThree").click();
    }
  });
  $(".pretty").keyup(function(event){
    if(event.keyCode === 13){
      $("button#bFour").click();
    }
  });
  $(".please").keyup(function(event){
    if(event.keyCode === 13){
      $("button#bFive").click();
    }
  });
  //Switches questions by slideToggle animation.
  $("button#bName").click(function(){
    $("#qOne").slideToggle();
    $("#qName").slideToggle();
  });
  $("button#bOne").click(function(){
    $("#qOne").slideToggle();
    $("#qTwo").slideToggle();
  });
  $("button#bTwo").click(function(){
    $("#qTwo").slideToggle();
    $("#qThree").slideToggle();
  });
  $("button#bThree").click(function(){
    $("#qThree").slideToggle();
    $("#qFour").slideToggle();
  });
  $("button#bFour").click(function(){
    $("#qFour").slideToggle();
    $("#qFive").slideToggle();
  });
  //Submits all values and toggles to results.
  $("form#track").submit(function(event){
    //Stops enter key from submitting, but also refreshes the entire form...
    //$("form#track").keyup(function(event){
      //if(event.keyCode === 13){
        //event.preventDefault();
        //return false;
      //} else {
        $("#qFive").slideToggle();
        $("#title").slideToggle();
        $("#final").slideToggle();
        event.preventDefault();
        var work = parseInt($("input:radio[name=work]:checked").val());
        var think = parseInt($("input:radio[name=think]:checked").val());
        var place = parseInt($("input:radio[name=place]:checked").val());
        var reason = parseInt($("input:radio[name=reason]:checked").val());
        var exp = parseInt($("input:radio[name=exp]:checked").val());
        var name = $("input#name").val();
    //Check if they selected any same value 3 times or more.
        var checkOne = work + think + place;
        var checkTwo = work + think + reason;
        var checkThree = work + think + exp;
        var checkFour = think + place + reason;
        var checkFive = think + place + exp;
        var checkSix = place + reason + exp;

        var result = work + think + place + reason + exp;
    //Check if they chose value 1 or 4, 3 times.
        if (checkOne === 3 || checkTwo === 3 || checkThree === 3 || checkFour === 3 || checkFive === 3 || checkSix === 3) {
          $(".cSharp").show();
          $(".name").text(name)
        } else if (checkOne === 12 || checkTwo === 12 || checkThree === 12 || checkFour === 12 || checkFive === 12 || checkSix === 12) {
          $(".rwby").show();
          $(".name").text(name)
    //Check all options where they could select value 2 or 3, 3 or more times.
    //Logic not sound, they overlap.
        } else if (result >= 8 && result <=14) {
          $(".java").show();
          $(".name").text(name)
        } else {
          $(".ceeSS").show();
          $(".name").text(name)
        }
      //}
    //});

  });
});
