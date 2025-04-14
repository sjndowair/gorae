import TabBar from "./TabBar.js";
import Content from "./Content.js";
import { request } from "./api.js";

export default function App($app) {
  this.state = {
    curruntTab: window.location.pathname.replace("/", "") || "all",
    photos: [],
  };

  const tabBar = new TabBar({
    $app,
    initialState: "all",
    onClick: async (value) => {
      history.pushState(null, `${value} 사진`, `${value}`);
      this.updateContent(value === "all" ? "" : value);
    },
  });
  const content = new Content({
    $app,
    initialState: [],
  });

  this.setState = (newState) => {
    this.state = newState;
    tabBar.setState(this.state.curruntTab);
    content.setState(this.state.photos);
  };

  this.updateContent = async (tabName) => {
    const currentTab = tabName === "all" ? "" : tabName;
    const initialPhotos = await request(currentTab);
    try {
      this.setState({
        ...this.state,
        curruntTab: tabName,
        photos: initialPhotos,
      });
    } catch (err) {
      console.log(err);
    }
  };

  window.addEventListener("popstate", async () => {
    this.updateContent(window.location.pathname.replace("/", "") || "all");
  });

  const init = async () => {
    this.updateContent(this.state.curruntTab);
  };
  init();
}
