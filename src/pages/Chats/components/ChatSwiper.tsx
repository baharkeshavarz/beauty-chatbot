import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Typography, useTheme } from '@mui/material';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useRef } from 'react';

const ChatSwiper = () => {
  const theme = useTheme();
  const sliderRef = useRef<any>(null);
  return (
    <Box
      mx="auto"
      bgcolor="green"
      width="100%"
      height="100%"
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Swiper
        ref={sliderRef}
        dir={theme.direction}
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        // breakpoints={{
        //   [theme.breakpoints.values.md]: {
        //     slidesPerView: 4,
        //   },
        // }}
        style={{
          height: 400,
          width: 400,
        }}
        spaceBetween={theme.spacing(2)}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <Typography color="red">Slide 1</Typography>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default ChatSwiper;
