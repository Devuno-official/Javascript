/*The most "popular" way of reversing a string in JavaScript is the following code fragment, which is quite common:*/


function reverseString(str) {
return str.split('').reverse().join('');
}
var str = "muhammad"
console.log("%s",reverseString(str));


//custom reverse() function
function reverse(string) {
var strRev = "";
for (var i = string.length - 1; i >= 0; i--) {
strRev += string[i];
}
return strRev;
}
  var strin = "yasir";
  console.log("%s",reverse(strin));
