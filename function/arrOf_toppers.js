/**
 * Qs.1 : We are given array of marks of students . filter out the marks of      students  that scored 90. 
 * 
 */

 const marks = [45,78,56,85,90,100,85,96,98,99];
     
        // using filter method 
      const toppers = marks.filter((val,index,itself) =>{
           return val >= 90 ;
     })

      console.log(`topper which scored 90 plus marks  ${telentedStudent}`);
