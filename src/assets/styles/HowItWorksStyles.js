import Colors from "../../constants/Colors";

const HowItWorkStyles = (t) => ({
  stepWrapper1: {
    padding: "0px",
    textAlign: "center",
    animationName: "scaleOutIn",
    animationDuration: "2s",
    animationFillMode: "both",
    animationDelay: "1s",
    [t?.breakpoints?.down("xs")]: {
      animationName: "scaleInOut",
      animationDuration: "2s",
      animationFillMode: "both",
      animationDelay: "1s",
    },
  },
  stepWrapper2: {
    padding: "0px",
    textAlign: "center",
    animationName: "scaleOutIn",
    animationDuration: "2s",
    animationFillMode: "both",
    animationDelay: "5s",
    [t?.breakpoints?.down("xs")]: {
      animationName: "scaleInOut",
      animationDuration: "2s",
      animationFillMode: "both",
      animationDelay: "5s",
    },
  },
  stepWrapper3: {
    padding: "0px",
    textAlign: "center",
    animationName: "scaleOutIn",
    animationDuration: "2s",
    animationFillMode: "both",
    animationDelay: "9s",
    [t?.breakpoints?.down("xs")]: {
      animationName: "scaleInOut",
      animationDuration: "2s",
      animationFillMode: "both",
      animationDelay: "9s",
    },
  },
  subHeading: {
    fontSize: "20px",
    fontWeight: "medium",
    textAlign: "center",
    marginBottom: "20px",
    color: Colors.DARK_GREY,
    fontFamily: "'Lato', sans-serif",
  },
  dashedLineContainer: {
    display: "flex",
  },
  dashedLine1: {
    width: "0%",
    height: "5px",
    borderTop: `2px dashed #E6E7E9`,
    margin: "auto 0px",
    animation: "leftToRightDashedLine 2s linear",
    animationDelay: "3s",
    animationFillMode: "forwards",
    [t?.breakpoints?.down("xs")]: {
      width: "0px",
      height: "0px",
      borderRight: `2px dashed #E6E7E9`,
      borderTop: "none",
      margin: "0px auto",
      animation: "topToBottomDashedLine 2s linear",
      animationDelay: "3s",
      animationFillMode: "forwards",
    },
  },
  dashedLine2: {
    width: "0%",
    height: "5px",
    borderTop: `2px dashed #E6E7E9`,
    margin: "auto 0px",
    animation: "leftToRightDashedLine 2s linear",
    animationDelay: "7s",
    animationFillMode: "forwards",
    [t?.breakpoints?.down("xs")]: {
      width: "0px",
      height: "0px",
      borderRight: `2px dashed #E6E7E9`,
      borderTop: "none",
      margin: "0px auto",
      animation: "topToBottomDashedLine 2s linear",
      animationDelay: "7s",
      animationFillMode: "forwards",
    },
  },
  label: {
    color: Colors.DARK_ORANGE,
    fontSize: "22px",
    fontFamily: "'Lato', sans-serif",
    fontWeight: 900,
    margin: "10px",
  },
  text: {
    color: Colors.GREY_SHADE3,
    fontSize: "18px",
    fontFamily: "'Lato', sans-serif",
  },
});
export default HowItWorkStyles;
