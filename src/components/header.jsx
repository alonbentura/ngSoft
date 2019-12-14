import React from "react";

export class Header extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <div style={styles.headerContainer}></div>
  }
}

const styles = {
  headerContainer: {
    backgroundImage: "linear-gradient(to right , #0ed6ed , #0268c1)",
    height: "50px"
  }
};
