export default function Content({ $app, initialState }) {
  this.state = initialState;
  this.$target = document.createElement("div");
  this.$target.calssName = "content";

  $app.appendChild(this.$target);

  let temp = [];

  this.render = () => {
    temp = [];
    this.state.forEach((item) => {
      temp.push(`<img src=${item.url}></img>`);
    });
    this.$target.innerHTML = temp.join("");
  };

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render();
}
