import { Link } from 'react-router-dom';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { DEFAULT_PATH } from 'src/configs/config';

const construction = '/assets/images/maintenance/under-construction.svg';

function UnderConstruction() {
  return (
    <Grid
      container
      spacing={4}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', py: 2 }}
    >
      <Grid item xs={12}>
        <Box sx={{ width: { xs: 300, sm: 480 } }}>
          <img
            src={construction}
            alt="mantis"
            style={{ width: '100%', height: 'auto' }}
          />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Stack spacing={2} justifyContent="center" alignItems="center">
          <Typography align="center" variant="h1">
            Under Construction
          </Typography>
          <Typography
            color="textSecondary"
            align="center"
            sx={{ width: '85%' }}
          >
            Hey! Please check out this site later. We are doing some maintenance
            on it right now.
          </Typography>
          <Button component={Link} to={DEFAULT_PATH} variant="contained">
            Back To Home
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default UnderConstruction;
