import React from "react";
import { StepsIndicator } from "./stepperBar";
import { DeliveryDetailsWithFormik } from "./delivery-details";
import { ApplicantDetailsWithFormik } from "./applicant-details";
import { MaterialsDetailsWithFormik } from "./materials-details";
import { Approval } from "./approval";

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
      currentPage: 0,
      deliveryDetails: {
        reciverName: "",
        destationArea: "",
        passages: "",
        ReciverAddress: "",
        driverName: "",
        driverId: "",
        file: "",
        notes: "",
        reciverPhoneNumber: "",
        moneyValue: "",
        moneyType: ""
      },
      applicantDetails: {
        supplierName: "",
        country: "",
        companyID: "",
        EmailAddress: "",
        id: "",
        phoneNumber: "",
        materialSource: "",
        fullName: "",
        faxNumber: "",
        antoherPhoneNumber: ""
      },
      materialsDetails: {
        itemName: "",
        unitMeasures: "",
        itemDesignation: "",
        quantityRequested: "",
        category: "",

        items: null
      }
    };
  }
  
  changedeliveryDetails = data => {
    this.setState({ deliveryDetails: data });
  };

  deletefile = file => {
    this.setState(state => {
      state.deliveryDetails.file = file;
    });
  };

  changeApplicantDetails = data => {
    this.setState({ applicantDetails: data });
  };
  changematerialsDetails = data => {
    this.setState({ materialsDetails: data });
  };

  onClickEdit = pageToEdit => {
    this.setState({ currentPage: pageToEdit });
  };

  renderComponent(pageNumber) {
    switch (pageNumber) {
      case 0:
        return (
          <DeliveryDetailsWithFormik
            onClickBack={this.onClickBack}
            onClickNext={this.onClickNext}
            deliveryDetails={this.state.deliveryDetails}
            chnagesState={this.changedeliveryDetails}
            deletefile={this.deletefile}
          />
        );
      case 1:
        return (
          <ApplicantDetailsWithFormik
            onClickBack={this.onClickBack}
            onClickNext={this.onClickNext}
            applicantDetails={this.state.applicantDetails}
            chnagesState={this.changeApplicantDetails}
          />
        );
      case 2:
        return (
          <MaterialsDetailsWithFormik
            onClickBack={this.onClickBack}
            onClickNext={this.onClickNext}
            materialsDetails={this.state.materialsDetails}
            chnagesState={this.changematerialsDetails}
          />
        );
      case 3:
        return (
          <Approval
            onClickBack={this.onClickBack}
            onClickNext={this.onClickNext}
            data={this.state}
            onClickEdit={this.onClickEdit}
          />
        );
      default:
        return null;
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
      </div>
    );
  }
}
