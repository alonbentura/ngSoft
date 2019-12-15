import React from "react";
import * as label from "../utils/labels";
import { sharedStyle } from "../utils/shared-style";
import { withFormik } from "formik";
import { StyledButton } from "../utils/styled-button";
import { ItemsList } from "./material-items-list";
import CustomizedCheckbox from "../utils/checkbox";
import { Footer } from "../components/footer";

export class Approval extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  applicantDetailsFirstColmun() {
    const { applicantDetails } = this.props.data;
    return (
      <div style={styles.insideFormContainer}>
        <div style={{ flex: 2 }}>
          <div style={styles.row}>
            <div style={styles.text}>{label.supplierName}:</div>
            {applicantDetails.supplierName}
          </div>
          <div style={styles.row}>
            <div style={styles.text}> {label.materialSource}:</div>
            {applicantDetails.supplierName}
          </div>
        </div>
        <div style={{ flex: 2 }}>
          <div style={styles.row}>
            <div style={styles.text}> {label.companyID}:</div>
            {applicantDetails.companyID}
          </div>
          <div style={styles.row}>
            <div style={styles.text}> {label.country}:</div>
            {applicantDetails.country}
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
    const { applicantDetails } = this.props.data;
    return (
      <div style={{ ...styles.insideFormContainer, border: "none" }}>
        <div style={{ flex: 2 }}>
          <div style={styles.row}>
            <div style={styles.text}>{label.companyContactName}:</div>
            {applicantDetails.fullName}
          </div>
          <div style={styles.row}>
            <div style={styles.text}> {label.EmailAddress}:</div>
            {applicantDetails.EmailAddress}
          </div>
          <div style={styles.row}>
            <div style={styles.text}> {label.antoherPhoneNumber}:</div>
            {applicantDetails.antoherPhoneNumber}
          </div>
        </div>
        <div style={{ flex: 2 }}>
          <div style={styles.row}>
            <div style={styles.text}> {label.idNumber}:</div>
            {applicantDetails.id}
          </div>
          <div style={styles.row}>
            <div style={styles.text}> {label.phoneNumber}:</div>
            {applicantDetails.phoneNumber}
          </div>
          <div style={styles.row}>
            <div style={styles.text}> {label.faxNumber}:</div>
            {applicantDetails.faxNumber}
          </div>
        </div>
      </div>
    );
  }

  deliveryDetailsColmun() {
    const { deliveryDetails } = this.props.data;
    return (
      <div style={styles.insideFormContainer}>
        <div style={{ flex: 2 }}>
          <div style={styles.row}>
            <div style={styles.text}>{label.ReciverName}:</div>
            {deliveryDetails.reciverName}
          </div>
          <div style={styles.row}>
            <div style={styles.text}> {label.passages}:</div>
          </div>
          <div style={styles.row}>
            <div style={styles.text}> {label.driverName}:</div>
            {deliveryDetails.driverName}
          </div>
          <div style={styles.row}>
            <div style={styles.text}> {label.destination}:</div>
            {deliveryDetails.ReciverAddress}
          </div>
        </div>
        <div style={{ flex: 2 }}>
          <div style={styles.row}>
            <div style={styles.text}> {label.reciverPhoneNumber}:</div>
            {deliveryDetails.reciverPhoneNumber}
          </div>
          <div style={styles.row}>
            <div style={styles.text}> {label.MoneyValue}:</div>
            {deliveryDetails.moneyValue}
          </div>
          <div style={styles.row}>
            <div style={styles.text}> {label.DriverId}:</div>
            {deliveryDetails.driverId}
          </div>
        </div>
      </div>
    );
  }

  edit = page => {
    this.props.onClickEdit(page);
  };

  applicantDetails() {
    return (
      <div style={sharedStyle.formContainer}>
        <div style={sharedStyle.formHeadlineText}>{label.applicantDetails}</div>
        {this.applicantDetailsFirstColmun()}
        {this.applicantDetailsSecondColmun()}
        <div style={styles.btnContainer}>
          <StyledButton
            label="עריכה"
            style={styles.editBtn}
            onClick={this.edit.bind(this, 1)}
          />
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
    const { deliveryDetails } = this.props.data;

    return (
      <div style={{ ...styles.insideFormContainer, border: "none" }}>
        <div>
          <div style={styles.text}>{label.moreDocs}:</div>
          {deliveryDetails.file.name}
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
          <StyledButton
            label="עריכה"
            style={styles.editBtn}
            onClick={this.edit.bind(this, 0)}
          />
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
        <Footer
          onClickNext={this.props.onClickNext}
          onClickBack={this.props.onClickBack}
        />
      </div>
    );
  }
}

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
  },
  row: {
    display: "flex",
    alignItems: "center"
  }
};
