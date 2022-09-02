import React from "react";
import { makeStyles } from "@material-ui/core";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import { Box } from "@material-ui/core";
import * as FiIcons from "react-icons/fi";
import FaqStyles from "../../../../assets/styles/FaqStyles";
const useStyles = makeStyles(FaqStyles);

const ExpandMore = () => {
  const classes = useStyles();
  return (
    <Box className={classes.expandIconWrap}>
      <FiIcons.FiPlus />
    </Box>
  );
};

const faqs = [
  {
    panel: "panel1",
    question: "What do you treat?",
    answer:
      "We currently offer only outpatient treatment. However, we do run specialized addiction treatment programs. For more information,",
    link: "click here",
  },
  {
    panel: "panel2",
    question: "How do I take an appointment?",
    answer:
      "We currently offer only outpatient treatment. However, we do run specialized addiction treatment programs. For more information,",
    link: "click here",
  },

  {
    panel: "panel3",
    question: "Do you have an inpatient facility?",
    answer:
      "We currently offer only outpatient treatment. However, we do run specialized addiction treatment programs. For more information,",
    link: "click here",
  },
  {
    panel: "panel4",
    question: "What are your working days?",
    answer:
      "We currently offer only outpatient treatment. However, we do run specialized addiction treatment programs. For more information,",
    link: "click here",
  },
  {
    panel: "panel5",
    question: "What makes you different from other mental health centres?",
    answer:
      "We currently offer only outpatient treatment. However, we do run specialized addiction treatment programs. For more information,",
    link: "click here",
  },
];
export default function QandA() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const classes = useStyles();
  return (
    <div>
      {faqs.map((item) => {
        return (
          <MuiAccordion
            square
            expanded={expanded === item.panel}
            onChange={handleChange(item.panel)}
            classes={{
              root:
                expanded === item.panel
                  ? classes.expandedAccordian
                  : classes.accordian,
            }}
          >
            <MuiAccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
              expandIcon={expanded === item.panel ? null : <ExpandMore />}
              classes={
                expanded === item.panel
                  ? {
                      root: classes.expandedSummary,
                      content: classes.expandedContent,
                    }
                  : {
                      root: classes.summary,
                      content: classes.content,
                    }
              }
            >
              <p
                className={
                  expanded === item.panel
                    ? classes.activeQuestion
                    : classes.question
                }
              >
                {item.question}
              </p>
            </MuiAccordionSummary>
            <MuiAccordionDetails
              classes={{
                root:
                  expanded === item.panel
                    ? classes.expandedDetails
                    : classes.details,
              }}
            >
              <p className={classes.answer}>
                {item.answer}

                <a href="https://read-more.com" className={classes.link}>
                  {item.link}
                </a>
              </p>
            </MuiAccordionDetails>
          </MuiAccordion>
        );
      })}
    </div>
  );
}
