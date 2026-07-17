let url = "https://dog.ceo/api/breeds/image/random";

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let res = await getfacts();

  if (!res) return;

  let image = document.querySelector("#result");
  image.src = res.data.message;
});

async function getfacts() {
  try {
    let data = await axios.get(url);
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
