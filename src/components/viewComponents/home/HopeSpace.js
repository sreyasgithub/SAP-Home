import React from "react";
import { Container, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import GlobalStyles from "../../../assets/styles/GlobalStyles";

import Images from "../../../constants/ImageAssets";

import HopeSpaceStyles from "../../../assets/styles/HopeSpaceStyles";
import ToAndFroRightArrow from "../../globalComponents/ToAndFroRightArrow";
import { useInView } from "react-intersection-observer";
const useStyles = makeStyles(HopeSpaceStyles);

const HopeSpace = () => {
  const classes = useStyles();
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  const HopeSpaces = [
    {
      className: classes.hopeRow1,
      title: "GOOD THERAPHY",
      subTitle: "Getting the Help You Need in tough times",
      description:
        "Mauris molestie nisl imperdiet dui ultricies, sed maximus mauris tempor.",
    },
    {
      className: classes.hopeRow2,
      title: "DEPRESSION",
      subTitle: "Depression: What is it? What to Do About It?",
      description:
        "Fusce magna felis, gravida id cursus vitae, elementum a dui.",
    },
    {
      className: classes.hopeRow3,
      title: "MENTAL HEALTH",
      subTitle: "Senior Mental Health and the Pandemic",
      description:
        "Uspendisse in nunc purus crabitur in arcu sem. Maecenas a elementum lacus.",
    },
  ];

  return (
    <Box ref={ref} style={{ background: "#FFFCE5" }}>
      <Container style={GlobalStyles.section}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={7}>
            <p style={GlobalStyles.heading}>
              Hope <span style={GlobalStyles.headingHighlight}>Space</span>
            </p>
          </Grid>
          <Grid item xs={12} sm={5} className={classes.moreArticlesLinkWrapper}>
            <a href="https://view-more-articles.com" style={GlobalStyles.link}>
              VIEW MORE ARTICLES <ToAndFroRightArrow />
            </a>
          </Grid>
          <Grid item xs={12}>
            <p className={classes.headingText}>
              Interesting and insightful articles for you to read and share
            </p>
          </Grid>
          <Grid
            item
            container
            xs={12}
            sm={12}
            md={5}
            lg={6}
            spacing={3}
            style={{ display: "block" }}
          >
            <Grid item xs={12}>
              <Box className={inView ? classes.hopeImg : null}>
                <img
                  src={Images.HopeSpaceImg}
                  className={classes.img}
                  width="100%"
                  height="100%"
                  alt="hope space"
                />
                <div className={classes.typing}>
                  <p className={"btn-shine "}>HOPE</p>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <p className={classes.question}>
                Friends, family and work. Is Mental Fitness a part of your
                routine?
              </p>
            </Grid>
            <Grid item xs={12}>
              <p className={classes.answer}>
                Uspendisse in nunc purus. Curabitur in arcu sem. Mauris sodales
                dolor est, id pulvinar turpis accumsan semper.
              </p>
            </Grid>
            <Grid item xs={12}>
              <a href="https://read-more.com" style={GlobalStyles.link}>
                READ MORE
              </a>
            </Grid>
          </Grid>
          <Grid item container xs={12} sm={12} md={7} lg={6} spacing={5}>
            {HopeSpaces.map((item) => {
              return (
                <Grid
                  item
                  container
                  xs={10}
                  sm={6}
                  md={12}
                  spacing={4}
                  className={inView ? item.className : null}
                >
                  <Grid item xs={12} md={5}>
                    <img
                      src={Images.HopeSpaceImg}
                      className={classes.img}
                      width="100%"
                      height="100%"
                      alt="hope space"
                    />
                  </Grid>
                  <Grid item container xs={12} md={7} spacing={2}>
                    <Grid item xs={12}>
                      <p className={classes.title}>{item.title}</p>
                    </Grid>
                    <Grid item xs={12}>
                      <p className={classes.subTitle}>{item.subTitle}</p>
                    </Grid>
                    <Grid item xs={12}>
                      <p className={classes.description}>{item.description}</p>
                    </Grid>
                    <Grid item xs={12}>
                      <a href="https://read-more.com" style={GlobalStyles.link}>
                        READ MORE
                      </a>
                    </Grid>
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HopeSpace;
