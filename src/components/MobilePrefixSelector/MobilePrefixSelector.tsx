import {
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
  FormControl,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { Controller, ControllerProps } from "react-hook-form";
import { getCountryCodeList } from "src/services/common";

export interface MobilePrefixSelectorProps {
  controllerProps: ControllerProps;
  selectProps: SelectProps;
}
const MobilePrefixSelector = ({ controllerProps, selectProps }) => {
  const { data } = useQuery({
    queryKey: ["GET_COUNTRY_CODE_LIST"],
    queryFn: async () => {
      const { data } = await getCountryCodeList();
      return data.value;
    },
    placeholderData: [],
  });
  return (
    <Controller
      {...controllerProps}
      render={({ field: { value, ...field } }) => {
        return (
          <FormControl fullWidth>
            <InputLabel>{selectProps?.label}</InputLabel>
            <Select value={value || ""} {...field} {...selectProps}>
              {data?.map((item) => {
                return (
                  <MenuItem dir="ltr" key={item.code} value={item.code}>
                    {item.code}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        );
      }}
    />
  );
};

export default MobilePrefixSelector;
