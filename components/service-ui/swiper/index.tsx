import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

type Props = {
  data: any[];
  isImg1: boolean;
};

export default function SwiperContent({ data, isImg1 }: Props) {
  const [swiper, setSwiper] = useState(null);

  const setSwiperRef = (swiperInstance: any) => {
    setSwiper(swiperInstance);
  };

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        // spaceBetween={1}
        rewind={true}
        loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
          },
          993: {
            slidesPerView: 3,
          },
        }}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="products__swiper"
      >
        {data.map((item, i) => (
          <SwiperSlide style={{ height: !isImg1 ? "600px" : "300px" }} key={i}>
            {isImg1 ? (
              <>
                <img
                  alt="img"
                  src={item.img}
                  style={{ width: "100%", height: "250px", objectFit: "cover" }}
                />
                <Typography variant="h6">{item.title}</Typography>
              </>
            ) : (
              <Link href={item.link}>
                <img
                  src={item.img}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "1rem",
                    objectFit: "contain",
                  }}
                />
              </Link>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
