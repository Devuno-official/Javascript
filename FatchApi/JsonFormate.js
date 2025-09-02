let JsonFormat = async function () {
  try {
    let Response = await fetch("https://api.thecatapi.com/v1/images");
    if (!Response.ok) {
      throw new Error(`${Response.status}`);
    } else {
      console.log(Response);
      let data = await Response.json();
      console.log(data);
    }
  } catch (error) {
    console.log(error);
  }
};
