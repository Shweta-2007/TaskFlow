import React from "react";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Body from "./components/Body";

const App = () => {
  return (
    <div>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
};

export default App;
