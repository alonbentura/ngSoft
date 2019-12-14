import React from "react";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

export function RadioBtn(props) {
  return (
    <FormControl component="fieldset">
      <FormControlLabel
        value=""
        control={<Radio color="primary" />}
        label={props.label}
      />
    </FormControl>
  );
}
