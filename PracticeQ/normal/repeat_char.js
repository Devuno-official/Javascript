// 3) Write a program that takes a string and returns the most repeated character.

const repeat_char = (str) =>{
     var maxcount = 0; 
 for(let i = 0 ; i < str.length ; i++){
       let count = 0;
       
        for(let j=0;j<str.length;j++){
           if(str[i] === str[j]){
               count++;
           }  
            
        } 
         console.log(`char ${str[i]} and repead ${count}`);
if(count > maxcount){
            maxcount = count;
               maxcount = str[i];
            
         }
           
     } 
     return maxcount ;
            
}

let str = `hellllo`;
console.log(repeat_char(str));

 
    