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
import _ from "lodash";
// import { goNext, goBack } from "../store/actions";
// import { connect } from "react-redux";
import { Footer } from "../components/footer";

export class DeliveryDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
      notes: ""
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
          <RadioBtn label="עזה" />
          <RadioBtn label="איו''ש" />
        </div>
      </div>
    );
  };

  onchangeInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  renderInputs = () => {
    const { values, errors } = this.props;
    return (
      <div style={styles.inputsContainer}>
        <div style={{ display: "flex", flexDirection: "column", flex: 2 }}>
          <CustomizedInput
            label={label.ReciverName}
            labelStyle={styles.text}
            type={"string"}
            icon={true}
            value={values.reciverName}
            name="reciverName"
            onChange={this.props.handleChange}
          />
          {errors.reciverName ? (
            <div style={styles.err}>יש למלא שם מקבל המשלוח</div>
          ) : null}
          <CustomizedInput
            value={values.ReciverAddress}
            onChange={this.props.handleChange}
            label={label.ReciverAddress}
            labelStyle={styles.text}
            icon={true}
            name="ReciverAddress"
          />
          {errors.ReciverAddress ? (
            <div style={styles.err}>יש למלא כתובת</div>
          ) : null}
          <DropDown
            label={label.passages}
            data={data.passages}
            onChange={this.props.handleChange}
          />
          {errors.reciverName ? (
            <div style={styles.err}>יש לבחור מעבר</div>
          ) : null}
          <CustomizedInput
            value={values.driverName}
            label={label.driverName}
            labelStyle={styles.text}
            type={"string"}
            name="driverName"
            onChange={this.props.handleChange}
          />
          {errors.driverName ? (
            <div style={styles.err}>יש למלא שם נהג</div>
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
          {errors.reciverPhoneNumber ? (
            <div style={styles.err}>יש למלא מספר מקבל המשלוח</div>
          ) : null}
          <div
            style={{ display: "flex", alignItems: "flex-end", width: "91%" }}
          >
            <CustomizedInput
              value={values.moneyValue}
              onChange={this.props.handleChange}
              label={label.MoneyValue}
              labelStyle={styles.text}
              type={"number"}
              name="moneyValue"
            />
            <DropDown
              data={data.moneyType}
              style={{ width: "40%", marginLeft: 0 }}
              onChange={this.props.handleChange}
            />
            {errors.moneyValue ? (
              <div style={styles.err}>יש למלא סכום</div>
            ) : null}
          </div>
          <CustomizedInput
            value={values.driverId}
            label={label.DriverId}
            labelStyle={styles.text}
            onChange={this.props.handleChange}
            type={"number"}
            name="driverId"
          />
          {errors.driverId ? (
            <div style={styles.err}>יש למלא ת.ז נהג</div>
          ) : null}
        </div>
      </div>
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

  onClickDelete = () => {
    this.setState({ file: "" });
    this.props.deletefile({ file: "" });
  };
  onChangeNotes = e => {
    this.setState({ notes: e.target.value });
  };

  moreInfoForm() {
    const fileFromState = this.state.file;
    const fileFromProps = this.props.deliveryDetails.file;
    const file = fileFromProps ? fileFromProps : fileFromState;
    return (
      <div style={sharedStyle.formContainer}>
        <div style={sharedStyle.formHeadlineText}>{label.moreInfo}</div>
        <div style={{ ...styles.text, display: "flex", marginBottom: 5 }}>
          {label.addDocument}
          <FaRegQuestionCircle
            style={{ width: 24, height: 24, color: "#4f6182", marginRight: 10 }}
          />
        </div>
        {file.name ? (
          <div style={styles.file}>
            <MdClose style={styles.deleteFile} onClick={this.onClickDelete} />
            {file.name}
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
          name="notes"
          value={this.props.values.notes}
          onChange={this.props.handleChange}
        />
      </div>
    );
  }

  clickNext = () => {
    const { values } = this.props;
    const data = {
      reciverName: values.reciverName,
      ReciverAddress: values.ReciverAddress,
      driverName: values.driverName,
      driverId: values.driverId,
      reciverPhoneNumber: values.reciverPhoneNumber,
      moneyValue: values.moneyValue,
      file: this.state.file,
      notes: values.notes
    };

    if (this.props.isValid) {
      this.props.chnagesState(data);
      this.props.onClickNext();
    }
  };

  render() {
    return (
      <Form>
        <div style={styles.container}>
          {this.headline()}
          {this.destinationForm()}
          {this.moreInfoForm()}
          <Footer
            onClickNext={this.clickNext}
            onClickBack={this.props.onClickBack}
          />
        </div>
      </Form>
    );
  }
}

const validationSchema = yup.object().shape({
  reciverName: yup.string().required(),
  ReciverAddress: yup.string().required(),
  driverName: yup.string().required(),
  reciverPhoneNumber: yup.number().required(),
  moneyValue: yup.number().required(),
  driverId: yup.number().required()
});

export const DeliveryDetailsWithFormik = withFormik({
  enableReinitialize: true,
  validationSchema,
  mapPropsToValues(props) {
    const {
      reciverName,
      ReciverAddress,
      driverName,
      reciverPhoneNumber,
      moneyValue,
      notes,
      file,
      driverId
    } = props.deliveryDetails;
    return {
      reciverName,
      ReciverAddress,
      driverName,
      reciverPhoneNumber,
      moneyValue,
      driverId,
      notes,
      file
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
  icon: { width: 30, height: 30, color: "grey", marginLeft: 5 },
  err: {
    fontSize: 12,
    color: "red",
    fontWeight: "bold",
    marginRight: 8
  }
};
