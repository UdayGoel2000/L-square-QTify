import React, { useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import styles from "./Carousel.module.css";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";

const Controls = ({ data }) => {
  const swiper = useSwiper();
  useEffect(() => {
    swiper.slideTo(0, 50000);
  }, [data]);
  return <></>;
};

const Carousel = ({ data, renderCardComponent }) => {
  return (
    <div className={styles.wrapper}>
      <Swiper
        initialSlide={0}
        modules={{ Navigation }}
        slidesPerView={"auto"}
        spaceBetween={50}
        allowTouchMove
      >
        <Controls data={data} />
        <CarouselLeftNavigation />
        <CarouselRightNavigation />
        {data.map((item) => (
          <SwiperSlide key={item.id}>{renderCardComponent(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
