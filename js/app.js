'use strict';
function openTab(tabName) {
  var i, x,y;
  x = document.getElementsByClassName('containerTab');
  y = document.getElementsByClassName('containerTab1');
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  for (i = 0; i < y.length; i++) {
    y[i].style.display = 'none';
  }

  document.getElementById(tabName).style.display = 'block';
}
