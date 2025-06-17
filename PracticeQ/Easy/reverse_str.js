  //2) Write a function that reverses a given string.
function reverse(str) {
    var strRev = "";
for (var i = str.length - 1; i >= 0; i--) {
   console.log(strRev += str[i]);
   } 
          return strRev;
}
  var str = "yasir";
  console.log("%s",reverse(str));
