
const button = document.querySelectorAll('.num');
const inputField = document.getElementById('enterNum');
console.log(inputField);
 button.forEach(elm => {
  elm.addEventListener('click',function(ev){
        ev.stopImmediatePropagation();
        ev.stopPropagation();
        var elm_Num  = +elm.innerText;
        inputField.enabled;
        inputField.value = `${elm_Num}`;  
     });
});



document.querySelectorAll('.symbol').forEach(Symbol => {
  Symbol.addEventListener('click',function(){
       var SymbolStr = Symbol.innerHTML;
        console.log(SymbolStr);
        inputField.enabled;
        inputField.value = `${SymbolStr}`
     });
});

      
