import React from "react";

import Colors from "../../constants/Colors";

const Text22px = ({ text, color, fontWeight, textAlign }) => {
  const styles = {
    text: {
      fontSize: "22px",
      color: color ? color : Colors.BLACK,
      fontFamily: "Raleway-Medium",
      textAlign: textAlign,
      fontWeight: "bold",
    },
  };
  return (
    <>
      <h3 style={styles.text}>{text}</h3>
    </>
  );
};
const Text20px = ({ text, color, fontWeight, textAlign }) => {
  const styles = {
    text: {
      fontSize: "20px",
      color: Colors.DARK_GREY,
      fontFamily: "Raleway-Medium",
      textAlign: textAlign,
      fontWeight: fontWeight,
    },
  };
  return (
    <>
      <h3 style={styles.text}>{text}</h3>
    </>
  );
};

const Text18px = ({ text, color, fontWeight, textAlign }) => {
  const styles = {
    text: {
      fontSize: "18px",
      color: color ? color : Colors.BLAC,
      fontFamily: "Raleway-Medium",
      textAlign: textAlign,
      fontWeight: fontWeight,
    },
  };
  return (
    <>
      <h3 style={styles.text}>{text}</h3>
    </>
  );
};
const Capitalise = ({ text, color, fontWeight, fontSize, textAlign }) => {
  const styles = {
    text: {
      fontSize: fontSize ? fontSize : "14px",
      color: color ? color : Colors.BLACK,
      fontFamily: "Raleway-Medium",
      textAlign: textAlign,

      fontWeight: fontWeight,
      textTransform: "uppercase",
    },
  };
  return (
    <>
      <h3 style={styles.text}>{text}</h3>
    </>
  );
};
const Label = ({ text, color }) => {
  const styles = {
    label: {
      fontFamily: "Raleway-Bold",
      fontSize: "18px",
      color: color ? color : Colors.BLACK,
      marginBottom: 5,
    },
  };
  return (
    <>
      <p style={styles.label}>{text}</p>
    </>
  );
};
const Span = ({ text, fontFamily, color, fontSize, textAlign, fontWeight }) => {
  const styles = {
    span: {
      fontFamily: fontFamily,
      fontSize: fontSize,
      color: color ? color : Colors.BLACK,
      textAlign: textAlign,
      fontWeight: fontWeight,
    },
  };
  return (
    <>
      <span style={styles.span}>{text}</span>
    </>
  );
};

const Paragraph = ({ text, color, marginBottom, textAlign }) => {
  const styles = {
    para: {
      fontSize: "16px",
      color: Colors.DARK_GREY,
    },
  };
  return (
    <>
      <p style={styles.para}>{text}</p>
    </>
  );
};

export { Text18px, Text20px, Text22px, Capitalise, Label, Paragraph, Span };
