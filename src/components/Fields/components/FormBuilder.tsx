import { Grid } from '@mui/material';
import { FC } from 'react';
import {
  CustomCheckbox,
  CustomDatePicker,
  CustomRadioButtons,
  CustomSelect,
  CustomTextField,
  Labels,
} from 'src/components/Fields';
import ServerSideCustomAutoComplete from './ServerSideCustomAutoComplete';
import CustomSwitch from './CustomSwitch';
import CurrencyTextField from './CurrencyTextField';
import CustomTextarea from './CustomTextarea';
import CustomAutoComplete from './CustomAutoComplete';
import CustomMultipleAutoComplete from './CustomMultipleAutoComplete';
import MultipleFreeSolo from './MultipleFreeSolo';

export interface FormBuilderProps {
  fields: Labels<any>;
}
const FormBuilder: FC<FormBuilderProps> = ({ fields }) => {
  return (
    <>
      {Object.keys(fields).map(key => {
        const { ui, ...common } = fields[key];

        switch (common.type) {
          case 'Custom':
            return (
              <Grid item {...ui.grid}>
                {common.component}
              </Grid>
            );
          case 'RadioButtons':
            return (
              <Grid item {...ui.grid}>
                <CustomRadioButtons {...common} />
              </Grid>
            );
          case 'Switch':
            return (
              <Grid item {...ui.grid}>
                <CustomSwitch {...common} />
              </Grid>
            );
          case 'Checkbox':
            return (
              <Grid item {...ui.grid}>
                <CustomCheckbox {...common} />
              </Grid>
            );
          case 'String':
            return (
              <Grid item {...ui.grid}>
                <CustomTextField
                  {...common?.props}
                  size="small"
                  fullWidth
                  {...common}
                />
              </Grid>
            );
          case 'Textarea':
            return (
              <Grid item {...ui.grid}>
                <CustomTextarea
                  {...common?.props}
                  size="small"
                  fullWidth
                  {...common}
                />
              </Grid>
            );
          case 'Number':
            return (
              <Grid item {...ui.grid}>
                <CustomTextField
                  type="number"
                  size="small"
                  fullWidth
                  {...common?.props}
                  {...common}
                />
              </Grid>
            );
          case 'Currency':
            return (
              <Grid item {...ui.grid}>
                <CurrencyTextField fullWidth {...common} />
              </Grid>
            );
          case 'Date':
            return (
              <Grid item {...ui.grid}>
                <CustomDatePicker
                  fullWidth
                  {...common}
                  {...common?.props}
                  variant="outlined"
                  enableAccessibleFieldDOMStructure
                  formatDensity="dense"
                  selectedSections={null}
                />
              </Grid>
            );
          case 'Selective':
            return (
              <Grid item {...ui.grid}>
                <CustomSelect
                  size="small"
                  fullWidth
                  variant="outlined"
                  {...common}
                />
              </Grid>
            );
          case 'ServerSideSelective':
            return (
              <Grid item {...ui.grid}>
                <ServerSideCustomAutoComplete
                  fullWidth
                  size="small"
                  disabledOnChange
                  {...common}
                  {...common.props}
                />
              </Grid>
            );
          case 'SearchableSelective':
            return (
              <Grid item {...ui.grid}>
                {common.multiple ? (
                  <CustomMultipleAutoComplete
                    fullWidth
                    size="small"
                    {...common}
                    multiple={true}
                  />
                ) : (
                  <CustomAutoComplete
                    fullWidth
                    size="small"
                    {...common}
                    {...common.props}
                    multiple={false}
                  />
                )}
              </Grid>
            );
          case 'FreeSoloSelective':
            return (
              <Grid item {...ui.grid}>
                <MultipleFreeSolo size="small" {...common} {...common.props} />
              </Grid>
            );
          default:
            break;
        }
      })}
    </>
  );
};

export default FormBuilder;
