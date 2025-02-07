import { TextField } from '@mui/material';
import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { CustomTextFieldProps } from '../types';
import useLocalFormContext from '../hooks/useLocalFormContext';
import CustomSkeleton from '../../CustomSkeleton';

const CustomTextarea: FC<CustomTextFieldProps> = ({
  limitations,
  size = 'small',
  fullWidth = true,
  variant = 'outlined',
  name,
  ...props
}) => {
  const { control } = useFormContext();

  const { isLoading } = useLocalFormContext();

  return (
    <CustomSkeleton isLoading={isLoading}>
      <Controller
        control={control}
        name={name}
        render={({ field: { value, ...field } }) => {
          return (
            <TextField
              {...field}
              value={value || ''}
              {...props}
              multiline
              fullWidth
            />
          );
        }}
      />
    </CustomSkeleton>
  );
};

export default CustomTextarea;
