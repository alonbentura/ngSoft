import React from "react";
import { forward, back } from "../utils/labels";
import { StyledButton } from "../utils/styled-button";

export class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.footerContainer}>
        <StyledButton
          label={back}
          icon={true}
          style={styles.backBtn}
          onClick={this.props.onClickBack}
        />
        <StyledButton
          label={forward}
          onClick={this.props.onClickNext}
        ></StyledButton>
      </div>
    );
  }
}
const styles = {
  backBtn: {
    height: 50,
    width: 155,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: 25,
    cursor: "pointer",
    color: "#7d8895",
    backgroundColor: "white",
    boxShadow: "rgb(226, 233, 241) 0px 0px 9px 2px"
  },
  footerContainer: {
    padding: "0 20px 20px 20px",
    display: "flex",
    justifyContent: "space-between"
  }
};
