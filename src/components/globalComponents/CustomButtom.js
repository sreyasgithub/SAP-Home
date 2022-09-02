import React from "react";

import { Button, Box } from "@material-ui/core";
import Colors from "../../constants/Colors";
import { makeStyles } from "@material-ui/styles";
const buttonStyles = (t) => ({
  btn: {
    padding: "15px 30px",
    borderRadius: "100px",
    color: Colors.WHITE,
    background:
      "transparent linear-gradient(257deg, #EE9329 0%, #EE7329 100%) 0% 0% no-repeat padding-box;",
    fontSize: "14px",
    fontWeight: 900,
    position: "relative",
    textTransform: "none",
    cursor: "pointer",
    zIndex: 2,
    boxShadow: "0px 5px 5px 0px #FDEBDC ",
    "&:hover": {
      animation: "btnBubble 1s forwards",
    },
    "&:hover:before": {
      display: "none",
    },
    "&:before": {
      content: "''",
      width: "100%",
      height: "100%",
      position: "absolute",
      top: "0px",
      left: "-10%",
      borderTopRightRadius: "100px",
      borderBottomRightRadius: "100px",

      boxShadow: "none",
      background:
        "linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 50%,rgba(128,186,232,0) 99%,rgba(125,185,232,0) 100%)",

      animation: "btnShine 2s infinite",
    },
  },
});

const useStyles = makeStyles(buttonStyles);

const CustomButtom = ({ align, btnLabel }) => {
  const classes = useStyles();
  return (
    <Box style={{ width: "100%", display: "flex", justifyContent: align }}>
      <Button classes={{ root: classes.btn }}>{btnLabel}</Button>
    </Box>
  );
};

export default CustomButtom;
