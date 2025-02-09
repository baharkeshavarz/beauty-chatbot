import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, styled, useTheme } from '@mui/material';

import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';
import { useRef } from 'react';
import {
  BG_IMAGE1,
  BG_IMAGE2,
  BG_IMAGE3,
  BG_IMAGE4,
  DEFAULT_SLIDER_INTERVAL,
} from 'src/configs/config';

const bgImages = [BG_IMAGE1, BG_IMAGE2, BG_IMAGE3, BG_IMAGE4];

const SwiperStyled = styled(Swiper)(({ theme }) => ({
  '& .swiper-pagination': {
    '& .swiper-pagination-bullet': {
      width: '1.3rem',
      height: '1.3rem',
      cursor: 'pointer',
      background: theme.palette.primary.main,
    },
    '& .swiper-pagination-bullet-active': {
      background: theme.palette.primary.dark,
      cursor: 'pointer',
    },
  },
}));

const ChatSwiper = () => {
  const theme = useTheme();
  const sliderRef = useRef<any>(null);

  return (
    <Box
      mx="auto"
      width="100%"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <SwiperStyled
        ref={sliderRef}
        dir={theme.direction}
        direction="vertical"
        pagination={{
          clickable: true,
        }}
        style={{
          width: '100%',
          height: '100vh',
        }}
        spaceBetween={theme.spacing(2)}
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: DEFAULT_SLIDER_INTERVAL,
          disableOnInteraction: false,
        }}
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
      </SwiperStyled>
    </Box>
  );
};

export default ChatSwiper;
