import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const BlueRadio = withStyles({
  root: {
    color: "#0072fa",
    "&$checked": {
      color: "#0072fa"
    }
  },
  checked: {}
})(props => <Radio color="default" {...props} />);

export default function RadioButtonsGroup(props) {
  return (
    <div>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={props.value}
          name={props.name}
          style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}
          onChange={props.handleChange}
        >
          <FormControlLabel value="עזה" control={<BlueRadio />} label="עזה" />
          <FormControlLabel value="איוש" control={<BlueRadio />} label="איוש" />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
