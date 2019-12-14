import React from "react";
import * as label from "../utils/labels";
import { sharedStyle } from "../utils/shared-style";
import { withFormik } from "formik";

const applicantDetails = [];

export class Approval extends React.Component {
  constructor(props) {
    super(props);
  }

  applicantDetails() {
    return (
      <div style={sharedStyle.formContainer}>
        <div style={sharedStyle.formHeadlineText}>{label.applicantDetails}</div>
        <div
          style={{
            display: "flex",
            borderBottom: "solid grey 2px",
            paddingBottom: 10
          }}
        >
          <div style={{ flex: 2 }}>
            <div>
              <div style={{ color: "#55a1ff", fontWeight: "600", margin: 10 }}>
                {label.supplierName}:
              </div>
            </div>
            <div>
              <div style={{ color: "#55a1ff", fontWeight: "600", margin: 10 }}>
                {label.materialSource}:
              </div>
            </div>
          </div>
          <div style={{ flex: 2 }}>
            <div>
              <div style={{ color: "#55a1ff", fontWeight: "600", margin: 10 }}>
                {label.companyID}:
              </div>
            </div>
            <div>
              <div style={{ color: "#55a1ff", fontWeight: "600", margin: 10 }}>
                {label.country}:
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  materialsDetails() {
    return (
      <div style={sharedStyle.formContainer}>
        <div style={sharedStyle.formHeadlineText}>{label.materialDetails}</div>
      </div>
    );
  }

  deliveryDetails() {
    return (
      <div style={sharedStyle.formContainer}>
        <div style={sharedStyle.formHeadlineText}>{label.deliveryDetails}</div>
      </div>
    );
  }

  render() {
    console.log(this.props.values);
    return (
      <div style={styles.container}>
        {this.applicantDetails()}
        {this.materialsDetails()}
        {this.deliveryDetails()}
      </div>
    );
  }
}

export const ApprovalWithFormik = withFormik({})(Approval);

const styles = {
  container: { padding: 20 },
  formHeadlineText: { fontSize: 24, color: "#55a1ff" },
  formContainer: {
    boxShadow: "#e2e9f1 0px 0px 9px 2px",
    backgroundColor: "white",
    padding: 20,
    marginBottom: 20,
    marginTop: 15
  }
};
