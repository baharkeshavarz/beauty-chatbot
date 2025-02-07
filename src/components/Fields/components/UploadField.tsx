import { Grid, Typography, alpha } from '@mui/material';
import { FC } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import FileUpload from 'react-material-file-upload';
import { UploadFieldProps } from '../types';

const UploadField: FC<UploadFieldProps> = ({ name, title, ...props }) => {
  const { t } = useTranslation();

  const { control, watch } = useFormContext();
  const value = watch(name);

  const {
    field: { onChange },
    fieldState: { error },
  } = useController({ name, control });

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <FileUpload
          key={title}
          title={title}
          buttonProps={{
            variant: 'outlined',
            size: 'small',
          }}
          typographyProps={{
            variant: 'body2',
          }}
          multiple={false}
          onChange={files => {
            if (props.multiple) {
              onChange([...(value ?? []), ...files]);
            } else {
              onChange([...files]);
            }
          }}
          value={value}
          buttonText={t('common:fields.select')}
          {...props}
          sx={{
            border: 'none !important',
            outline: 'none !important',
            bgcolor: theme => alpha(theme.palette.primary.main, 0.1),
            borderColor: theme => theme.palette.divider,
            mb: 0,
            pb: 0,
            '& ul': {
              display: 'none',
            },
            ...props.sx,
          }}
        />
      </Grid>

      {!!error && (
        <Grid item xs={12}>
          <Typography variant="body2" color="error">
            {error.message?.toString()}
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default UploadField;
