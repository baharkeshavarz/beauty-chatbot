// material-ui
// eslint-disable-next-line
import * as Theme from '@mui/material/styles';

// project import
import { CustomShadowProps } from 'src/types/theme';

declare module '@mui/material/styles' {
  interface Theme {
    customShadows: CustomShadowProps;
  }
}
