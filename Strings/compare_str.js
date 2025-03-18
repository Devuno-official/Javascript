// method to compare two string
var a = "dgk";
 var b = "kfjdf";
 console.log("compare = ",a.localeCompare(b));


// custom function  
 function strcmp(a,b){
    if (a === b) {
        return 0;
    }
    if(a > b){
        return 1;
    }    
    return -1;    
    
 }

let a = "456dgfdh";
let b = "ghfh";
console.log("")