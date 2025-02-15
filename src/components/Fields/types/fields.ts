import { BaseTextFieldProps } from '@mui/material';
import {
  AutocompleteProps,
  ButtonProps,
  OutlinedTextFieldProps,
  RegularBreakpoints,
  SwitchProps,
  TextFieldProps,
} from '@mui/material';
import {
  DatePickerProps,
  DateTimePickerProps,
  PickerValidDate,
} from '@mui/x-date-pickers';
import { ReactNode } from 'react';
import { ControllerProps } from 'react-hook-form';
import { FileUploadProps } from 'react-material-file-upload';

export interface Option {
  id: number | string;
  label: ReactNode;
  value: string | number | boolean;
  other?: Record<any, any>;
}

export interface ButtonWithLoadingProps extends ButtonProps {
  isLoading?: boolean;
  buttonType?: 'Reset';
}

export type CustomAutoCompleteComponentProps = CustomAutoCompleteProps<
  Option,
  false,
  false,
  false
>;

export interface CustomDateTimePickerProps<TDate extends PickerValidDate>
  extends DateTimePickerProps<TDate> {
  name: string;
  label: string;
  fullWidth?: boolean;
  variant?: TextFieldProps['variant'];
  valueFormatter?: (value) => any;
}

export interface CustomDatePickerProps<TDate extends PickerValidDate>
  extends DatePickerProps<TDate> {
  name: string;
  label: string;
  fullWidth?: boolean;
  variant?: TextFieldProps['variant'];
  valueFormatter?: (value) => any;
}
export interface CustomSelectProps extends OutlinedTextFieldProps {
  resetFieldsOnChange?: string[];
  options: Option[];
  labelFormatter?: (option: Option) => ReactNode;
}

export interface CustomAutoCompleteProps<
  TData extends Option,
  TMultiple extends boolean = false,
  TDisableClearable extends boolean = false,
  TFreeSolo extends boolean = false,
> extends Omit<
    AutocompleteProps<TData, TMultiple, TDisableClearable, TFreeSolo>,
    'renderInput'
  > {
  resetFieldsOnChange?: string[];
  options: TData[];
  labelFormatter?: (option: Option) => ReactNode;
  name: string;
  label: string;
}

export interface ServerSideAutoComplete<
  TData extends Option,
  TMultiple extends boolean = false,
  TDisableClearable extends boolean = false,
  TFreeSolo extends boolean = false,
> extends Omit<
    CustomAutoCompleteProps<TData, TMultiple, TDisableClearable, TFreeSolo>,
    'options'
  > {
  queryFn: (value?: string | null) => Promise<Option[]>;
  disabledOnChange: boolean;
}

export type FreeSoloLimitations = Partial<{
  onlyNumbers: boolean;
}>;

export type MultipleFreeSoloProps = Partial<
  AutocompleteProps<string, true, false, true>
> & {
  name: string;
  label: string;
  resetFieldsOnChange?: string[];
  limitations?: FreeSoloLimitations;
};

export type ServerSideCustomAutoCompleteProps = ServerSideAutoComplete<
  Option,
  false,
  false,
  false
>;

export type NumberLimitations = Partial<{
  min: number;
  max: number;
}>;

export type TextLimitations = Partial<{
  minLength: number;
  maxLength: number;
}>;
export interface CustomTextFieldProps
  extends Partial<TextFieldProps<'outlined'>> {
  label: string;
  name: string;
  props?: BaseTextFieldProps;
  limitations?: TextLimitations & NumberLimitations;
  ControllerProps?: Partial<ControllerProps>;
  forbiddenChars?: string[];
}

export interface CurrencyTextFieldProps
  extends Partial<TextFieldProps<'outlined'>> {
  limitations?: NumberLimitations;
  currencyLabel?: ReactNode;
}

export type DateLimitations = Partial<{
  minDate: any;
  maxDate: any;
}>;

export interface JalaliDatePickerProps {
  label: string;
  name: string;
  limitations?: DateLimitations;
}

export interface CustomSwitchProps extends SwitchProps {
  label: string;
  name: string;
}

export interface CustomRadioButtonsProps {
  label: string;
  name: string;
  options: Option[];
}

export interface ICustomTextField {
  type: 'TextField';
  props: OutlinedTextFieldProps;
  defaultValue: unknown;
}

export interface ICustomDatePicker {
  type: 'DatePicker';
  props: Omit<
    CustomDatePickerProps<PickerValidDate>,
    'onSelectedSectionsChange'
  >;
  limitations?: TextLimitations & NumberLimitations;
  defaultValue?: Date | null;
}

export interface ICustomSelect {
  type: 'Select';
  props: CustomSelectProps;
  defaultValue: unknown;
}

export interface ICustomSwitch {
  type: 'Switch';
  props: CustomSwitchProps;
  defaultValue: unknown;
}

export interface UploadFieldProps
  extends Omit<FileUploadProps, 'onChange' | 'value'> {
  name: string;
  value?: FileUploadProps['value'];
  showUploadBox?: boolean;
}

export interface UIProperties {
  grid: RegularBreakpoints;
}

export interface ICustomComponent {
  type?: 'Custom';
  component: ReactNode;
}

export interface ICommonProperties {
  name: string;
  label: string;
}

export type IFieldTypes =
  | {
      type?: 'Date';
      limitations?: DateLimitations;
      props?: Partial<ICustomDatePicker>;
    }
  | {
      type?: 'RadioButtons';
      options: Option[];
    }
  | {
      type?: 'Number';
      props?: Partial<CustomTextFieldProps>;
      limitations?: NumberLimitations;
    }
  | {
      type?: 'Switch';
    }
  | {
      type?: 'Checkbox';
    }
  | {
      type?: 'String';
      props?: Partial<CustomTextFieldProps>;
      limitations?: TextLimitations;
    }
  | {
      type?: 'Textarea';
      props?: Partial<CustomTextFieldProps>;
      limitations?: TextLimitations;
    }
  | {
      type?: 'Currency';
      limitations?: NumberLimitations;
    }
  | {
      type: 'Selective';
      options: Option[];
    }
  | {
      type: 'SearchableSelective';
      options: Option[];
      multiple?: boolean;
      props?: Partial<CustomAutoCompleteComponentProps>;
    }
  | {
      type: 'ServerSideSelective';
      queryFn: (searchText?: string | null) => Promise<Option[]>;
      props?: Partial<ServerSideCustomAutoCompleteProps>;
    }
  | {
      type: 'FreeSoloSelective';
      props?: Partial<MultipleFreeSoloProps>;
      limitations?: FreeSoloLimitations;
    };

export type Labels<Keys extends string> = Record<
  Keys,
  ((IFieldTypes & ICommonProperties) | ICustomComponent) & {
    ui?: UIProperties;
  }
>;

export interface TextAreaProps {
  register?: any;
  rows: number;
  name: string;
  label: string;
  defaultValue: any;
}
