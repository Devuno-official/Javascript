const collection = {
    myself : prompt("Enter about yourself"),
    age : prompt("enter a age "),
    education : prompt("enter about education"),
    father : prompt("Name of father "),
    business : prompt("what is business of father "),
   };
   let col = collection;      
        
   for (let key in col) {
       var output = `${key}\n${col[key]}`;
       console.log(output);
   }


              