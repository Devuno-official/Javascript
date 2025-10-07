// *Write a function argumentsLength that returns the count of a
// *arguments passed to it.



const argumentsLength = function(...arr) {
        return arr.length;

}
 let Val = argumentsLength([], null, undefined, 0);

console.log("Number of actual parameter :",Val);

