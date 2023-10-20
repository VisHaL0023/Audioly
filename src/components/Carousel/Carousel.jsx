import React, { useEffect } from "react";
import styles from "./Carousel.module.css";
import Swiper from "swiper";
import { useSwiper } from "swiper/react";

const Carousel = ({ data }) => {
  const Controls = ({ data }) => {
    const swiper = useSwiper();
    console.log(swiper);
    useEffect(() => {
      swiper.slideTo(0);
    }, [data]);
    return <></>;
  };

  return (
    <div className={styles.wrapper}>
      <Swiper
        style={{ padding: "0px 20px" }}
        initialSlide={0}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
      >
        <Controls data={data} />
      </Swiper>
    </div>
  );
};

export default Carousel;
