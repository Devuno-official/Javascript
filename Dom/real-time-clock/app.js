
function realClock(){
  let time = document.getElementById("myTime");
 let date = new Date();
 let hours = date.getHours();
 let minutes = date.getMinutes();
 let second = date.getSeconds();
  
  let updateTime = `${hours}:${minutes}:${second}`;
  time.innerText = updateTime;

}
 

 setInterval(realClock,1000);
