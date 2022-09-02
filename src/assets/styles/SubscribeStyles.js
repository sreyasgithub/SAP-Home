import Colors from "../../constants/Colors";

const SubscribeStyles = (t) => ({
  subscribtionWrapper: {
    background: Colors.WHITE,
    padding: "50px 100px",
    borderRadius: "8px",
    boxSizing: "border-box",
    margin: "40px 60px -100px 60px",
    position: "relative",
    animation: "subscribtionWrapper 2s ease-in",
    [t?.breakpoints?.down("sm")]: {
      padding: "50px 60px",
      margin: "40px 40px -100px 40px",
    },
    [t?.breakpoints?.down("xs")]: {
      padding: "30px",
      margin: "40px 30px -100px 30px",
    },
  },
  inputBtnWrapper: {
    background: Colors.WHITE,
    borderRadius: "100px",
    padding: "5px",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "space-between",
    border: `1px solid #CBCBCB `,
    [t?.breakpoints?.down("xs")]: {
      border: "none",
      flexDirection: "column",
      alignItems: "flex-end",
    },
  },

  input: {
    border: "none",
    padding: "10px 30px",
    display: "flex",
    margin: "0px",
    justifyContent: "center",
    width: "100%",
    boxSizing: "border-box",
    "&::after": {
      borderBottom: "none",
    },
    "&::before": {
      borderBottom: "none",
    },

    [t?.breakpoints?.down("xs")]: {
      border: `1px solid #CBCBCB `,
      borderRadius: "100px",
      marginBottom: "20px",
    },
  },
  button: {
    background: Colors.DARK_ORANGE,
    borderRadius: "30px",
    fontWeight: "600",
    color: "#fff",
    textTransform: "capitalize",
    padding: "10px 20px",
    width: "250px",
    border: "none",
    "&:hover": {
      background: Colors.DARK_ORANGE,
      border: "none",
    },
    [t?.breakpoints?.down("xs")]: {
      width: "fit-content",
    },
  },
});
export default SubscribeStyles;
