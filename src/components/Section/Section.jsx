import React, { useState } from "react";
import styles from "./Section.module.css";
import { Card, CircularProgress } from "@mui/material";

const Section = ({ data, title }) => {
  const [carouselToggle, setCarouselToggle] = useState(true);

  const handleToggle = () => {
    setCarouselToggle(!carouselToggle);
    console.log(data);
  };

  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {carouselToggle ? "Show All" : "Collapse All"}
        </h4>
      </div>
      {!data.length ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardWrapper}>
          <div className={styles.wrapper}>
            {data?.map((item) => (
              <Card key={item.id} data={item} type="album" />
            ))}
          </div>
          {/* {!carouselToggle ? (
            
          ) : null} */}
        </div>
      )}
    </div>
  );
};

export default Section;
