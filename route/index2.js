const $page1 = document.getElementById("page1");
const $page2 = document.getElementById("page2");
const $page3 = document.getElementById("page3");
const $prev = document.getElementById("goBack");
const $newxt = document.getElementById("goForward");

const changePage = (page) => {
  const $content = document.getElementById("content");
  $content.textContent = `현재 보고 있는 페이지는 ${page} 입니다`;
  history.pushState({ page: page }, `${page}`, `${page}`);
};

window.addEventListener("popstate", (event) => {
  if (event.state) {
    const $content = document.getElementById("content");
    $content.textContent = `현재 보고 있는 페이지는 ${event.state.page} 입니다`;
  }
});

$page1.addEventListener("click", () => {
  changePage("페이지 1");
});

$page2.addEventListener("click", () => {
  changePage("페이지 2");
});

$page3.addEventListener("click", () => {
  changePage("페이지 3");
});

const goback = () => {
  history.back();
};

const goForward = () => {
  history.forward();
};

$prev.addEventListener("click", goback);
$newxt.addEventListener("click", goForward);
