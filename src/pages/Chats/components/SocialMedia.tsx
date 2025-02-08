import { Box, Grid, Stack, styled, Link } from '@mui/material';
import {
  SOCIAL_INSTAGRAM_IMAGE,
  SOCIAL_INSTAGRAM_LINK,
  SOCIAL_TELEGRAM_IMAGE,
  SOCIAL_TELEGRAM_LINK,
  SOCIAL_WHATSAPP_IMAGE,
  SOCIAL_WHATSAPP_LINK,
} from 'src/configs/config';
import { useAppContext } from 'src/hooks/useAppContext';

const ImageWrapper = styled(Box)({
  cursor: 'pointer',
  transition: 'transform 0.7s ease-in-out',
  '&:hover': {
    transform: 'rotate(360deg)',
  },
});

const socialMediaItems = [
  {
    title: 'Instagram',
    logo: SOCIAL_INSTAGRAM_IMAGE,
    linkTo: SOCIAL_INSTAGRAM_LINK,
  },
  {
    title: 'Telegram',
    logo: SOCIAL_TELEGRAM_IMAGE,
    linkTo: SOCIAL_TELEGRAM_LINK,
  },
  {
    title: 'Whatsapp',
    logo: SOCIAL_WHATSAPP_IMAGE,
    linkTo: SOCIAL_WHATSAPP_LINK,
  },
];

const SocialMedia = () => {
  const { isMobile } = useAppContext();
  const imgBoxSize = { xs: '90px', sm: '90px', md: '110px' };

  return (
    <Stack
      pt={isMobile ? 35 : 50}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Grid container spacing={2} maxWidth="sm" mx="auto">
        {socialMediaItems.map(social => (
          <Grid item xs={4} sm={4} md={4} key={social.title}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              borderRadius={4}
              bgcolor="common.white"
              boxShadow={2}
              height={imgBoxSize}
              width={imgBoxSize}
            >
              <ImageWrapper>
                <Link
                  href={social.linkTo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={social.logo}
                    alt={social.title}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                    }}
                  />
                </Link>
              </ImageWrapper>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default SocialMedia;
