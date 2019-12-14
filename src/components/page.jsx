import React from "react";
import { StepsIndicator } from "./stepperBar";
import { DeliveryDetailsWithFormik } from "./delivery-details";
import { Footer } from "./footer";
import { ApplicantDetails } from "./applicant-details";
import { MaterialsDetails } from "./materials-details";
import { ApprovalWithFormik } from "./approval";

const page = {
  0: "deliveryDetails",
  1: "applicantDetails",
  2: "materialsDetails",
  3: "approval"
};

const textStyle = {
  textAlign: "center",
  fontSize: 40,
  color: "#0370c4",
  paddingTop: 15
};

export class FormPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0
    };
  }

  renderComponent(pageNumber) {
    switch (pageNumber) {
      case 0:
        return <DeliveryDetailsWithFormik />;
      case 1:
        return <ApplicantDetails />;
      case 2:
        return <MaterialsDetails />;
      case 3:
        return <ApprovalWithFormik />;
      default:
        return <DeliveryDetailsWithFormik />;
    }
  }

  onClickNext = () => {
    if (this.state.currentPage === 3) {
      return;
    }
    this.setState({ currentPage: this.state.currentPage + 1 });
  };

  onClickBack = () => {
    if (this.state.currentPage === 0) {
      return;
    }
    this.setState({ currentPage: this.state.currentPage - 1 });
  };

  render() {
    const { currentPage } = this.state;
    return (
      <div style={{ backgroundColor: "#f7f8fa" }}>
        <div style={textStyle}>טופס איכות הסביבה</div>
        <StepsIndicator currentPage={page[currentPage]}></StepsIndicator>
        {this.renderComponent(currentPage)}
        <Footer
          onClickNext={this.onClickNext}
          onClickBack={this.onClickBack}
        ></Footer>
      </div>
    );
  }
}
