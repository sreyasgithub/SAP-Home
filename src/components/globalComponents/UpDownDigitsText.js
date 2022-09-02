import React from "react";
import { useInView } from "react-intersection-observer";
import { makeStyles } from "@material-ui/core";
const Styles = () => ({
  digit: {
    fontWeight: 600,
    color: "rgb(8, 2, 1)",
    position: "relative",
    bottom: "0",
    opacity: "0",
    animation: "move-text 0.75s forwards",
    animationDuration: "2s",
    animationDelay: "5s",
    animationIterationCount: 2,
    animationDirection: "alternate",
  },
});
const useStyles = makeStyles(Styles);
const UpDownDigitsText = (props) => {
  const { copy, role } = props;
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const classes = useStyles();
  return (
    <span aria-label={copy} role={role} ref={ref}>
      {copy?.split("").map(function (char, index) {
        let style = { "animation-delay": 0.5 + index / 10 + "s" };
        return (
          <span
            aria-hidden="true"
            key={index}
            className={inView ? classes.digit : null}
            style={style}
          >
            {char}
          </span>
        );
      })}
    </span>
  );
};

export default UpDownDigitsText;
