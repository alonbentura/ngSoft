import React from "react";
import { CustomizedInput } from "../utils/styled-input";
import { InputAutoComplete } from "../utils/auto-complete";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import * as label from "../utils/labels";
import { DropDown } from "../utils/drop-down";
import { sharedStyle } from "../utils/shared-style";
import { Footer } from "../components/footer";
import * as yup from "yup";
import { withFormik } from "formik";
import data from "../utils/db.json";
import { ItemsList } from "./material-items-list";

export class MaterialsDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
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
    const { errors, values } = this.props;
    return (
      <div style={styles.inputsContainer}>
        <div style={styles.inputs}>
          <CustomizedInput
            label={label.itemName}
            labelStyle={styles.text}
            type={"string"}
            icon={true}
            name="itemName"
            onChange={this.props.handleChange}
            value={values.itemName}
          />
          {errors.itemName ? (
            <div style={styles.err}>יש למלא שם פריט</div>
          ) : null}
          <CustomizedInput
            label={label.ItemDesignation}
            labelStyle={styles.text}
            icon={true}
            onChange={this.props.handleChange}
            value={values.itemDesignation}
            name="itemDesignation"
          />
          {errors.itemDesignation ? (
            <div style={styles.err}>יש לרשום יעוד</div>
          ) : null}
        </div>
        <div style={styles.inputs}>
          <DropDown
            label={label.category}
            data={data.categories}
            value={values.category}
            onChange={this.props.handleChange}
            name="category"
          />
          <div
            style={{ display: "flex" , flexDirection:'column', alignItems: "flex-start", width: "91%" }}
          >
            <div
              style={{
                display: "flex",
                width: "100%",
                flexDirection: "row",
                alignItems: "flex-end"
              }}
            >
              <CustomizedInput
                label={label.quantityRequested}
                labelStyle={styles.text}
                onChange={this.props.handleChange}
                value={values.quantityRequested}
                type={"string"}
                name={"quantityRequested"}
              />
              <DropDown
                data={data.unitMeasures}
                value={values.moneyType}
                style={{ width: "40%", marginLeft: 0 }}
                onChange={this.props.handleChange}
                name="unitMeasures"
              />
            </div>
            {errors.quantityRequested ? (
              <div style={styles.err}>יש למלא כמות</div>
            ) : null}
          </div>
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

  selectedMaterial = (event, value) => {
    const item = data.ingredients.find(
      ingredient => ingredient.inventoryName === value
    );
    const index = this.state.items.indexOf(item);
    if (index !== -1) {
      return;
    }
    this.setState(prevState => ({
      items: [...prevState.items, item]
    }));
  };

  deleteFromList = item => {
    let array = [...this.state.items];
    const index = array.indexOf(item);
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({ items: array });
    }
  };

  materialList() {
    const itemsFromState = this.state.items;
    const itemsFromProps = this.props.materialsDetails.items;
    const items = itemsFromProps ? itemsFromProps : itemsFromState;
    return (
      <div style={sharedStyle.formContainer}>
        <div style={sharedStyle.formHeadlineText}>{label.materialList}</div>
        <div>
          <ItemsList
            items={items}
            deleteFromList={this.deleteFromList}
            icon={true}
          />
        </div>
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

  clickNext = () => {
    const { values } = this.props;
    const data = {
      items: this.state.items,
      itemName: values.itemName,
      itemDesignation: values.itemDesignation,
      quantityRequested: values.quantityRequested,
      category: values.category,
      unitMeasures: values.unitMeasures
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
        {this.itemForm()}
        {this.materialList()}
        <Footer
          onClickNext={this.clickNext}
          onClickBack={this.props.onClickBack}
        />
      </div>
    );
  }
}
const validationSchema = yup.object().shape({
  itemName: yup.string().required(),
  itemDesignation: yup.string().required(),
  quantityRequested: yup.number().required()
});

export const MaterialsDetailsWithFormik = withFormik({
  validationSchema,
  mapPropsToValues(props) {
    const {
      itemName,
      itemDesignation,
      quantityRequested,
      category,
      unitMeasures
    } = props.materialsDetails;
    return {
      itemName,
      itemDesignation,
      unitMeasures,
      category,
      quantityRequested
    };
  }
})(MaterialsDetails);

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
  file: {
    boxShadow: "grey 0px 0px 9px 2px",
    margin: "10px 0 10px 0",
    width: "100%",
    height: 35,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 3
  },
  deleteFile: { width: 25, height: 25, cursor: "pointer", marginLeft: 8 },
  err: {
    fontSize: 12,
    color: "red",
    fontWeight: "bold",
    marginRight: 8
  }
};
