"use strict";

/*FUNCTION POW*/

function power() {

function pow(a, n) {
  var result = a;

  for (var i = 1; i < n; i++) {
    result *= a;
  }

  return result;
}

var a = prompt('Enter number', '');
var n = prompt('Enter power', '');

if (n<=0){
  alert( 'Power must be > 0');
}else{
  alert( pow(a, n) );
  console.log( 'pow(a, n) = ', ( pow(a, n) ));
}

}

/*FUNCTION NAMES*/

function names() {

var arrNames = [];

 for (var i = 0; i < 5; i++) {
 	arrNames.push ( prompt('Enter some names') );
}

var userName = prompt('Enter your name', '');
	
for (var i = 0; i < arrNames.length; i++) {
	if (userName == arrNames[i]){
		var login = arrNames[i];
  }
}

  if (login) { 
  alert(login + ',' + ' ' + 'you have successfully logged.');
} else {
   alert('Error! Your name is incorrect.');
}

}