export default function TabBar({ $app, initialState, onClick }) {
  this.state = initialState;
  this.onClick = onClick;
  this.$target = document.createElement("div");
  this.$target.className = "tab-bar";
  $app.appendChild(this.$target);

  this.templage = () => {
    let temp = `<div id="all">전체</div>
       <div id="penguin">펭귄</div>
       <div id="koala">코알라</div>
       <div id="panda">판다</div>`;

    return temp;
  };

  this.render = () => {
    this.$target.innerHTML = this.templage();
    const value = this.$target.querySelectorAll("div");
    const getId = document.getElementById(this.state);
    getId && (getId.className = "clicked");
    value.forEach((item) => {
      item.addEventListener("click", () => {
        onClick(item?.id);
      });
    });
  };

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };
  this.render();
}
