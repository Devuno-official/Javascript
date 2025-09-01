const catApi = 'https://api.thecatapi.com/v1/images/search';

 async function getData(){
     console.log('getting data...');
       let response = await fetch(catApi);
       console.log(response);
 };