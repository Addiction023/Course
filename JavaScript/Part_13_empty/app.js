let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let url = "http://universities.hipolabs.com/search?name=india";

btn.addEventListener("click", async () => {
  let res = await collage();
  ul.innerText = "";
  for (let uni of res.data) {
    if (uni["state-province"]?.toLowerCase() === inp.value.toLowerCase()) {
      let li = document.createElement("li");
      ul.appendChild(li);
      li.innerText = uni.name;
      console.log(uni.name);
    }
  }
});

async function collage() {
  try {
    let data = await axios.get(url);
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
