import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import _ from "lodash";
import data from "../utils/db.json";
import { FaRegQuestionCircle } from "react-icons/fa";

export class InputAutoComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const options = data.ingredients;
    return (
      <div style={{ width: "100%" }}>
        <div style={labelContainer}>
          <div style={this.props.labelStyle}>{this.props.label}</div>
          {this.props.icon ? (
            <FaRegQuestionCircle
              style={{ width: 24, height: 24, color: "#4f6182" }}
            />
          ) : null}
        </div>
        <Autocomplete
          disableClearable
          onChange={this.props.selectedMaterial}
          freeSolo
          id="free-solo-2-demo"
          disableOpenOnFocus
          options={options.map(option => option.inventoryName)}
          renderInput={params => (
            <TextField
              {...params}
              margin="normal"
              variant="outlined"
              fullWidth
              InputProps={{ ...params.InputProps, type: "search" }}
            />
          )}
        />
      </div>
    );
  }
}
const labelContainer = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 5
};
