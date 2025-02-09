import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, useTheme } from '@mui/material';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useRef } from 'react';
import { BG_IMAGE1, BG_IMAGE2, BG_IMAGE3, BG_IMAGE4 } from 'src/configs/config';

const bgImages = [BG_IMAGE1, BG_IMAGE2, BG_IMAGE3, BG_IMAGE4];

const ChatSwiper = () => {
  const theme = useTheme();
  const sliderRef = useRef<any>(null);
  return (
    <Box
      mx="auto"
      width="100%"
      height="100vh"
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
        style={{
          width: '100%',
          height: '100vh',
        }}
        spaceBetween={theme.spacing(2)}
        modules={[Pagination]}
        autoplay={true}
      >
        {bgImages.map((bgImage, index) => (
          <SwiperSlide>
            <img
              src={bgImage}
              alt="slide"
              style={{ width: '100%', height: '100%', objectFit: 'fill' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ChatSwiper;
