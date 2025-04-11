import TabBar from "./TabBar.js";
import Content from "./Content.js";
import { request } from "./api.js";

export default function App($app) {
  this.state = {
    curruntTab: "all",
    photos: [],
  };

  const tabBar = new TabBar({
    $app,
    initialState: "all",
    onClick: async (value) => {
      this.setState({
        ...this.state,
        curruntTab: value,
        photos: await request(value === "all" ? "" : value),
      });
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

  const init = async () => {
    const initialPhotos = await request();
    try {
      this.setState({
        ...this.state,
        photos: initialPhotos,
      });
    } catch (err) {
      console.log(err);
    }
  };
  init();
}
