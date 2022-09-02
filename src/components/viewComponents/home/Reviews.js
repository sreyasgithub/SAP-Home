import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import { Container, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import GlobalStyles from "../../../assets/styles/GlobalStyles";
import SercicesStyles from "../../../assets/styles/ServicesStyles";
import Colors from "../../../constants/Colors";
import * as FaIcons from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import UpDownDigitsText from "../../globalComponents/UpDownDigitsText";
const useStyles = makeStyles(SercicesStyles);
const Reviews = () => {
  const classes = useStyles();
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  const content = [
    {
      review:
        "Hope Trust is a very committed organization where all the technical/ admin staff are very courteous and professional. We are extremely satisfied in the treatment provided to our son.",
      reviewBy: "Dr Ravi K- New Delhi",
    },
    {
      review:
        "Hope Trust is a very committed organization where all the technical/ admin staff are very courteous and professional. We are extremely satisfied in the treatment provided to our son.",
      reviewBy: "Dr Ravi K- New Delhi",
    },
    {
      review:
        "Hope Trust is a very committed organization where all the technical/ admin staff are very courteous and professional. We are extremely satisfied in the treatment provided to our son.",
      reviewBy: "Dr Ravi K- New Delhi",
    },
  ];

  return (
    <Container style={GlobalStyles.section} className={classes.reviews}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={12} md={5}>
          <Box className={classes.reviewsLeftWrapper}>
            <p style={GlobalStyles.heading}>
              More than {/* <span className={classes.reviewsCount}> */}
              <UpDownDigitsText copy="12,000" role="heading" />
              {/* </span> */}
            </p>
            <p style={GlobalStyles.heading}>
              <span className={classes.fiveStar}>5 Star</span> reviews from our
              clients
            </p>
            <ul className={classes.rating} ref={ref}>
              <li className={inView ? classes.star : null}>
                <FaIcons.FaStar />
              </li>
              <li className={inView ? classes.star : null}>
                <FaIcons.FaStar />
              </li>
              <li className={inView ? classes.star : null}>
                <FaIcons.FaStar />
              </li>
              <li className={inView ? classes.star : null}>
                <FaIcons.FaStar />
              </li>
              <li className={inView ? classes.star : null}>
                <FaIcons.FaStar />
              </li>
            </ul>
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <Slider autoplay={6000}>
            {content.map((item, index) => (
              <Box key={index}>
                <Box className={classes.reviewSlide}>
                  <Box style={{ padding: "30px 0px", position: "relative" }}>
                    <Box className={classes.quoteLeftIcon}>
                      <FaIcons.FaQuoteLeft
                        size={40}
                        color={Colors.DARK_ORANGE}
                      />
                    </Box>
                    <i className={classes.review}>{item.review}</i>
                  </Box>
                  <p className={classes.reviewBy}>{item.reviewBy}</p>
                </Box>
              </Box>
            ))}
          </Slider>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Reviews;
