import React from "react";

export class NavBar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div style={styles.navBarContainer}>
        <div style={{ flexGrow: 3 }} />
        <div flex={1} style={styles.text}>
          אודות
        </div>
        <div flex={1} style={styles.text}>
          הפעילות שלנו
        </div>
        <div flex={1} style={styles.text}>
          שירות לציבור
        </div>
        <div flex={1} style={styles.text}>
          יהודה ושומרון
        </div>
        <div flex={1} style={styles.text}>
          רצועת עזה
        </div>
        <div style={{ flexGrow: 4 }} />
      </div>
    );
  }
}

const styles = {
  navBarContainer: {
    height: "50px",
    color: "blue",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    margin: 5,
    fontSize: 16,
    flexGrow: 0.5
  }
};
