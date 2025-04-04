/*
create a function using the function keyword that takes a string as an argument & returns the number of vowels in the string.

  * Also create with array function
*/

function countvowels(str){
    let count = 0;
      for(let char of str){
         if(   char === 'a'
            || char  === 'e'
            || char === 'i'
            || char === 'o' 
            || char === 'u'
   ){
              count++;
         }
      }
      return count;
}
   let str = ("muhammad yasir");
    console.log(`The number of vowels  ${countvowels(str)}`);
    
    // array method 
     const arrvowels = (str2) => {
        let count = 0;
          for(let i = 0; i < str.length;i++){
             if(  str[i] === 'a'
               || str[i] === 'e'
               || str[i] === 'i'
               || str[i] === 'o' 
               || str[i] == 'u'
   ){
                        count++;
             }
          }
          return count;
     }
 let str2 = "khursheed ahmad";
   console.log(`the number of vowels ${arrvowels(str2)}`); 
    