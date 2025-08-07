 
 let model = document.getElementById("model_box");


 
     function openme(){
         model.style.display = "flex";
         document.querySelector("#open").style.display = "none";
         document.querySelector("#par").style.display="none";
     }

     function closeme(){
        model.style.display = "none";
        document.querySelector("#open").style.display = "inline-block";
         document.querySelector("#par").style.display="inline-block";
     }

     window.addEventListener("click" ,(ev)=>{     
          if(ev.target === model){
             model.style.display = "none";
             document.querySelector("#open").style.display = "inline-block";
         document.querySelector("#par").style.display="inline-block";
          
            
          }
     });