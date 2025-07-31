 
 let model = document.getElementById("model_box");

     function openme(){
         model.style.display = "flex";
     }

     function closeme(){
        model.style.display = "none";
     }

     window.addEventListener("click" ,(ev)=>{     
           if(ev.target === model){
                 closeme();
           }
     });