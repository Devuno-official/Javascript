
// *done using promise chaining
try {
  fetch('https://dogapi.dog/api-docs/v2/swagger.json')
    .then((Response) => {
      if (!Response.ok){
        throw new Error(`Api error code is : ${Response.status}`);
    }else{
       console.log('fetching...');
           console.log(Response.headers);
    }
  });
} catch (error) {
  console.log(error.massage);
}

// *done using asyc and awit
// async function getData() {
//   console.log("getting data...");
//   let response = await fetch(catApi);
//   console.log(response);
// }
