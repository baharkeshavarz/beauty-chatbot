import { TextField } from '@mui/material';
import { TextAreaProps } from '../types';
import { FC } from 'react';

const TextAreaField: FC<TextAreaProps> = ({
  register,
  rows,
  name,
  label,
  defaultValue,
}) => {
  return (
    <TextField
      fullWidth
      sx={{ mt: 1 }}
      {...register(name)}
      label={label}
      multiline
      rows={rows}
      defaultValue={defaultValue}
    />
  );
};

export default TextAreaField;
