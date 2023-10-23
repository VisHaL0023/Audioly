import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import styles from "./AccordionForFooter.module.css";

export default function AccordionForFooter({ data }) {
  return (
    <div className={styles.accordionWrapper}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{data.question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{data.answer}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
