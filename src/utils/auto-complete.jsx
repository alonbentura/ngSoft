import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import _ from "lodash";

export function InputAutoComplete(props) {
  const options = _.get(props, "options", []);
  return (
    <div style={{ width: '100%' }}>
      <Autocomplete
        disableClearable
        onChange={props.selectedMaterial}
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
