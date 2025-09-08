
 // input box where we append the user input value
const input = document.getElementById("enterNum");


// button that only contain 1,2,3,4 number 
document.querySelectorAll(".num").forEach((num)=>{
  num.addEventListener('click',(dot)=>{
         dot.stopPropagation();
       let clickVal = num.innerHTML;
      input.enabled;
      input.value = input.value + clickVal;      
  });
});

document.getElementById("dot").addEventListener("click",(dot)=>{
    dot.stopPropagation();
    let comma = document.getElementById("dot");
     input.value = input.value + comma.innerText;                 
});

// button that only contiain symbol like +, - 
document.querySelectorAll('.symbol').forEach((syb)=>{
     syb.addEventListener("click",(dot)=>{
          dot.stopPropagation();
          let clickVal = syb.innerText; 
         input.value = input.value + clickVal;
     });    
});

// Remove last char for input  expression string
document.getElementById('backSpace').addEventListener("click",(dot)=>{
    dot.stopPropagation();
    let val = input.value;
     input.value = val.substring(0,val.length - 1);     
});

//  equal button that tell us the answer val 
document.getElementById('equal').addEventListener("click",(dot)=>{
      dot.stopPropagation();
      let expression = eval(input.value);
       input.value = "";
       input.value = expression;   
});

// Clear button that remove input text
document.getElementById('clear').addEventListener("click",(dot)=>{
   dot.stopPropagation();
   input.enabled;
   input.value = "";     
});













// button.forEach((elm) => {
//      elm.addEventListener("click", function (ev) {
//           ev.stopPropagation();
//           let elm_Num = +elm.innerText;
//      });
// });

// document.querySelectorAll(".symbol").forEach((Symbol) => {
//      Symbol.addEventListener("click", function (ev) {
//           ev.stopPropagation();
//           let SymbolStr = Symbol.innerHTML;
//           console.log(SymbolStr);
//           inputField.value = `${SymbolStr}`;
//      });
// });
