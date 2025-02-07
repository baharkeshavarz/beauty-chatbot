import { Box, Typography } from '@mui/material';
import { SxProps, Theme } from '@mui/system';
import { FC, ReactNode } from 'react';

interface FieldsetProps {
  title?: ReactNode;
  color?: string;
  titleSize?: string;
  borderWidth?: number;
  borderRadius?: number;
  children: ReactNode;
  sx?: SxProps<Theme>;
}
const Fieldset: FC<FieldsetProps> = ({
  title,
  color = 'grey.300',
  titleSize = '1rem',
  borderWidth = 1,
  borderRadius = 2,
  children,
  sx = {},
  ...props
}) => {
  return (
    <Box
      component="fieldset"
      sx={{
        borderColor: color,
        borderWidth: borderWidth,
        borderRadius: borderRadius,
        ...sx,
      }}
      {...props}
    >
      {title && (
        <Typography
          component="legend"
          sx={{
            color: color,
            fontSize: titleSize,
          }}
        >
          {title}
        </Typography>
      )}
      {children}
    </Box>
  );
};
export default Fieldset;
