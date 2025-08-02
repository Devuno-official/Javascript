  let btn = document.querySelector("#btn");
 let body = document.body;
   
 if(JSON.parse(localStorage.getItem("darkmode")) === true){
         body.classList.add("mode");
 }

    btn.addEventListener("click",(ev)=>{
      ev.preventDefault() 
        body.classList.toggle("mode");
       let isDark = body.classList.contains("mode");
        localStorage.setItem("darkmode",JSON.stringify(isDark));
    });

  