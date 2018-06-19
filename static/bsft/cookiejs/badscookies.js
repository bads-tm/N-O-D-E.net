/*
bads.tm themer.js
Cookie Law annoyance
*/

/* Read Cookie "Module" */
function getCookie(name) {
  var dc = document.cookie;
  var prefix = name + "=";
  var begin = dc.indexOf("; " + prefix);
  if (begin == -1) {
    begin = dc.indexOf(prefix);
    if (begin != 0) return null;
  } else {
    begin += 2;
    var end = document.cookie.indexOf(";", begin);
    if (end == -1) {
      end = dc.length;
    }
  }
  // because unescape has been deprecated, replaced with decodeURI
  //return unescape(dc.substring(begin + prefix.length, end));
  return decodeURI(dc.substring(begin + prefix.length, end));
}

/* if not agreed show it */
var badscookieshown = getCookie("badscookieshown");

if (badscookieshown == null) {
  // do cookie doesn't exist stuff;
  document.getElementById("cookiePopupContainer").style.display = 'block';
} else {
  // do cookie exists stuff
  document.getElementById("cookiePopupContainer").style.display = 'none';
}

/* agree and hide */
function makeagreedCookie() {
  document.cookie = "badscookieshown=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
  document.getElementById("cookiePopupContainer").style.display = 'none';
}
