import React from "react";
import { CustomizedInput } from "../utils/styled-input";
import * as label from "../utils/labels";
import { DropDown } from "../utils/drop-down";
import data from "../utils/db.json";
import { Footer } from "../components/footer";
import * as yup from "yup";
import { withFormik } from "formik";
import { sharedStyle } from "../utils/shared-style";

const inputdToRender = [
  {
    label: label.fullName,
    type: "string",
    name: "fullName",
    err: "יש להזין שם מלא"
  },
  {
    label: label.EmailAddress,
    type: "string",
    name: "EmailAddress",
    icon: true,
    err: "יש להזין מייל"
  },
  {
    label: label.phoneNumber,
    type: "number",
    name: "phoneNumber",
    err: "יש להזין מספר טלפון"
  },
  { label: label.id, type: "number", name: "id"  ,err: 'יש להזין ת.ז'},
  {
    label: label.antoherPhoneNumber,
    type: "number",
    name: "antoherPhoneNumber"
  },
  { label: label.faxNumber, type: "string", name: "faxNumber" }
];

class ApplicantDetails extends React.Component {
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
    const { errors, values } = this.props;
    return (
      <div style={styles.inputsContainer}>
        <div style={styles.inputs}>
          <CustomizedInput
            label={label.supplierName}
            labelStyle={styles.text}
            type={"string"}
            icon={true}
            value={values.supplierName}
            name="supplierName"
            onChange={this.props.handleChange}
          />
          {errors.supplierName ? (
            <div style={styles.err}>יש למלא שם הספק</div>
          ) : null}
          <CustomizedInput
            label={label.companyID}
            labelStyle={styles.text}
            icon={true}
            type="number"
            value={values.companyID}
            name="companyID"
            onChange={this.props.handleChange}
          />
          {errors.companyID ? (
            <div style={styles.err}>יש למלא מספר ח''פ</div>
          ) : null}
        </div>
        <div style={styles.inputs}>
          <DropDown
            label={label.materialSource}
            data={data.origins}
            name={"materialSource"}
            onChange={this.props.handleChange}
          />
          <CustomizedInput
            label={label.country}
            labelStyle={styles.text}
            type={"string"}
            name="country"
            value={values.country}
            onChange={this.props.handleChange}
          />
          {errors.country ? <div style={styles.err}>יש להזין מדינה</div> : null}
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
    const { values, errors } = this.props;
    return (
      <div style={sharedStyle.formContainer}>
        <div style={sharedStyle.formHeadlineText}>
          {label.companyContactName}
        </div>
        <div style={styles.inputsContainer}>
          <div style={styles.inputs}>
            {firstColumn.map(input => {
              return (
                <div>
                  <CustomizedInput
                    label={input.label}
                    labelStyle={styles.text}
                    type={input.type}
                    name={input.name}
                    icon={input.icon}
                    onChange={this.props.handleChange}
                    value={values[input.name]}
                  />

                  {errors[input.name] ? (
                    <div style={styles.err}>{input.err}</div>
                  ) : null}
                </div>
              );
            })}
          </div>
          <div style={styles.inputs}>
            {secondClumn.map(input => {
              return (
                <div>
                  <CustomizedInput
                    label={input.label}
                    labelStyle={styles.text}
                    type={input.type}
                    name={input.name}
                    icon={input.icon}
                    onChange={this.props.handleChange}
                    value={values[input.name]}
                  />
                  {errors[input.name] ? (
                    <div style={styles.err}>{input.err}</div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  clickNext = () => {
    const { values } = this.props;
    const data = {
      supplierName: values.supplierName,
      country: values.country,
      companyID: values.companyID,
      EmailAddress: values.EmailAddress,
      id: values.id,
      phoneNumber: values.phoneNumber,
      fullName: values.fullName,
      faxNumber: values.faxNumber,
      materialSource: values.materialSource,
      antoherPhoneNumber: values.antoherPhoneNumber
    };
    if (this.props.isValid) {
      this.props.chnagesState(data);
      this.props.onClickNext();
    }
  };

  render() {
    return (
      <div style={styles.container}>
        {this.headline()}
        {this.supplierForm()}
        {this.companyContactName()}
        <Footer
          onClickNext={this.clickNext}
          onClickBack={this.props.onClickBack}
        />
      </div>
    );
  }
}

const validationSchema = yup.object().shape({
  supplierName: yup.string().required(),
  country: yup.string().required(),
  companyID: yup.number().required(),
  EmailAddress: yup.string().required(),
  id: yup.number().required(),
  phoneNumber: yup.number().required(),
  fullName: yup.string().required()
});

export const ApplicantDetailsWithFormik = withFormik({
  validationSchema,
  mapPropsToValues(props) {
    const {
      supplierName,
      country,
      companyID,
      EmailAddress,
      id,
      phoneNumber,
      fullName,
      materialSource,
      faxNumber,
      antoherPhoneNumber
    } = props.applicantDetails;
    return {
      supplierName,
      country,
      companyID,
      EmailAddress,
      id,
      phoneNumber,
      materialSource,
      antoherPhoneNumber,
      faxNumber,
      fullName
    };
  }
})(ApplicantDetails);

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
  },
  err: {
    fontSize: 12,
    color: "red",
    fontWeight: "bold",
    marginRight: 8
  }
};
