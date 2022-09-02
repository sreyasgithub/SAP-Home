import Colors from "../../constants/Colors";

const HopeSpaceStyles = (t) => ({
  headingText: {
    fontSize: "20px",
    fontWeight: "medium",
    color: Colors.DARK_GREY,
  },

  question: {
    fontSize: "24px",
    fontWeight: 900,
  },
  answer: {
    fontSize: "16px",
    color: Colors.DARK_GREY,
  },
  moreArticlesLinkWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    [t?.breakpoints?.down("xs")]: {
      justifyContent: "flex-start",
    },
  },
  hopeImg: {
    width: "95%",
    height: "auto",
    position: "relative",
    borderRadius: "8px",
    cursor: "pointer",
    "&:hover div": {
      opacity: 1,
      transition: "opacity 2s ease-out",
    },
    "&:after": {
      content: "''",
      position: "absolute",
      top: "-50%",
      left: "-60%",
      width: "20%",
      height: "200%",
      opacity: 0,
      transform: "rotate(30deg)",

      background:
        "linear-gradient(to right, rgba(255, 255, 255, 0.13) 0%, rgba(255, 255, 255, 0.15) 77%,rgba(255, 255, 255, 0.5) 92%,rgba(255, 255, 255, 0.0) 100% )",
      animation: "imageOverlay 2s linear",
    },
  },

  hopeRow1: {
    animation: "hopeRowRightToLeft 1s ease-in",
    animationDelay: "1s",
    animationFillMode: "both",
  },
  hopeRow2: {
    animation: "hopeRowLeftToRight 1s ease-in",
    animationDelay: "3s",
    animationFillMode: "both",
  },
  hopeRow3: {
    animation: "hopeRowRightToLeft 1s ease-in",
    animationDelay: "5s",
    animationFillMode: "both",
  },
  typing: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: "2px",
    width: "100%",
    background: "linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5))",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0,
  },

  // innerText: {
  //   position: "absolute",
  //   top: " 50%",
  //   left: "50%",
  //   transform: "translate(-50%,-50%)",
  //   // padding: "12px 48px",
  //   color: "#000",
  //   backgroundClip: "text",
  //   textFillColor: "transparent",
  //   textSizeAdjust: "none",
  //   background:
  //     "linear-gradient(to right, transparent 0, #fff 10%, transparent 20%)",
  //   backgroundPosition: 0,
  //   animation: "shine 3s infinite linear",
  //   animationFillMode: "forwards",
  //   fontWeight: 900,
  //   fontSize: "50px",
  //   textDecoration: "none",
  //   whiteSpace: " nowrap",
  // },

  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "8px",
  },
  title: {
    fontSize: "12px",
    fontWeight: "medium",
    color: Colors.DARK_GREY,
  },
  subTitle: {
    fontSize: "18px",
    fontWeight: 900,
  },
  description: {
    fontSize: "14px",

    color: Colors.DARK_GREY,
  },
});
export default HopeSpaceStyles;
