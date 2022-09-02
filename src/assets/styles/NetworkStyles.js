import Colors from "../../constants/Colors";

const NetworkStyles = (t) => ({
  //slider
  sliderWrapper: {
    position: "relative",

    "&:before": {
      content: "''",
      position: "absolute",
      top: "-30%",
      left: 0,
      width: "100%",
      height: "100%",
      opacity: 0,
      background: Colors.BABY_PINK,
      borderRadius: "8px",
      transform: "translate(-15px,15px)",
      animation: "sliderShadow 3s forwards linear",
      animationDelay: "1s",
    },
  },

  slider: {
    position: "relative",
    height: "100vh",
    width: "100vw",
    margin: "0 auto",
    overflow: "hidden",
  },
  sliderContent: {
    position: "relative",
    "&:after": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage:
        "linear-gradient(to bottom,transparent,transparent,transparent,rgba(0,0,0,.2),rgba(0,0,0,.8))",
      zIndex: 1,
      borderRadius: "8px",
    },
  },
  img: {
    display: "block",
    width: "100%",
    height: "450px",
    objectFit: "cover",
    objectPosition: "top",
    borderRadius: "8px",
    position: "relative",
  },
  details: {
    position: "absolute",
    bottom: 0,
    padding: "30px 40px",
    color: Colors.WHITE,
    zIndex: 2,
  },
  role: {
    fontSize: "12px",
  },
  name: {
    fontSize: "22px",
    fontWeight: 900,
    padding: "5px 0px",
  },
  services: {
    fontSize: "14px",
    fontWeight: 600,
  },

  //right content,
  rightGrid: {
    display: "block",
    margin: "auto 60px",
    padding: "0px 40px",
    boxSizing: "border-box",
    [t?.breakpoints?.down("sm")]: {
      padding: "0px 30px",
      margin: " 0px",
    },
  },
  description: {
    fontSize: "18px",
    color: Colors.DARK_GREY,
  },
  options: {
    fontSize: "14px",
  },
  optionWrapper: {
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
  },
  option: {
    fontSize: "18px",
    fontWeight: "medium",
    color: Colors.DARK_ORANGE,
  },
  optionIconWrapper: {
    width: "38px",
    height: "38px",
    background: "#FDF1E9",
    borderRadius: "100%",
    padding: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "10px",
  },
  icon: {},
});
export default NetworkStyles;
