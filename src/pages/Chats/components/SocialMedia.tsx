import { Box, Grid, Stack, styled, Link, Typography } from '@mui/material';
import {
  SOCIAL_INSTAGRAM_IMAGE,
  SOCIAL_INSTAGRAM_LINK,
  SOCIAL_TELEGRAM_IMAGE,
  SOCIAL_TELEGRAM_LINK,
  SOCIAL_WHATSAPP_IMAGE,
  SOCIAL_WHATSAPP_LINK,
} from 'src/configs/config';
import { useTranslation } from 'react-i18next';
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
  const fontVariant = isMobile ? 'body2' : 'body2';
  const { t } = useTranslation();
  const imgBoxSize = { xs: '50px', sm: '60px', md: '70px' };

  return (
    <Stack display="flex" justifyContent="center" alignItems="center" pt={20}>
      <Grid
        container
        spacing={1}
        maxWidth="sm"
        mx="auto"
        gap={3}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {socialMediaItems.map(social => (
          <Grid item xs={1} key={social.title}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              borderRadius={4}
              boxShadow={1}
              height={imgBoxSize}
              width={imgBoxSize}
              sx={{
                background: 'rgba(255, 255, 255, 0.5)',
              }}
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
      <Typography
        variant={fontVariant}
        textAlign="center"
        lineHeight={2}
        color="grey[100]"
        py={2}
      >
        {t('pages:chats.textHere')}
      </Typography>
    </Stack>
  );
};

export default SocialMedia;
