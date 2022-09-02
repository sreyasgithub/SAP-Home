import Colors from "../../constants/Colors";

const HowItWorkStyles = (t) => ({
  //left content

  statement: {
    fontSize: "20px",
    color: Colors.DARK_GREY,
  },
  contactWrapper: {
    margin: "20px 0px",
  },
  callUs: {
    fontSize: "14px",
    textTransform: "uppercase",
  },
  mobile: {
    fontSize: "32px",
    fontWeight: 900,
    margin: "15px 0px",
    color: Colors.DARK_ORANGE,
    display: "flex",
    alignItems: "center",
  },
  phoneIcon: {
    width: "30px",
    height: "30px",
    marginRight: 10,
    animation: "phoneIcon 2s",
    animationIterationCount: "infinite",
  },
  //accordian
  accordian: {
    border: "none",
    boxShadow: "none",

    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expandedAccordian: {
    boxShadow: "0px 4px 8px #00000029",
    border: "none",
    animation: "selectedAcordian 5s",
    animationIterationCount: "infinite",
    borderRadius: "8px",
    padding: "20px",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  summary: {
    borderBottom: `1px solid ${Colors.GREY_SHADE2}`,
    padding: "10px 30px",
    margin: "0px 20px",
    minHeight: 56,
  },
  expandedSummary: {
    // boxShadow: "0px -5px 8px #00000029",
    margin: "0px",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
    marginBottom: "-10px",
  },
  details: {
    boxShadow: "0px 4px 8px #00000029",
    padding: t?.spacing(2),
    margin: "20px 0px",
    borderRadius: "8px",
  },
  expandedDetails: {
    // boxShadow: "0px 5px 7px #00000029",
    padding: "0px 16px 16px",
    margin: "0px",
    borderBottomLeftRadius: "8px",
    borderBottomRightRadius: "8px",
  },
  content: {
    margin: "12px 0 !important",
  },
  question: {
    fontSize: "22px",
    fontWeight: 900,
  },
  activeQuestion: {
    fontSize: "22px",
    fontWeight: 900,
    color: Colors.DARK_ORANGE,
  },
  answer: {
    fontSize: "16px",
    color: Colors.DARK_GREY,
  },
  expandIconWrap: {
    boxShadow: "rgb(0 0 0 / 16%) 0px 4px 8px",
    borderRadius: "100px",
    width: "40px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "5px",
    boxSizing: "border-box",
  },
  link: {
    fontSize: "16px",
    color: Colors.DARK_ORANGE,
  },
});
export default HowItWorkStyles;
