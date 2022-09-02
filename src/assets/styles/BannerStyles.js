import Colors from "../../constants/Colors";
import Images from "../../constants/ImageAssets";
const BannerStyles = (t) => ({
  bannerContainer: {
    background:
      "linear-gradient(to bottom ,#fff,#fff,#FEFCF3,#FFFCEB,#FFFBE6,#FDF2EB,#FDF2EB,#FDF2EB)",
  },
  banner: {
    background: `url(${Images.Banner}) no-repeat`,

    height: "800px",
    backgroundPosition: "bottom",
    backgroundSize: "100%",
    [t?.breakpoints?.down("lg")]: {
      height: "800px",
    },
    [t?.breakpoints?.down("md")]: {
      height: "530px",
    },
    [t?.breakpoints?.down("sm")]: {
      height: "500px",
    },
    [t?.breakpoints?.down("xs")]: {
      height: "400px",
    },
  },
  text: {
    fontSize: "18px",
    color: Colors.DARK_GREY,
    textAlign: "center",
    margin: "20px",
  },
});
export default BannerStyles;
