const API_URL = "https://animal-api-two.vercel.app/";

const component = document.querySelector(".content");
let temp = [];

const request = async () => {
  const res = await fetch(API_URL);
  const data = await res.json();
  console.log(data);
  data.photos.forEach((elm) => {
    temp.push(`<img src=${elm.url}>`);
  });
  component.innerHTML = temp.join("");
};

request();
