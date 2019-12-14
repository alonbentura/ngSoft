import React from "react";
import * as label from "../utils/labels";
import { sharedStyle } from "../utils/shared-style";
import { withFormik } from "formik";
import { StyledButton } from "../utils/styled-button";
import { ItemsList } from "./material-items-list";
import CustomizedCheckbox from "../utils/checkbox";

export class Approval extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  applicantDetailsFirstColmun() {
    return (
      <div style={styles.insideFormContainer}>
        <div style={{ flex: 2 }}>
          <div>
            <div style={styles.text}>{label.supplierName}:</div>
          </div>
          <div>
            <div style={styles.text}> {label.materialSource}:</div>
          </div>
        </div>
        <div style={{ flex: 2 }}>
          <div>
            <div style={styles.text}> {label.companyID}:</div>
          </div>
          <div>
            <div style={styles.text}> {label.country}:</div>
          </div>
        </div>
      </div>
    );
  }

  itemsColmun() {
    return (
      <div style={{ ...styles.insideFormContainer, border: "none" }}>
        <div style={{ flex: 2 }}>
          <div>
            <div style={styles.text}>{label.item}:</div>
          </div>
          <div>
            <div style={styles.text}> {label.ItemDesignation}:</div>
          </div>
        </div>
        <div style={{ flex: 2 }}>
          <div>
            <div style={styles.text}> {label.category}:</div>
          </div>
          <div>
            <div style={styles.text}> {label.quantityRequested}:</div>
          </div>
        </div>
      </div>
    );
  }

  applicantDetailsSecondColmun() {
    return (
      <div style={{ ...styles.insideFormContainer, border: "none" }}>
        <div style={{ flex: 2 }}>
          <div>
            <div style={styles.text}>{label.companyContactName}:</div>
          </div>
          <div>
            <div style={styles.text}> {label.EmailAddress}:</div>
          </div>
          <div>
            <div style={styles.text}> {label.antoherPhoneNumber}:</div>
          </div>
        </div>
        <div style={{ flex: 2 }}>
          <div>
            <div style={styles.text}> {label.idNumber}:</div>
          </div>
          <div>
            <div style={styles.text}> {label.phoneNumber}:</div>
          </div>
          <div>
            <div style={styles.text}> {label.faxNumber}:</div>
          </div>
        </div>
      </div>
    );
  }

  deliveryDetailsColmun() {
    return (
      <div style={styles.insideFormContainer}>
        <div style={{ flex: 2 }}>
          <div>
            <div style={styles.text}>{label.ReciverName}:</div>
          </div>
          <div>
            <div style={styles.text}> {label.passages}:</div>
          </div>
          <div>
            <div style={styles.text}> {label.driverName}:</div>
          </div>
          <div>
            <div style={styles.text}> {label.destination}:</div>
          </div>
        </div>
        <div style={{ flex: 2 }}>
          <div>
            <div style={styles.text}> {label.reciverPhoneNumber}:</div>
          </div>
          <div>
            <div style={styles.text}> {label.MoneyValue}:</div>
          </div>
          <div>
            <div style={styles.text}> {label.DriverId}:</div>
          </div>
        </div>
      </div>
    );
  }

  applicantDetails() {
    return (
      <div style={sharedStyle.formContainer}>
        <div style={sharedStyle.formHeadlineText}>{label.applicantDetails}</div>
        {this.applicantDetailsFirstColmun()}
        {this.applicantDetailsSecondColmun()}
        <div style={styles.btnContainer}>
          <StyledButton label="עריכה" style={styles.editBtn} />
        </div>
      </div>
    );
  }

  materialsDetails() {
    return (
      <div style={sharedStyle.formContainer}>
        <div style={sharedStyle.formHeadlineText}>{label.materialDetails}</div>
        {this.itemsColmun()}
        <ItemsList items={[]} />
        <div style={styles.btnContainer}>
          <StyledButton label="עריכה" style={styles.editBtn} />
        </div>
      </div>
    );
  }

  moreFiles = () => {
    return (
      <div style={{ ...styles.insideFormContainer, border: "none" }}>
        <div>
          <div style={styles.text}>{label.moreDocs}:</div>
        </div>
      </div>
    );
  };
  deliveryDetails() {
    return (
      <div style={sharedStyle.formContainer}>
        <div style={sharedStyle.formHeadlineText}>{label.deliveryDetails}</div>
        {this.deliveryDetailsColmun()}
        {this.moreFiles()}
        <div style={styles.btnContainer}>
          <StyledButton label="עריכה" style={styles.editBtn} />
        </div>
      </div>
    );
  }

  statementApprove() {
    return (
      <div style={sharedStyle.formContainer}>
        <div style={sharedStyle.formHeadlineText}>{label.statmentApprove}</div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <CustomizedCheckbox />
          <div>{label.statmentApproveDetails("alon", "056165")}</div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div style={styles.container}>
        {this.applicantDetails()}
        {this.materialsDetails()}
        {this.deliveryDetails()}
        {this.statementApprove()}
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
  },
  insideFormContainer: {
    display: "flex",
    borderBottom: "solid grey 2px",
    paddingBottom: 10
  },
  text: { color: "#55a1ff", fontWeight: "600", margin: 10 },
  editBtn: {
    height: 50,
    width: 140,
    backgroundColor: "#white",
    color: "#0072fa",
    display: "flex",
    border: "solid 2px #0072fa",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: 25,
    cursor: "pointer"
  },
  btnContainer: {
    display: "flex",
    justifyContent: "flex-end"
  }
};
