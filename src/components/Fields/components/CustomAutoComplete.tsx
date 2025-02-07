import { Autocomplete, TextField } from '@mui/material'
import { FC } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { CustomAutoCompleteProps, Option } from '../types'
import useLocalFormContext from '../hooks/useLocalFormContext'
import CustomSkeleton from '../../CustomSkeleton'

const CustomAutoComplete: FC<CustomAutoCompleteProps<Option, false, false, false>> = ({
  options = [],
  name,
  size,
  label,
  labelFormatter,
  resetFieldsOnChange = [],
  ...props
}) => {
  const { control, setValue } = useFormContext()
  const context = useLocalFormContext()
  return (
    <CustomSkeleton isLoading={context?.isLoading}>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value, name }, formState: { errors } }) => (
          <Autocomplete
            {...props}
            size={size}
            onChange={(event, item) => {
              onChange(item?.value ?? null)

              if (resetFieldsOnChange?.length) {
                resetFieldsOnChange.forEach(key => {
                  setValue(key, null)
                })
              }
            }}
            value={
              options.find(item => item.id === value) ?? {
                label: '',
                id: 0,
                value: null,
              }
            }
            options={options}
            renderInput={params => (
              <TextField
                {...params}
                label={label}
                error={!!errors[name]}
                helperText={errors[name]?.message?.toString()}
                inputProps={{
                  ...params.inputProps,
                }}
              />
            )}
          />
        )}
      />
    </CustomSkeleton>
  )
}

export default CustomAutoComplete
