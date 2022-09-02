import Colors from "../../constants/Colors";

const SercicesStyles = (t) => ({
  headingWrapper: {
    padding: 60,
  },

  linkWrapper: {
    marginTop: 20,
  },
  serviceCard: {
    width: "100%",
    height: "300px",
    backgroundSize: "cover !important",
    backgroundPosition: "bottom !important",
    borderRadius: "8px",
    display: "flex",
    alignItems: "end",
    position: "relative",
    animationDuration: "5s",
    animationFillMode: "both",
    animationName: "fadeInLeft",
    zIndex: 1,
    "&:after": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      background: "rgba(0,0,0,0.2)",
      transition: "all 1s",
      borderRadius: 8,
      zIndex: 0,
    },
    "&:hover:after": {
      transform: "skew(10deg,10deg)",
      transition: "transform 1s ease-in",
      cursor: "pointer",
    },
  },
  serviceDescriptionWrapper: {
    background: Colors.WHITE,
    padding: "20px",
    borderRadius: "8px",
    margin: "10px",
    zIndex: 2,
  },
  cardHeading: {
    fontSize: "21px",
    fontWeight: 900,
    fontFamily: "'Lato', sans-serif",
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: "16px",
    fontWeight: 500,
    fontFamily: "'Lato', sans-serif",
    color: Colors.DARK_GREY,
  },

  //reviews

  reviewsLeftWrapper: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    width: "80%",
    [t?.breakpoints?.down("sm")]: {
      paddingLeft: "60px",
    },
  },
  reviewsHeading: {
    fontSize: "42px",
  },
  reviewsCount: {
    fontWeight: 600,
  },
  fiveStar: {
    fontWeight: 600,
  },

  reviewSlide: {
    display: "flex",
    flexDirection: "column",
    background: "#fff",
    /* align-items: baseline, */
    alignItems: "baseline",
    justifyContent: "center",
    height: "80%",
    width: "80%",
    margin: "5px auto 20px",
    boxShadow: "0px 4px 8px #00000029",
    padding: "80px",
    borderRadius: "8px",
    boxSizing: "border-box",
    [t?.breakpoints?.down("xs")]: {
      padding: "60px",
    },
  },
  review: {
    fontSize: "18px",
    fontFamily: "'Lato', sans-serif",
    color: Colors.GREY_SHADE3,
  },
  reviewBy: {
    fontSize: "16px",
    fontWeight: 900,
    fontFamily: "'Lato', sans-serif",
    color: Colors.DARK_GREY,
  },
  quoteLeftIcon: {
    position: "absolute",
    top: "-10px",
    left: "-40px",
  },
  rating: {
    display: "flex",
    listStyle: "none",
    padding: 0,
  },
  star: {
    fontSize: "30px",
    marginRight: "5px",
    // transform: "translate(-40px)",
    opacity: 0,
    color: Colors.DARK_ORANGE,
    animation: "ratingStar 2s forwards",
    animationDelay: "1s",
  },
});
export default SercicesStyles;
