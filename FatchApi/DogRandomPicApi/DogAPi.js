
let url = "https://dog.ceo/api/breeds/image/random";
let button = document.querySelector("button");
let main = document.querySelector(".main");

button.addEventListener("click", async function(dot) {
  dot.stopPropagation();
  try {
    let Response = await fetch(url, {
      method: "GET",
    });
    if (!Response.ok) {
      throw new Error("Response is not ok : ", Response.status);
    } else {
      let data = await Response.json();
      let image = await data.message;
      main.style.backgroundImage = 'url("' + image + '")';
    }
  } catch (error) {
    console.log(`Error : ${error}`);
  }
});
