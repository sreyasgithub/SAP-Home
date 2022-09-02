import React from "react";
import { Container, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Images from "../../../constants/ImageAssets";
import HowItWorkStyles from "../../../assets/styles/HowItWorksStyles";
import GlobalStyles from "../../../assets/styles/GlobalStyles";
import { useInView } from "react-intersection-observer";
const useStyles = makeStyles(HowItWorkStyles);
const HowItWorks = () => {
  const classes = useStyles();
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  console.log("entry", entry);
  return (
    <div ref={ref} style={{ paddingBottom: "60px" }}>
      <Container style={GlobalStyles.section}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <div style={{ textAlign: "center" }}>
              <p style={GlobalStyles.heading}>
                How it <span style={GlobalStyles.headingHighlight}>works</span>
              </p>
            </div>
          </Grid>

          <Grid item xs={12}>
            <p className={classes.subHeading}>
              You can get help in 3 simple steps!
            </p>
          </Grid>
          <Grid item xs={12} sm={3} md={2}>
            <Box className={inView ? classes.stepWrapper1 : null}>
              <img
                src={Images.StepsIcon}
                alt="book"
                width="100px"
                height="100px"
              />
              <p className={classes.label}>Book</p>
              <p className={classes.text}>
                Book an appointment with a therapist
              </p>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={1}
            md={2}
            className={classes.dashedLineContainer}
          >
            <Box className={inView ? classes.dashedLine1 : null}></Box>
          </Grid>
          <Grid item xs={12} sm={3} md={2}>
            <Box className={inView ? classes.stepWrapper2 : null}>
              <img
                src={Images.StepsIcon}
                alt="confirm"
                width="100px"
                height="100px"
              />
              <p className={classes.label}>Confirm</p>
              <p className={classes.text}>
                Confirm your slot & complete the payment
              </p>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={1}
            md={2}
            className={classes.dashedLineContainer}
          >
            <Box className={inView ? classes.dashedLine2 : null}></Box>
          </Grid>
          <Grid item xs={12} sm={3} md={2}>
            <Box className={inView ? classes.stepWrapper3 : null}>
              <img
                src={Images.StepsIcon}
                alt="happier-you"
                width="100px"
                height="100px"
              />
              <p className={classes.label}>Happier you!</p>
              <p className={classes.text}>
                You are now on your way to a happier you.
              </p>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HowItWorks;
