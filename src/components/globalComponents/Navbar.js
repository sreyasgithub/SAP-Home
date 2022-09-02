import React from "react";
import { Container, Grid, Box } from "@material-ui/core";
import Images from "../../constants/ImageAssets";
import { makeStyles } from "@material-ui/styles";
import navbarStyles from "../../assets/styles/NavBarStyles";
const useStyles = makeStyles(navbarStyles);
const Navbar = () => {
  const classes = useStyles();

  return (
    <Box className={classes.nav}>
      <Container>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item container spacing={1} xs={12} sm={5}>
            <Grid item xs={4} sm={4} md={4} className={classes.navItem}>
              <Box className={classes.navLinkWrapper}>
                <a href="https://about-us.com" className={classes.navLink}>
                  About Us
                </a>
              </Box>
            </Grid>
            <Grid item xs={4} sm={4} md={4} className={classes.navItem}>
              <Box className={classes.navLinkWrapper}>
                <a href="https://services.com" className={classes.navLink}>
                  Services
                </a>
              </Box>
            </Grid>
            <Grid item xs={4} sm={4} md={4} className={classes.navItem}>
              <Box>
                <a href="https://trending.com" className={classes.navLink}>
                  Training
                </a>
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={4} sm={2} className={classes.navItem}>
            <Box>
              <img src={Images.Logo} alt="logo" width="90%" height="100%" />
            </Box>
          </Grid>
          <Grid
            item
            container
            xs={12}
            sm={5}
            spacing={1}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={4} sm={4} md={4} className={classes.navItem}>
              <Box className={classes.navLinkWrapper}>
                <a href="https://blog.com" className={classes.navLink}>
                  Blog
                </a>
              </Box>
            </Grid>
            <Grid item xs={4} sm={4} md={4} className={classes.navItem}>
              <Box className={classes.navLinkWrapper}>
                <a href="https://faqs.com" className={classes.navLink}>
                  FAQs
                </a>
              </Box>
            </Grid>
            <Grid item xs={4} sm={4} md={4} className={classes.navItem}>
              <Box>
                <a href="https://contact-us.com" className={classes.navLink}>
                  Contact Us
                </a>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Navbar;
