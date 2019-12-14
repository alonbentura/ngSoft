import React from "react";
import { CustomizedInput } from "../utils/styled-input";
import * as label from "../utils/labels";
import { DropDown } from "../utils/drop-down";
import data from "../utils/db.json";
import { sharedStyle } from "../utils/shared-style";

const inputdToRender = [
  { label: label.fullName, type: "string", name: "fullName" },
  {
    label: label.EmailAddress,
    type: "string",
    name: "EmailAddress",
    icon: true
  },
  {
    label: label.antoherPhoneNumber,
    type: "number",
    name: "antoherPhoneNumber"
  },
  { label: label.id, type: "number", name: "id" },
  { label: label.phoneNumber, type: "number", name: "phoneNumber" },
  { label: label.faxNumber, type: "string", name: "faxNumber" }
];

export class ApplicantDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  headline() {
    return (
      <div>
        <div style={sharedStyle.headlineText}>{label.applicantDetails}</div>
      </div>
    );
  }

  supplierDetails = () => {
    return (
      <div style={styles.inputsContainer}>
        <div style={styles.inputs}>
          <CustomizedInput
            label={label.supplierName}
            labelStyle={styles.text}
            type={"string"}
            icon={true}
          />
          <CustomizedInput
            label={label.companyID}
            labelStyle={styles.text}
            icon={true}
          />
        </div>
        <div style={styles.inputs}>
          <DropDown label={label.materialSource} data={data.origins} />
          <CustomizedInput
            label={label.country}
            labelStyle={styles.text}
            type={"string"}
          />
        </div>
      </div>
    );
  };

  supplierForm() {
    return (
      <div style={sharedStyle.formContainer}>
        <div style={sharedStyle.formHeadlineText}>{label.supplierInfo}</div>
        {this.supplierDetails()}
      </div>
    );
  }

  companyContactName() {
    const firstColumn = inputdToRender.slice(0, 3);
    const secondClumn = inputdToRender.slice(3, 6);
    return (
      <div style={sharedStyle.formContainer}>
        <div style={sharedStyle.formHeadlineText}>
          {label.companyContactName}
        </div>
        <div style={styles.inputsContainer}>
          <div style={styles.inputs}>
            {firstColumn.map(input => {
              return (
                <CustomizedInput
                  label={input.label}
                  labelStyle={styles.text}
                  type={input.type}
                  name={input.name}
                  icon={input.icon}
                />
              );
            })}
          </div>
          <div style={styles.inputs}>
            {secondClumn.map(input => {
              return (
                <CustomizedInput
                  label={input.label}
                  labelStyle={styles.text}
                  type={input.type}
                  name={input.name}
                  icon={input.icon}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div style={styles.container}>
        {this.headline()}
        {this.supplierForm()}
        {this.companyContactName()}
      </div>
    );
  }
}

const styles = {
  container: { padding: 20 },
  inputsContainer: {
    display: "flex"
  },
  text: { fontSize: 18, fontWeghit: 600 },
  inputs: {
    display: "flex",
    flexDirection: "column",
    flex: "2 1 0%"
  }
};
