import React from "react";
import { Container, Grid, Box } from "@material-ui/core";
import Colors from "../../constants/Colors";
import GlobalStyles from "../../assets/styles/GlobalStyles";
import Images from "../../constants/ImageAssets";
import { makeStyles } from "@material-ui/styles";
import FooterStyles from "../../assets/styles/Footerstyles";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
const useStyles = makeStyles(FooterStyles);

const Footer = () => {
  const classes = useStyles();
  return (
    <Box style={{ background: Colors.DARK_GREY, paddingTop: "60px" }}>
      <Container style={GlobalStyles.section}>
        <Grid container spacing={5} justifyContent="center">
          <Grid item container xs={11} sm={6} md={3} lg={4} spacing={1}>
            <Grid item xs={11} className={classes.center}>
              <div className={classes.callUs}>
                <div className={classes.phoneIcon}>
                  <FaIcons.FaPhoneAlt size={18} />
                </div>
                <p className={classes.boldText}>Call Us Today</p>
              </div>
            </Grid>
            <Grid item xs={11} className={classes.center}>
              <p className={classes.boldText}>+91 40 48591231</p>
              <p className={classes.boldText}>+91 40 48591231</p>
              <p className={classes.boldText}>+91 40 48591231</p>
            </Grid>
            <Grid item xs={11} className={classes.center}>
              <p className={classes.timings}>(Official Hours 9 AM – 7 PM)</p>
            </Grid>
            <Grid item xs={11} className={classes.center}>
              <p className={classes.email}>frontoffice@hopetrustindia.com</p>
            </Grid>
            <Grid item xs={11} className={classes.center}>
              <ul className={classes.social}>
                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                    className={classes.socialIcon}
                  >
                    <FaIcons.FaInstagramSquare />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    className={classes.socialIcon}
                  >
                    <AiIcons.AiFillFacebook />
                  </a>
                </li>
                <li>
                  <a
                    href="https://in.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    className={classes.socialIcon}
                  >
                    <AiIcons.AiFillLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noreferrer"
                    className={classes.socialIcon}
                    style={{ marginRight: 0 }}
                  >
                    <FaIcons.FaYoutubeSquare />
                  </a>
                </li>
              </ul>
            </Grid>
          </Grid>
          <Grid item container xs={11} sm={6} md={3} lg={2} spacing={1}>
            <Grid item xs={11}>
              <a href="https://about-us.com" className={classes.link}>
                About Us
              </a>
            </Grid>
            <Grid item xs={11}>
              <a href="https://service.com" className={classes.link}>
                Services{" "}
              </a>
            </Grid>
            <Grid item xs={11}>
              <a href="https://traning.com" className={classes.link}>
                Training
              </a>
            </Grid>
            <Grid item xs={11}>
              <a href="https://blog.com" className={classes.link}>
                Blog{" "}
              </a>
            </Grid>
            <Grid item xs={11}>
              <a href="https://faq.com" className={classes.link}>
                FAQ's
              </a>
            </Grid>
            <Grid item xs={11}>
              <a href="https://contact-us.com" className={classes.link}>
                Contact Us{" "}
              </a>
            </Grid>
          </Grid>
          <Grid item container xs={11} sm={6} md={3} lg={3} spacing={1}>
            <Grid item xs={11}>
              <a href="https://news-and-media.com" className={classes.link}>
                News & Media
              </a>
            </Grid>
            <Grid item xs={11}>
              <a href="https://testimonials.com" className={classes.link}>
                Testimonials
              </a>
            </Grid>
            <Grid item xs={11}>
              <a href="https://sitemap.com" className={classes.link}>
                Sitemap
              </a>
            </Grid>
            <Grid item xs={11}>
              <a
                href="https://terms-and-conditions.com"
                className={classes.link}
              >
                Terms & Conditions
              </a>
            </Grid>
            <Grid item xs={11}>
              <a href="https://privacy-policy.com" className={classes.link}>
                Privacy Policy
              </a>
            </Grid>
            <Grid item xs={11}>
              <a href="https://cancelation-policy.com" className={classes.link}>
                Cancellation Policy
              </a>
            </Grid>
          </Grid>
          <Grid item container xs={11} sm={6} md={3} lg={3} spacing={1}>
            <Grid item xs={11} className={classes.center}>
              <p className={classes.licence}>
                LICENSED UNDER MENTAL HEALTHCARE ACT 2007
              </p>
            </Grid>
            <Grid item xs={11} className={classes.center}>
              <img src={Images.Affiliation4} alt="footer-logo" />
            </Grid>

            <Grid item xs={11} className={classes.center}>
              <p className={classes.copyRight}>Copyright © 2022 Hope Trust</p>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
