/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function toggleshowhidebrief(q) {
  var d = document.getElementById(q);
 if (d.innerHTML=='Show')
  d.innerHTML='Hide';
 else
  d.innerHTML='Show';
}
function toggleshowhide(q) {
  var d = document.getElementById(q);
 if (d.innerHTML=='Show details')
  d.innerHTML='Hide details';
 else
  d.innerHTML='Show details';
}
function toggle(q) {
  var d = document.getElementById(q);
 if (d.style.display=='none')
  d.style.display='block';
 else
  d.style.display='none';
}
var p="home";
function swap(q) {
  var d = document.getElementById(p);
  d.style.display='none';
  p = q;
  d = document.getElementById(p);
  d.style.display='block';
  window.scrollTo(0,0);
}
function init() {
  swap(p);
}
