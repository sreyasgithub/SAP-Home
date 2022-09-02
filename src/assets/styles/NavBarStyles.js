import Colors from "../../constants/Colors";

const navbarStyles = (t) => ({
  nav: {
    padding: "20px 0px",
  },
  navItem: {
    textAlign: "center",
  },
  navLinkWrapper: {
    position: "relative",
    "&:after": {
      content: "'•'",
      position: "absolute",
      top: "28%",
      right: "-10px",
      fontSize: "10px",
      color: "#1D1D1B",
      opacity: "0.4",
      marginLeft: "10px",
    },
  },
  navLink: {
    color: "#000",
    "&:hover": {
      cursor: "pointer",
      color: Colors.DARK_ORANGE,
      transition: "color 1s ease-in",
    },
    "&:active": {
      color: Colors.DARK_ORANGE,
    },
  },
});
export default navbarStyles;
