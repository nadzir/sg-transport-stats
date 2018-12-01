import { Alignment, Button, Navbar } from "@blueprintjs/core";
import * as React from "react";

export interface ITopBarProps {
  value?: number;
}

export class TopBar extends React.Component<ITopBarProps, {}> {
  public render() {
    return (
      <Navbar className="bp3-dark">
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>Singapore Transport Stats</Navbar.Heading>
          <Navbar.Divider />
          <Button className="bp3-minimal" icon="home" text="Home" />
          <Button
            className="bp3-minimal"
            icon="search-around"
            text="Popular Bus Routes"
          />
        </Navbar.Group>
      </Navbar>
    );
  }
}
