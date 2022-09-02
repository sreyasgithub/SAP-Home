import React from "react";
import { Container, Grid, Box } from "@material-ui/core";
import GlobalStyles from "../../../../assets/styles/GlobalStyles";
import { makeStyles } from "@material-ui/core";

import * as FaIcons from "react-icons/fa";
import FaqStyles from "../../../../assets/styles/FaqStyles";
import CustomButtom from "../../../globalComponents/CustomButtom";
import QandA from "./QandA";

const useStyles = makeStyles(FaqStyles);

const FAQ = () => {
  const classes = useStyles();

  return (
    <div>
      <Container style={GlobalStyles.section}>
        <Grid container spacing={5}>
          <Grid
            item
            container
            xs={12}
            sm={12}
            md={4}
            spacing={3}
            style={{ display: "block" }}
          >
            <Grid item xs={12}>
              <p style={GlobalStyles.heading}>Frequently </p>
              <p style={GlobalStyles.heading}>
                asked{" "}
                <span style={GlobalStyles.headingHighlight}>questions</span>
              </p>
            </Grid>
            <Grid item xs={12}>
              <p className={classes.statement}>
                We are here to help you answer any question you have!
              </p>
            </Grid>
            <Grid item xs={12}>
              <CustomButtom btnLabel={"View All FAQs"} />
            </Grid>
            <Grid item xs={12}>
              <Box className={classes.contactWrapper}>
                <p className={classes.callUs}> GOT QUESTIONS? CALL US ON</p>
                <div className={classes.mobile}>
                  <div className={classes.phoneIcon}>
                    <FaIcons.FaPhoneAlt size={28} />
                  </div>
                  <p> 9876543210</p>
                </div>
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            <QandA />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default FAQ;
