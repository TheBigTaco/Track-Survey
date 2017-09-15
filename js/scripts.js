$(document).ready(function(){
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
  $("form#track").submit(function(event){
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
  });
});
