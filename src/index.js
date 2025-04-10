const API_URL = "https://animal-api-two.vercel.app/";

const $tabButtons = document.querySelectorAll(".tab-button");

const $content = document.querySelector("div.content");
let template = "";

//API
const getData = async (name) => {
  let res = await fetch(name ? `${API_URL}${name}` : API_URL);

  template = "";
  try {
    if (res) {
      let data = await res.json();
      data.photos.forEach((elm) => {
        template += `<img src="${elm.url}"></img>`;
      });
      $content.innerHTML = template;
    }
  } catch (err) {
    console.log(err);
  }
};

$tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    getData(button.dataset.category);
  });
});
