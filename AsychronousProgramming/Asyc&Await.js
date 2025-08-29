let api = function(data){
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              console.log(data);
                resolve("success");
          }, 3000);
        
      })
}


// promise Chaining

// api("123").then((response)=>{
//        console.log(response);

// }).then((response)=>{
//  api("2333").then((response)=>{
//      console.log('2=>',response);
               
//       })
// })


     async function f1(){
          const x = await api("123");
          console.log(x);
          let x2 = await api("234")
          console.log(x2);
          
     }

     f1();