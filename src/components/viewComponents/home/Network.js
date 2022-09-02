import React from "react";
import { Container, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import GlobalStyles from "../../../assets/styles/GlobalStyles";
import NetworkStyles from "../../../assets/styles/NetworkStyles";
import Images from "../../../constants/ImageAssets";
import DottedSlider from "./network/DottedSlider";
import CustomButtom from "../../globalComponents/CustomButtom";
const useStyles = makeStyles(NetworkStyles);

const Network = () => {
  const classes = useStyles();
  return (
    <Container style={GlobalStyles.section}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={10} sm={8} md={4}>
          <DottedSlider />
        </Grid>
        {/* <Grid item xs={12} sm={1} md={1}></Grid> */}
        <Grid
          item
          container
          xs={10}
          sm={8}
          md={5}
          spacing={5}
          className={classes.rightGrid}
        >
          <Grid item xs={12}>
            <div>
              <p style={GlobalStyles.heading}>Meet network of</p>
              <p style={GlobalStyles.heading}>
                <span style={GlobalStyles.headingHighlight}>
                  qualified therapists
                </span>
              </p>
            </div>
          </Grid>
          <Grid item xs={12}>
            <p className={classes.description}>
              A team of qualified, trained and experienced professionals
              committed to serving you. Book your appointment today!
            </p>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item xs={12}>
              <p className={classes.options}>OPTIONS TO MEET</p>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4} xl={3}>
              <Box className={classes.optionWrapper}>
                <Box className={classes.optionIconWrapper}>
                  <img
                    src={Images.VoiceChat}
                    className={classes.icon}
                    alt="voice-chat"
                    width="24x"
                    height="24x"
                  />
                </Box>
                <p className={classes.option}>Video</p>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={4}>
              <Box className={classes.optionWrapper}>
                <Box className={classes.optionIconWrapper}>
                  <img
                    src={Images.Users}
                    className={classes.icon}
                    alt="users"
                    width="24x"
                    height="24x"
                  />
                </Box>
                <p className={classes.option}>In-person</p>
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <CustomButtom btnLabel={"View All Therapists"} />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Network;
