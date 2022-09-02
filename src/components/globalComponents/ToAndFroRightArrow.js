import React from "react";
import * as RiIcons from "react-icons/ri";
import { makeStyles } from "@material-ui/core";
const Style = (t) => ({
  toandfroArrowRight: {
    animation: "toAndFrowRightArrow 2s infinite",
    paddingBottom: "0px",
  },
});

const useStyles = makeStyles(Style);
const ToAndFroRightArrow = ({ color, size }) => {
  const classes = useStyles();
  return (
    <RiIcons.RiArrowRightSLine
      color={color}
      size={25}
      className={classes.toandfroArrowRight}
    />
  );
};

export default ToAndFroRightArrow;
