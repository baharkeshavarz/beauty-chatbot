import { DatePicker } from '@mui/x-date-pickers';
import { useController, useFormContext } from 'react-hook-form';
import { ICustomDatePicker } from '../types';
import ClearButtonAdornment from './ClearButtonAdornment';
import { FC } from 'react';

const CustomDatePicker: FC<ICustomDatePicker['props']> = ({
  name,
  label,
  fullWidth = true,
  variant = 'outlined',
  valueFormatter,
  format = 'yyyy/MM/dd',
  defaultValue,
  ...props
}) => {
  const { control } = useFormContext();
  const {
    field,
    formState: { errors },
  } = useController({
    name,
    control,
    defaultValue,
  });

  const handleChange = date => {
    let value = date;
    if (valueFormatter) {
      value = valueFormatter(value);
    }

    field.onChange(value);
  };

  return (
    <DatePicker
      format={format}
      {...props}
      label={label}
      value={(field.value as unknown as never) || ''}
      onChange={handleChange}
      onSelectedSectionsChange={() => {}}
      closeOnSelect={true}
      slotProps={{
        textField: () => ({
          helperText: errors[name]?.message?.toString(),
          error: !!errors[name],
          fullWidth: true,
          variant,
          size: 'small',
          InputProps: {
            startAdornment: (
              <>
                {field.value && (
                  <ClearButtonAdornment onChange={field.onChange} />
                )}
              </>
            ),
          },
        }),
      }}
    />
  );
};
export default CustomDatePicker;
