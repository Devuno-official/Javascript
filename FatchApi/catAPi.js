const catApi = 'https://api.thecatapi.com/v1/images/search';

// *done using promise chaining
try {
  fetch(catApi).then((Response)=>{
    console.log('fetching ...');
    if(!Response.ok){
             throw new Error("Api error code is : ", Response.status);
         }else{
           console.log(Response.json());
           fetch(catApi).then((Response)=>{
            console.log('fetching.1...');
                console.log(Response.json());
           })
         }

  })
} catch (error) {
   console.log(error.massage);
   
}finally{
     console.log('successfuly done');
     
}

// *done using asyc and awit 
 async function getData(){
     console.log('getting data...');
       let response = await fetch(catApi);
       console.log(response);
 };