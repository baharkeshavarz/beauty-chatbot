import { TextField, TextFieldProps } from '@mui/material';
import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { CustomTextFieldProps } from '../types';
import CustomSkeleton from '../../CustomSkeleton';
import useLocalFormContext from '../hooks/useLocalFormContext';
import ClearButtonAdornment from './ClearButtonAdornment';
import { DEFAULT_FORBIDDEN_CHARS } from '../constants/defaults';

const CustomTextField: FC<CustomTextFieldProps> = ({
  fullWidth = true,
  size = 'small',
  ControllerProps = {},
  forbiddenChars = DEFAULT_FORBIDDEN_CHARS,
  ...props
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const { isLoading } = useLocalFormContext();

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (['+', '-'].includes(event.key)) {
      event.preventDefault();
    }
  };

  return (
    <Controller
      name={props.name}
      control={control}
      {...ControllerProps}
      render={({ field: { value, onChange } }) => {
        const _onChange = event => {
          let isValid = true;
          if (props.type?.toLowerCase() === 'number') {
            let _value = event.target.value;
            isValid =
              _value >= (props.limitations?.min || -Infinity) &&
              _value <= (props.limitations?.max || Infinity) &&
              !forbiddenChars?.includes(_value.toString());

            if (isValid) {
              _value = +_value;
            }
          } else if (
            ['password', 'text', 'string', undefined].includes(props.type)
          ) {
            const _value = event.target.value;
            isValid =
              _value.length <= (props.limitations?.maxLength || Infinity) &&
              _value.length >= (props.limitations?.minLength || -Infinity);
          }

          if (isValid) {
            onChange(event);
            props?.onChange?.(event);
          }
        };

        return (
          <CustomSkeleton isLoading={isLoading}>
            <TextField
              {...props}
              type={props?.props?.type ?? 'text'}
              fullWidth={fullWidth}
              size={size}
              onKeyDown={
                props.type?.toLowerCase() === 'number' ? onKeyDown : null
              }
              value={value ?? ''}
              onChange={_onChange}
              error={!!errors[props.name]}
              helperText={errors[props.name]?.message?.toString()}
              FormHelperTextProps={{
                sx: {
                  fontSize: 10,
                  m: 0,
                },
              }}
              InputProps={{
                endAdornment: (
                  <>
                    {!props.disabled && value && (
                      <ClearButtonAdornment onChange={onChange} />
                    )}

                    {props.InputProps?.endAdornment}
                  </>
                ),
              }}
            />
          </CustomSkeleton>
        );
      }}
    />
  );
};

export default CustomTextField;
