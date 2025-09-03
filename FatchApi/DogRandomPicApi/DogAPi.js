let url = "https://dog.ceo/api/breeds/image/random";

const dogPic = async function (url) {
  try {
    let Response = await fetch(url, {
      method: "GET",
    });

    if (!Response.ok) {
      throw new Error("Response is not ok : ", Response.status);
    } else {
      let data = await Response.json();
      let image = await data.message;
      let button = document.querySelector("button");
      button.addEventListener("click", function () {
        let main = document.querySelector(".main");
        main.style.backgroundImage = 'url("' + image + '")';
        main.style.backgroundSize = "cover";
        main.style.backgroundPosition = "center";
        main.style.backgroundRepeat = "norepeat";
      });
    }
  } catch (error) {
    console.log(`Error : ${error}`);
  }
};

dogPic(url);
