  let btn = document.querySelector("#btn");
 let body = document.body;
   
 if(localStorage.getItem("darkmode") === 'true'){
         body.classList.add("mode");
 }

    btn.addEventListener("click",(ev)=>{
      ev.preventDefault()
       body.classList.toggle("mode");   
       let isDark = body.classList.contains("mode");
        localStorage.getItem("darkmode", isDark);
    });

  