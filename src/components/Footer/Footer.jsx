import React from "react";
import AccordionForFooter from "../AccordionForFooter/AccordionForFooter";
import { accordionData } from "../../config/helper-config";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.customAccordionWrapper}>
      <h1 className={styles.accordionHeader}>FAQS</h1>

      <div className={styles.accordionWrapper}>
        {accordionData?.length ? (
          accordionData.map((each, index) => {
            return <AccordionForFooter key={index} data={each} />;
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Footer;
