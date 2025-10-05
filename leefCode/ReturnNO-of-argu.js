// *Write a function argumentsLength that returns the count of a
// *rguments passed to it.



const argumentsLength = function(...argu) {
 return argu.length;

}

console.log(argumentsLength({}, null, "3"));

