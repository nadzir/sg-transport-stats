import { MainMapContainer } from "@src/containers/MainMap";
import * as React from "react";
import { hot } from "react-hot-loader";

// Let webpack instead of ts handle these imports
const styles = require("./styles.scss");

// Include global CSS and variables
require("../../styles/root.scss");

// Legacy CSS are supported
require("./legacy.css");

// Example inline functional React component
const Box: React.SFC<any> = props => (
  <div className={styles.box} {...props}>
    {props.children}
  </div>
);

class InnerApp extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <MainMapContainer />
      </div>
    );
  }
}

export const App =
  process.env.NODE_ENV === "development" ? hot(module)(InnerApp) : InnerApp;
