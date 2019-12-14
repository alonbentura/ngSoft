import React from "react";
import { CustomizedInput } from "../utils/styled-input";
import { InputAutoComplete } from "../utils/auto-complete";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import * as label from "../utils/labels";
import { DropDown } from "../utils/drop-down";
import { sharedStyle } from "../utils/shared-style";
import data from "../utils/db.json";

export class MaterialsDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  headline() {
    return (
      <div>
        <div style={sharedStyle.headlineText}>{label.materialDetails}</div>
        <div style={sharedStyle.attentionContainer}>
          <AiOutlineExclamationCircle
            style={{ width: 30, height: 30, color: "grey", marginLeft: 5 }}
          />
          {label.attention2}
        </div>
      </div>
    );
  }

  itemDetails = () => {
    return (
      <div style={styles.inputsContainer}>
        <div style={styles.inputs}>
          <CustomizedInput
            label={label.itemName}
            labelStyle={styles.text}
            type={"string"}
            icon={true}
          />
          <CustomizedInput
            label={label.ItemDesignation}
            labelStyle={styles.text}
            icon={true}
          />
        </div>
        <div style={styles.inputs}>
          <DropDown label={label.category} data={data.categories} />
          <CustomizedInput
            label={label.quantityRequested}
            labelStyle={styles.text}
            type={"string"}
          />
        </div>
      </div>
    );
  };

  itemForm() {
    return (
      <div style={sharedStyle.formContainer}>
        <div style={sharedStyle.formHeadlineText}>{label.item}</div>
        {this.itemDetails()}
      </div>
    );
  }

  selectedMaterial = (option, value) => {
    console.log(option.target.value);
  };

  materialList() {
    return (
      <div style={sharedStyle.formContainer}>
        <div style={sharedStyle.formHeadlineText}>{label.materialList}</div>
        <InputAutoComplete
          selectedMaterial={this.selectedMaterial}
          options={data.ingredients}
          label={label.addMaterial}
          labelStyle={styles.text}
          type={"string"}
          icon={true}
        />
      </div>
    );
  }

  render() {
    return (
      <div style={styles.container}>
        {this.headline()}
        {this.itemForm()}
        {this.materialList()}
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
