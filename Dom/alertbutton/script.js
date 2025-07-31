function clickme(){
     alert("You clicked the button!");
}

try{
 document.getElementById("btn").style.textAlign="center";
 let body = document.querySelector("body");
  body.style.textAlign="center";
 body.style.background = "linear-gradient(90deg , red, yellow, pink,black,green)";
        
}catch(err){
    console.log("bug : ",err);
    
};
 

