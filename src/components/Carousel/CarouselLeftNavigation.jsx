import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import styles from "./Carousel.module.css";
import { ReactComponent as LeftArrow } from "../../assets/LeftArrow.svg";
import "swiper/css";

const CarouselLeftNavigation = () => {
  const swiper = useSwiper();
  const [isBegginning, setIsBegginning] = useState(swiper.isBeginning);
  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsBegginning(swiper.isBeginning);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={styles.leftNavigation}>
      {!isBegginning && <LeftArrow onClick={() => swiper.slidePrev()} />}
    </div>
  );
};

export default CarouselLeftNavigation;
