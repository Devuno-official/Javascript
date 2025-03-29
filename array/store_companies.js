/*
  Description :
  Q.s create an array to store a companies -> "bloomberg","micorsoft","Uber","Google","IBM","netflix"; 
  a. Remove the first company from the array 
  b. remove uber and add ola in its place
  c. add Amazon at the end

*/
let companies = ["bloomberg","micorsoft","Uber","Google","IBM","netflix"];
   // remove first element
        companies.shift(); 
        console.log(`\nbloombery is remove : ${companies}`);
   
  // remove uber and add ola 
     companies.splice(1,1,"ola");    
          console.log(`\nreplace uber with ola  : ${companies}`);

// add Amazon at the end
   companies.splice(5,0,"Amazon");
  console.log(`\n add Amazon at the end   : ${companies}`);