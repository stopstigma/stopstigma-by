"use strict";

$.getJSON('../parserData/fonbet.json', callback);
callback();

function callback(respond) {
  for (var i = 0; i < respond.length; i++) {
    var data = respond[i];
    var rowClone = $('.mess_hide').clone().removeClass('mess_hide');
    $('#messages').append(rowClone);
    $('.league', rowClone).html(data.league);
    $('.time', rowClone).html(data.time);
    $('.data', rowClone).html(data.date);
    $('.name', rowClone).html(data.name);
    $('.p1', rowClone).html(data.p1);
    $('.x', rowClone).html(data.x);
    $('.p2', rowClone).html(data.p2);
    var url = data.url;
    $('.url', rowClone).append('<a class="color" target="_blank" href="' + url + '">Читать</a>');
  }
}