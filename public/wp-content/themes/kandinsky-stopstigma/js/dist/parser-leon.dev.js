"use strict";

$.getJSON('../parserData/leon.json', callback);
callback();

function callback(respond) {
  for (var i = 0; i < respond.length; i++) {
    var data = respond[i];
    var rowClone = $('.mess_hide1').clone().removeClass('mess_hide1');
    $('#messages1').append(rowClone);
    $('.league', rowClone).html(data.league);
    $('.time', rowClone).html(data.time);
    $('.data', rowClone).html(data.date);
    $('.name', rowClone).html(data.name);
    $('.p1', rowClone).html(data.p1);
    $('.x', rowClone).html(data.x);
    $('.p2', rowClone).html(data.p2);
  }
}