
 let num = document.getElementById("number");
     var count = 0 ;

function plus(){
      count++;
  store  = num.innerText = count.toString(); 
       
}
  function sub(){
          console.log("sub");
          if(count > 0){
              count--;
          }
          num.innerText = count.toString();
  }
 

  function reset(){
     count = 0;
     num.innerText = count.toString();
  }
