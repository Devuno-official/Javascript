
//3) Create a program that counts vowels in a given string.
 let str = "javascript";
 var count = 0;
for (let val of str) {
    if( val === 'a' ||
        val === 'e' ||
        val === 'i' ||
        val === 'o' ||
        val === 'u' ){
          count++;
            
        }     
}
console.log(count);
