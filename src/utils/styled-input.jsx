import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import { FaRegQuestionCircle } from "react-icons/fa";
import FormControl from "@material-ui/core/FormControl";

const Input = withStyles(theme => ({
  root: {
    "label + &": {
      direction: "rtl",
      marginTop: theme.spacing(3)
    }
  },
  input: {
    direction: "rtl",
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "inherit",
    padding: "10px 12px",
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
      borderColor: "blue"
    }
  }
}))(InputBase);

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing(1),
    width: "90%"
  }
}));

export function CustomizedInput(props) {
  const classes = useStyles();

  return (
    <FormControl className={classes.margin}>
      <div style={labelContainer}>
        <div style={props.labelStyle}>{props.label}</div>
        {props.icon ? (
          <FaRegQuestionCircle
            style={{ width: 24, height: 24, color: "#4f6182" }}
          />
        ) : null}
      </div>
      <Input
        value={props.value}
        name={props.name}
        defaultValue=""
        onChange={props.onChange}
        id="bootstrap-input"
        type={props.type}
        style={{ width: "100%" }}
        multiline={props.multiline}
        rows={props.rows}
      />
    </FormControl>
  );
}

const labelContainer = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 5
};
