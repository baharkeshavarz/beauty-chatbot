import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
const error500 = '/assets/images/maintenance/Error500.png';

const AnyErrorPage = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '100vh' }}
      >
        <Grid item xs={12}>
          <Box sx={{ width: { xs: 350, sm: 396 } }}>
            <img
              src={error500}
              alt="mantis"
              style={{ height: '100%', width: '100%' }}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Stack justifyContent="center" alignItems="center">
            <Typography align="center" variant={matchDownSM ? 'h2' : 'h1'}>
              !An Error Occurred
            </Typography>
            <Typography
              color="textSecondary"
              variant="body2"
              align="center"
              sx={{ width: { xs: '73%', sm: '70%' }, mt: 1 }}
            >
              Something went wrong. we are fixing the problem. Please try later
            </Typography>
            <Button
              component={Link}
              to={'/'}
              variant="contained"
              sx={{ textTransform: 'none', mt: 4 }}
            >
              Go to homepage
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default AnyErrorPage;
