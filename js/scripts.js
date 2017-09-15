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
    var result = work + think + place + reason + exp;

    if (result >= 5 && result <== 11) {
      //$("#cSharp").show();
    }
  });
});
