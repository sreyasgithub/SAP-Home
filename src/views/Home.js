import React from "react";
import { Box } from "@material-ui/core";
import Colors from "../constants/Colors";
import Service from "../components/viewComponents/home/Services";
import HowItWorks from "../components/viewComponents/home/HowItWorks";
import Reviews from "../components/viewComponents/home/Reviews";
import HopeSpace from "../components/viewComponents/home/HopeSpace";
import FAQ from "../components/viewComponents/home/faq/FAQ";
import Affiliations from "../components/viewComponents/home/Affiliations";
import Network from "../components/viewComponents/home/Network";
import Banner from "../components/globalComponents/Banner";
const Home = () => {
  return (
    <>
      <Banner />
      <Box
        style={{
          background:
            "linear-gradient(to top right ,#fff,#fff,#FDF2EB,#FEF4E8,#FDF1EA,#FDF2EB)",
        }}
      >
        <Service />
      </Box>

      <HowItWorks />
      <Box style={{ background: Colors.GREY_SHADE1 }}>
        <Reviews />
      </Box>
      <Network />
      <HopeSpace />
      <FAQ />
      <Box style={{ background: Colors.BABY_PINK }}>
        <Affiliations />
      </Box>
    </>
  );
};

export default Home;
