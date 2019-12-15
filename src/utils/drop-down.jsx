import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";
import _ from "lodash";

const BootstrapInput = withStyles(theme => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3)
    }
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    }
  }
}))(InputBase);

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
    width: "90%"
  }
}));

export function DropDown(props) {
  const classes = useStyles();
  const data1 = _.get(props, "data", []);
  const [age, setAge] = React.useState("");
  const handleChange = event => {
    setAge(event.target.value);
  };
  return (
    <FormControl
      style={props.style ? props.style : null}
      className={classes.margin}
    >
      <div style={{ marginBottom: 5 }}>{props.label}</div>
      <NativeSelect
        id="demo-customized-select-native"
        value={age}
        onChange={handleChange}
        input={<BootstrapInput style={{ width: "100%" }} onChange={props.onChange} />}
      >
        {data1.map(item => {
          return (
            <option key={item.id} value={item.title}>
              {item.title}
            </option>
          );
        })}
      </NativeSelect>
    </FormControl>
  );
}
