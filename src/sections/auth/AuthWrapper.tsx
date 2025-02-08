import { ReactNode } from 'react';

import { Box, Grid, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import AuthBackground from 'src/components/AuthBackground';
import LanguageSelector from 'src/components/LanguageSelector/LanguageSelector';
import AuthFooter from 'src/components/cards/AuthFooter';
import Logo from 'src/components/logo';
import AuthCard from './AuthCard';
import { DEFAULT_PROJECT_NAME } from 'src/configs/config';
interface Props {
  children?: ReactNode;
}

const AuthWrapper = ({ children }: Props) => {
  const { t } = useTranslation();
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <AuthBackground />
      <Grid
        container
        direction="column"
        justifyContent="flex-end"
        sx={{
          minHeight: '100vh',
        }}
      >
        <Grid item xs={12} sx={{ ml: 3, mt: 3 }}>
          <Logo />
        </Grid>
        <Grid item xs={12}>
          <Grid
            item
            xs={12}
            container
            justifyContent="center"
            alignItems="center"
            sx={{
              minHeight: {
                xs: 'calc(100vh - 210px)',
                sm: 'calc(100vh - 134px)',
                md: 'calc(100vh - 112px)',
              },
            }}
          >
            <Grid item>
              <AuthCard>
                <Box>
                  <LanguageSelector />
                </Box>
                <Stack spacing={1}>
                  <Typography variant="h5" textAlign="center">
                    {DEFAULT_PROJECT_NAME}
                  </Typography>
                </Stack>
                {children}
              </AuthCard>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
          <AuthFooter />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AuthWrapper;
