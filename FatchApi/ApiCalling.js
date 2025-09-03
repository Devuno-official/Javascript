// *done using promise chaining
try {
  fetch("https://dogapi.dog/api-docs/v2/swagger.json", {
    method: "GET",
  }).then((Response) => {
    if (!Response.ok) {
      throw new Error(`Api error code is : ${Response.status}`);
    } else {
      console.log("fetching...");
      let btn = document.querySelector("button");
      var p = document.createElement("p");
      main.addEventListener("click", function (Event) {
        Event.stopPropagation();
        main.appendChild(p);
        console.log((p.innerHTML = `${Response.url}`));
        return;
      });
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
