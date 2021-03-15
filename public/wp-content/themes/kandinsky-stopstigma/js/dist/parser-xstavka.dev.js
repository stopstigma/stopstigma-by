"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

$.getJSON('../parserData/xstavka.json', callback);
callback();

function callback(respond) {
  for (var i = 0; i < respond.length; i++) {
    var data = respond[i];
    var rowClone = $('.mess_hide3').clone().removeClass('mess_hide3');
    var d = new Date(data.date);
    var dtf = new Intl.DateTimeFormat('ru', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    });

    var _dtf$formatToParts = dtf.formatToParts(d),
        _dtf$formatToParts2 = _slicedToArray(_dtf$formatToParts, 5),
        mo = _dtf$formatToParts2[0].value,
        da = _dtf$formatToParts2[2].value,
        ye = _dtf$formatToParts2[4].value;

    $('#messages3').append(rowClone);
    $('.league', rowClone).html(data.league);
    $('.data', rowClone).html("".concat(da, "-").concat(mo, "-").concat(ye));
    $('.name', rowClone).html(data.name);
    $('.p1', rowClone).html(data.p1);
    $('.x', rowClone).html(data.x);
    $('.p2', rowClone).html(data.p2);
  }
}