$(document).ready(function(){
  //a
  // $("p:contains('Primero') + ul").css({'fontFamily': 'helvetica', 'color': 'red'});

  //b
  // $("a:contains('Sistemas Informáticos')").css({'fontFamily': 'helvetica', 'color': 'red'});

  //c
  // $("li:contains('Sistemas Informáticos')").next().find("a:first").css({'fontFamily': 'helvetica', 'color': 'red'});

  // d
  // $("li:contains('Sistemas Informáticos') ~ li").css({'fontFamily': 'helvetica', 'color': 'red'});

  //e
  // $("[href]").css({'fontFamily': 'helvetica', 'color': 'red'});

  //f
  // $("li:not('[href]')").css({'fontFamily': 'helvetica', 'color': 'red'});

  //g
  // $("[href*='mod']").css({'fontFamily': 'helvetica', 'color': 'red'});

  //h
  // $("[href^='mod']").css({'fontFamily': 'helvetica', 'color': 'red'});

  //i
  // $("[href$='.html']").css({'fontFamily': 'helvetica', 'color': 'red'});

  //j
  $("p:contains('segundo')").siblings().css({'fontFamily': 'helvetica', 'color': 'red'});
  // $('ul>li>ul').find('li:eq(1)');        //Solucion de Gallego
  
});
