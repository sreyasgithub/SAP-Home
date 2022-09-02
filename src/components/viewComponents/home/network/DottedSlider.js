import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import NetworkStyles from "../../../../assets/styles/NetworkStyles";
import Slider from "react-slick";
import Images from "../../../../constants/ImageAssets";
import { useInView } from "react-intersection-observer";
const useStyles = makeStyles(NetworkStyles);

const DottedSlider = () => {
  const classes = useStyles();
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",

    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const people = [
    {
      image: Images.Women1,
      role: "COUNSELLING PSYCHOLOGIST",
      name: "Rajeshwari Luther",
      services: "Helps with: Depression, Relationships, OCD",
    },
    {
      image: Images.Women2,
      role: "COUNSELLING PSYCHOLOGIST",
      name: "Lalitha Mohan",
      services: "Helps with: Depression, Relationships, OCD",
    },
    {
      image: Images.Women3,
      role: "COUNSELLING PSYCHOLOGIST",
      name: "Nazma",
      services: "Helps with: Depression, Relationships, OCD",
    },
    {
      image: Images.Women4,
      role: "COUNSELLING PSYCHOLOGIST",
      name: "Swathi Reddy",
      services: "Helps with: Depression, Relationships, OCD",
    },
    {
      image: Images.Women5,
      role: "COUNSELLING PSYCHOLOGIST",
      name: "Bhavani Patel",
      services: "Helps with: Depression, Relationships, OCD",
    },
  ];
  return (
    <div ref={ref}>
      <Box className={inView ? classes.sliderWrapper : null}>
        <Slider {...settings} className={classes.sliderAnimation}>
          {people.map((item) => {
            return (
              <div className={classes.sliderContent}>
                <img
                  src={item.image}
                  className={classes.img}
                  alt="role"
                  width="100%"
                  height="100%"
                />
                <div className={classes.details}>
                  <p className={classes.role}>{item.role}</p>
                  <p className={classes.name}>{item.name}</p>
                  <p className={classes.services}>{item.services}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </Box>
    </div>
  );
};

export default DottedSlider;
