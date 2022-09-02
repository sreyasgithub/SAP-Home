import Colors from "../../constants/Colors";

const FooterStyles = (t) => ({
  phoneIcon: {
    width: "20px",
    height: "20px",
    marginRight: 10,
    animation: "phoneIcon 2s",
    animationDelay: "3s",
    animationIterationCount: "infinite",
  },
  center: {
    [t?.breakpoints?.down("xs")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  },

  callUs: {
    fontSize: "18px",
    fontWeight: 900,
    color: Colors.WHITE,
    display: "flex",
    alignItems: "center",
  },
  boldText: {
    fontSize: "18px",
    fontWeight: "bold",
    color: Colors.WHITE,
    marginBottom: 5,
    [t?.breakpoints?.down("xs")]: {
      display: "block",
      textAlign: "center",
    },
  },
  link: {
    fontSize: "16px",
    fontWeight: "medium",
    color: Colors.WHITE,
    "&:hover": {
      color: Colors.DARK_ORANGE,
      transition: "color 1s ease-in-out",
    },
    [t?.breakpoints?.down("xs")]: {
      display: "block",
      textAlign: "center",
    },
  },

  timings: {
    fontSize: "16px",
    fontWeight: 300,
    color: Colors.WHITE,
  },
  email: {
    fontSize: "18px",
    fontWeight: "medium",
    color: Colors.WHITE,
    wordBreak: "break-word",
  },
  copyRight: {
    fontSize: "16px",
    fontWeight: "medium",
    color: Colors.WHITE,
  },
  licence: {
    fontSize: "14px",
    fontWeight: "medium",
    color: Colors.WHITE,
  },
  social: {
    display: "flex",

    listStyle: "none",
    justifyContent: "flex-start",
    padding: "0px",
  },
  socialIcon: {
    color: Colors.WHITE,
    fontSize: "24px",
    marginRight: "10px",
    "&:hover": {
      transform: "scale(1.2)",
      color: Colors.DARK_ORANGE,
      transition: "color 2s ease-in-out",
    },
  },
});
export default FooterStyles;
