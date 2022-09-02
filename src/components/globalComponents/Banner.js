import React from "react";
import { Container, Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import GlobalStyles from "../../assets/styles/GlobalStyles";
import BannerStyles from "../../assets/styles/BannerStyles";
import CustomButtom from "./CustomButtom";
const useStyles = makeStyles(BannerStyles);
const Banner = () => {
  const classes = useStyles();
  return (
    <Box className={classes.bannerContainer}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box style={{ textAlign: "center" }}>
              <p style={GlobalStyles.heading}>
                Counselling, therapy & mental wellness
              </p>
              <p style={GlobalStyles.heading}>
                by
                <span style={GlobalStyles.headingHighlight}>
                  {" "}
                  qualified professionals
                </span>
              </p>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box className={classes.banner}>
        <Container>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={10} sm={8} md={7} lg={8}>
              <p className={classes.text}>
                We are a network of qualified and experienced mental health
                professionals committed to providing affordable, comprehensive
                and effective mental health care.
              </p>
            </Grid>
            <Grid item xs={12}>
              <CustomButtom btnLabel={"Book an appointment"} align="center" />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Banner;
