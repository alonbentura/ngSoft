import * as React from "react";
import { applicantDetails, approval, materialsDetails } from "../utils/labels";

export class StepsIndicator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  applicantDetails() {
    const { currentPage } = this.props;
    if (currentPage === "applicantDetails") {
      return (
        <div style={styles.currentPage}>
          <img
            src={process.env.PUBLIC_URL + "img/manager-white.svg"}
            style={{ width: 26, height: 26 }}
            alt=""
          />
        </div>
      );
    } else {
      if (currentPage === "materialsDetails" || currentPage === "approval") {
        return (
          <div>
            <div style={styles.done}>
              <img
                src={process.env.PUBLIC_URL + "img/manager-blue.svg"}
                style={{ width: 26, height: 26 }}
                alt=""
              />
            </div>
          </div>
        );
      }
    }
    return (
      <div style={styles.default}>
        <img
          src={process.env.PUBLIC_URL + "img/manager-white.svg"}
          style={{ width: 26, height: 26 }}
          alt=""
        />
      </div>
    );
  }

  materialsDetails() {
    const { currentPage } = this.props;
    if (currentPage === "materialsDetails") {
      return (
        <div style={styles.currentPage}>
          <img
            src={process.env.PUBLIC_URL + "img/box-white.svg"}
            style={{ width: 26, height: 26 }}
            alt=""
          />
        </div>
      );
    } else {
      if (currentPage === "approval") {
        return (
          <div>
            <div style={styles.done}>
              <img
                src={process.env.PUBLIC_URL + "img/box-blue.svg"}
                style={{ width: 26, height: 26 }}
                alt=""
              />
            </div>
          </div>
        );
      }
    }
    return (
      <div style={styles.default}>
        <img
          src={process.env.PUBLIC_URL + "img/box-white.svg"}
          style={{ width: 26, height: 26 }}
          alt=""
        />
      </div>
    );
  }

  approval() {
    const { currentPage } = this.props;
    if (currentPage === "approval") {
      return (
        <div style={styles.currentPage}>
          <img
            src={process.env.PUBLIC_URL + "img/direct-white.svg"}
            style={{ width: 26, height: 26 }}
            alt=""
          />
        </div>
      );
    }
    return (
      <div>
        <div style={styles.default}>
          <img
            src={process.env.PUBLIC_URL + "img/direct-white.svg"}
            style={{ width: 26, height: 26 }}
            alt=""
          />
        </div>
      </div>
    );
  }

  render() {
    const { currentPage } = this.props;
    return (
      <div style={styles.progressBarContainer}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {this.applicantDetails()}
          <div style={styles.middleDiv} />
          {this.materialsDetails()}
          <div style={styles.middleDiv} />
          {this.approval()}
        </div>
        <div style={styles.textContainer}>
          <p
            style={
              currentPage === "applicantDetails"
                ? { ...styles.text, fontWeight: "bold" }
                : styles.text
            }
          >
            {applicantDetails}
          </p>
          <p
            style={
              currentPage === "materialsDetails"
                ? { ...styles.text, fontWeight: "bold" }
                : styles.text
            }
          >
            {materialsDetails}
          </p>
          <p
            style={
              currentPage === "approval"
                ? { ...styles.text, fontWeight: "bold" }
                : styles.text
            }
          >
            {approval}
          </p>
        </div>
      </div>
    );
  }
}
const styles = {
  default: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: "grey",
    border: "2px grey solid",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  done: {
    width: 40,
    height: 40,
    borderRadius: 50,
    border: "2px #0370c4 solid",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  currentPage: {
    width: 40,
    height: 40,
    borderRadius: 50,
    border: "2px #0370c4 solid",
    backgroundColor: "#0370c4",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  progressBarContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: 20
  },
  middleDiv: {
    width: "160px",
    height: "2px",
    backgroundColor: "#e1e4e8"
  },
  textContainer: {
    width: 480,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  text: {
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: 500,
    color: "#0a1f44",
    textAlign: "center"
  }
};
