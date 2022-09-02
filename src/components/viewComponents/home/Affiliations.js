import React from "react";
import { Container, Grid } from "@material-ui/core";
import GlobalStyles from "../../../assets/styles/GlobalStyles";
import Images from "../../../constants/ImageAssets";
import Subscribe from "./Subscribe";
const Affiliations = () => {
  return (
    <Container style={GlobalStyles.section}>
      <Grid container spacing={5} justifyContent="center" alignItems="center">
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <p style={GlobalStyles.heading}>
            <span style={GlobalStyles.headingHighlight}>Affiliations</span>
          </p>
        </Grid>
        <Grid item xs={6} sm={2} md={2} lg={2}>
          <img
            src={Images.Affiliation1}
            width="100%"
            height="100%"
            style={{
              boxSizing: "border-box",
            }}
            alt="monfort-college"
          />
        </Grid>
        <Grid item xs={6} sm={2} md={3} lg={3}>
          <img
            src={Images.Affiliation2}
            width="100%"
            height="100%"
            style={{
              boxSizing: "border-box",
            }}
            alt="addictions-uk"
          />
        </Grid>
        <Grid item xs={6} sm={2} md={3} lg={3}>
          <img
            src={Images.Affiliation3}
            width="100%"
            height="100%"
            style={{
              boxSizing: "border-box",
            }}
            alt="renascents"
          />
        </Grid>
        <Grid item xs={6} sm={2} md={2} lg={2}>
          <img
            src={Images.Affiliation4}
            width="100%"
            height="100%"
            style={{
              boxSizing: "border-box",
            }}
            alt="licensed"
          />
        </Grid>
        <Grid item xs={6} sm={2} md={2} lg={2}>
          <img
            src={Images.Affiliation5}
            width="100%"
            height="100%"
            style={{
              boxSizing: "border-box",
            }}
            alt="suchitra-academy"
          />
        </Grid>
      </Grid>
      <Subscribe />
    </Container>
  );
};

export default Affiliations;
