/*
 Prompt the user to enter their ful name. Genarate a username for them based on the input.
 start username with@,followed by their full name and ending with the fullname length.
  #example :
         userName = "MuhammadYasir" , userName should be "@MuhammadYasir13" 
*/
function concat(fullName){
    return  "@" + fullName.concat(fullName.length);
      
}

  let fullName = prompt("enter full name");
        console.log(concat(fullName));
         