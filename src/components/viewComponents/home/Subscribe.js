import React from "react";
import { Grid, Box, TextField, Button } from "@material-ui/core";
import GlobalStyles from "../../../assets/styles/GlobalStyles";
import { makeStyles } from "@material-ui/styles";
import SubscribeStyles from "../../../assets/styles/SubscribeStyles";
import { useInView } from "react-intersection-observer";
const useStyles = makeStyles(SubscribeStyles);
const Subscribe = () => {
  const classes = useStyles();
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <div ref={ref}>
      <Box className={inView ? classes.subscribtionWrapper : null}>
        <Grid container spacing={5} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={12} md={4}>
            <Box style={{ wordBreak: "break-word" }}>
              <p style={GlobalStyles.heading}>Sign up to our</p>
              <p style={GlobalStyles.heading}>
                <span style={GlobalStyles.headingHighlight}>newsletter</span>
              </p>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            <Box className={classes.inputBtnWrapper}>
              <TextField
                classes={{ root: classes.input }}
                id="standard-error-helper-text"
                placeholder="Email Address*"
              />

              <Button
                variant="outlined"
                color="secondary"
                classes={{ root: classes.button }}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Subscribe;
