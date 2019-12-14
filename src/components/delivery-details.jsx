import React from "react";
import * as yup from "yup";
import { CustomizedInput } from "../utils/styled-input";
import { FaRegQuestionCircle } from "react-icons/fa";
import * as label from "../utils/labels";
import { DropDown } from "../utils/drop-down";
import { StyledButton } from "../utils/styled-button";
import { MdClose } from "react-icons/md";
import { withFormik, Form } from "formik";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { RadioBtn } from "../utils/radio-btn";
import data from "../utils/db.json";
import { sharedStyle } from "../utils/shared-style";

export class DeliveryDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: ""
    };
  }

  headline() {
    return (
      <div>
        <div style={sharedStyle.headlineText}>{label.deliveryDetails}</div>
        <div style={sharedStyle.attentionContainer}>
          <AiOutlineExclamationCircle style={styles.icon} />
          {label.attention}
        </div>
      </div>
    );
  }

  renderRadioBtn = () => {
    return (
      <div style={{ marginTop: 15, marginBottom: 10 }}>
        <div>איזור היעד</div>
        <div>
          <RadioBtn />
          <RadioBtn />
        </div>
      </div>
    );
  };

  onchangeInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  renderInputs = () => {
    const {
      values,
      handleChange,
      errors,
      touched,
      validateOnChange
    } = this.props;
    return (
      <Form>
        <div style={styles.inputsContainer}>
          <div style={{ display: "flex", flexDirection: "column", flex: 2 }}>
            <CustomizedInput
              label={label.ReciverName}
              labelStyle={styles.text}
              type={"string"}
              icon={true}
              value={values.reciverName}
              error={errors.reciverName}
              name="reciverName"
              onChange={this.props.handleChange}
            />
            {errors.reciverName && touched.reciverName ? (
              <div style={{ fontSize: 12, color: "red", fontWeight: "bold" }}>
                יש למלא שם
              </div>
            ) : null}
            <CustomizedInput
              value={values.ReciverAddress}
              onChange={this.props.handleChange}
              label={label.ReciverAddress}
              labelStyle={styles.text}
              icon={true}
              name="ReciverAddress"
            />
            {errors.ReciverAddress && touched.ReciverAddress ? (
              <div style={{ fontSize: 12, color: "red", fontWeight: "bold" }}>
                יש למלא כתובת
              </div>
            ) : null}

            <DropDown label={label.passages} data={data.passages} />
            <CustomizedInput
              value={values.driverName}
              label={label.driverName}
              labelStyle={styles.text}
              type={"string"}
              name="driverName"
              onChange={this.props.handleChange}
            />
            {errors.driverName && touched.driverName ? (
              <div style={{ fontSize: 12, color: "red", fontWeight: "bold" }}>
                יש למלא שם נהג
              </div>
            ) : null}
          </div>
          <div style={{ display: "flex", flexDirection: "column", flex: 2 }}>
            <CustomizedInput
              value={values.reciverPhoneNumber}
              label={label.reciverPhoneNumber}
              labelStyle={styles.text}
              onChange={this.props.handleChange}
              type={"number"}
              name="reciverPhoneNumber"
            />
            {errors.reciverPhoneNumber && touched.reciverPhoneNumber ? (
              <div style={{ fontSize: 12, color: "red", fontWeight: "bold" }}>
                יש למלא מספר טלפון
              </div>
            ) : null}
            <div>
              <CustomizedInput
                value={values.MoneyValue}
                onChange={this.props.handleChange}
                label={label.MoneyValue}
                labelStyle={styles.text}
                type={"number"}
                name="MoneyValue"
              />
              {errors.MoneyValue && touched.MoneyValue ? (
                <div style={{ fontSize: 12, color: "red", fontWeight: "bold" }}>
                  יש למלא סכום
                </div>
              ) : null}
              {/* <DropDown data={data.moneyType} /> */}
            </div>
            <CustomizedInput
              value={values.driverId}
              label={label.DriverId}
              labelStyle={styles.text}
              onChange={this.props.handleChange}
              type={"number"}
              name="driverId"
            />
            {errors.driverId && touched.driverId ? (
              <div style={{ fontSize: 12, color: "red", fontWeight: "bold" }}>
                יש למלא ת.ז נהג
              </div>
            ) : null}
          </div>
        </div>
      </Form>
    );
  };

  destinationForm() {
    return (
      <div style={sharedStyle.formContainer}>
        <div style={sharedStyle.formHeadlineText}>יעד למשלוח</div>
        {this.renderRadioBtn()}
        {this.renderInputs()}
      </div>
    );
  }

  onChange = e => {
    this.setState({ file: e.target.files[0] });
  };

  onClickDelete = () => this.setState({ file: "" });

  moreInfoForm() {
    return (
      <div style={sharedStyle.formContainer}>
        <div style={sharedStyle.formHeadlineText}>{label.moreInfo}</div>
        <div style={{ ...styles.text, display: "flex", marginBottom: 5 }}>
          {label.addDocument}
          <FaRegQuestionCircle
            style={{ width: 24, height: 24, color: "#4f6182", marginRight: 10 }}
          />
        </div>
        {this.state.file ? (
          <div style={styles.file}>
            <MdClose style={styles.deleteFile} onClick={this.onClickDelete} />
            {this.state.file.name}
          </div>
        ) : null}
        <input
          id="myInput"
          type="file"
          ref={ref => (this.upload = ref)}
          style={{ display: "none" }}
          onChange={this.onChange.bind(this)}
        />
        <StyledButton
          label={label.uploadFile}
          style={styles.uploadBtn}
          onClick={() => {
            this.upload.click();
          }}
        />
        <CustomizedInput
          label={label.notes}
          labelStyle={styles.text}
          multiline
          rows={4}
        />
      </div>
    );
  }

  render() {
    return (
      <div style={styles.container}>
        {this.headline()}
        {this.destinationForm()}
        {this.moreInfoForm()}
      </div>
    );
  }
}

const validationSchema = yup.object().shape({
  reciverName: yup.string().required(),
  ReciverAddress: yup.string().required(),
  driverName: yup.string().required(),
  reciverPhoneNumber: yup.number().required(),
  MoneyValue: yup.number().required()
});

export const DeliveryDetailsWithFormik = withFormik({
  validationSchema,
  mapPropsToValues(props) {
    return {
      reciverName: "",
      ReciverAddress: "",
      driverName: "",
      reciverPhoneNumber: "",
      MoneyValue: ""
    };
  }
})(DeliveryDetails);

const styles = {
  container: { padding: 20 },
  inputsContainer: {
    display: "flex",
    height: 340
  },
  uploadBtn: {
    height: 40,
    width: 160,
    backgroundColor: "#0072fa",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: 20,
    cursor: "pointer"
  },
  text: { fontSize: 18, fontWeghit: 600 },
  file: {
    boxShadow: "grey 0px 0px 9px 2px",
    margin: "10px 0 10px 0",
    width: 150,
    height: 35,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 3
  },
  deleteFile: { width: 25, height: 25, cursor: "pointer" },
  icon: { width: 30, height: 30, color: "grey", marginLeft: 5 }
};
