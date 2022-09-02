import React from "react";
import { Container, Grid, Box } from "@material-ui/core";

import GlobalStyles from "../../../assets/styles/GlobalStyles";

import { makeStyles } from "@material-ui/styles";
import ServicesStyles from "../../../assets/styles/ServicesStyles";
import Services from "../../../utils/arrays/Services";
import ToAndFroRightArrow from "../../globalComponents/ToAndFroRightArrow";
import { useInView } from "react-intersection-observer";
const useStyles = makeStyles(ServicesStyles);
const Service = () => {
  const classes = useStyles();

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <div ref={ref}>
      <Container style={GlobalStyles.section}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} md={4}>
            <Box className={classes.headingWrapper}>
              <p style={GlobalStyles.heading}>
                Our{" "}
                <span style={GlobalStyles.headingHighlight}>inclusive </span>
              </p>
              <p style={GlobalStyles.heading}>services</p>

              <Box className={classes.linkWrapper}>
                <a href="https://know-more.com" style={GlobalStyles.link}>
                  KNOW MORE{" "}
                  <span style={{ marginTop: "3px" }}>
                    <ToAndFroRightArrow />
                  </span>
                </a>
              </Box>
            </Box>
          </Grid>
          {Services.map((item) => {
            return (
              <Grid item xs={12} sm={6} md={4}>
                <Box
                  className={inView ? classes.serviceCard : null}
                  style={{ background: `url(${item.serviceImg})` }}
                >
                  <Box className={classes.serviceDescriptionWrapper}>
                    <h3 className={classes.cardHeading}>{item.heading}</h3>
                    <p className={classes.cardDescription}>
                      {item.description}
                    </p>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default Service;
