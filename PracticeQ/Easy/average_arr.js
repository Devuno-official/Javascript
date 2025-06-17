
//3) Create an array of marks. Write a function that returns the average of marks.✔️
let arr_average= (marks) =>{
   var sum = 0;
  for(let i = 0 ; i < marks.length ; i++){
          sum += marks[i]/marks.length;
          
  }
        return sum;
}

 let marks = [1,2,3,4,5,6,78,88,9];
    console.log(arr_average(marks));
    