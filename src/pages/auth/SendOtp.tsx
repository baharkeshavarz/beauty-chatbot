import { yupResolver } from '@hookform/resolvers/yup';
import { Grid, InputAdornment, TextField } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { Mobile } from 'iconsax-react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ButtonWithLoading } from 'src/components/ButtonWithLoading';
import MobilePrefixSelector from 'src/components/MobilePrefixSelector/MobilePrefixSelector';
import ValidationHelperText from 'src/components/ValidationHelperText/ValidationHelperText';
import AuthWrapper from 'src/sections/auth/AuthWrapper';
import { sendLoginOtp } from 'src/services/account/index';
import { onInvalidSubmit } from 'src/utils/form';
import * as yup from 'yup';

type FieldNames = Record<'mobileNumber' | 'prefixPhoneNumber', any>;

const SendOtp = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const labels: Record<keyof FieldNames, string> = {
    mobileNumber: t('common:fields.mobileNumber'),
    prefixPhoneNumber: t('common:fields.code'),
  };

  const resolveSchema: yup.ObjectSchema<FieldNames> = yup.object({
    prefixPhoneNumber: yup
      .string()
      .nullable()
      .required()
      .label(labels.prefixPhoneNumber),
    mobileNumber: yup.string().nullable().required().label(labels.mobileNumber),
  });

  const methods = useForm<Partial<FieldNames>>({
    resolver: yupResolver(resolveSchema),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const { mutateAsync, isPending } = useMutation({
    mutationFn: sendLoginOtp,
  });
  const onSubmit: SubmitHandler<FieldNames> = async payload => {
    const { data } = await mutateAsync({ payload });
    if (data?.succeed) {
      navigate('/login/otp', { state: payload });
    }
  };

  return (
    <AuthWrapper>
      <FormProvider {...methods}>
        <Grid
          container
          spacing={1}
          component="form"
          sx={{
            mt: 3,
            flexDirection: theme =>
              theme.direction === 'rtl' ? 'row-reverse' : 'row',
          }}
          onSubmit={handleSubmit(onSubmit, onInvalidSubmit)}
        >
          <Grid
            item
            xs={4}
            sx={{
              width: 100,
            }}
          >
            <MobilePrefixSelector
              controllerProps={{
                name: 'prefixPhoneNumber',
              }}
              selectProps={{
                label: t('common:fields.code'),
                fullWidth: true,
                variant: 'outlined',
              }}
            />
            <ValidationHelperText
              error={!!errors.prefixPhoneNumber}
              helperText={errors?.prefixPhoneNumber?.message?.toString()}
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              fullWidth
              {...register('mobileNumber')}
              label={t('common:fields.mobileNumber')}
              inputProps={{ maxLength: 15, dir: 'ltr' }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <Mobile size={20} />
                  </InputAdornment>
                ),
              }}
            />
            <ValidationHelperText
              error={!!errors.mobileNumber}
              helperText={errors?.mobileNumber?.message?.toString()}
            />
          </Grid>
          <Grid item xs={12}>
            <ButtonWithLoading
              isLoading={isPending}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disableElevation
              size="large"
            >
              {t('common:buttons.getTheCode')}
            </ButtonWithLoading>
          </Grid>
        </Grid>
      </FormProvider>
    </AuthWrapper>
  );
};

export default SendOtp;
