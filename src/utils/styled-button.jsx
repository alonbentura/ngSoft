import React from "react";
import { MdArrowForward } from "react-icons/md";


export class StyledButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={this.props.style ? this.props.style : style}
        onClick={this.props.onClick}
      >
        {this.props.icon ? (
          <MdArrowForward style={{ width: 32, height: 32 }} />
        ) : null}
        <div>{this.props.label}</div>
      </div>
    );
  }
}

const style = {
  height: 50,
  width: 140,
  backgroundColor: "#0072fa",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  fontSize: 25,
  cursor: "pointer"
};
