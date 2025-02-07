import { yupResolver } from '@hookform/resolvers/yup';
import {
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { HttpStatusCode } from 'axios';
import {
  Controller,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ButtonWithLoading } from 'src/components/ButtonWithLoading/index';
import ValidationHelperText from 'src/components/ValidationHelperText/ValidationHelperText';
import { DEFAULT_PATH } from 'src/configs/config';
import AuthWrapper from 'src/sections/auth/AuthWrapper';
import { getAccountDetail, login } from 'src/services/account/index';
import { LoginPayload } from 'src/services/account/types';
import { UserTypeEnum } from 'src/services/common/types';
import { onInvalidSubmit } from 'src/utils/form';
import * as yup from 'yup';

type FieldNames = Record<keyof LoginPayload, any>;

const BasicLogin = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const labels: Record<keyof FieldNames, string> = {
    user_name: t('common:fields.username'),
    password: t('common:fields.password'),
    remember_me: t('pages:login.remember_me'),
  };

  const resolveSchema: yup.ObjectSchema<FieldNames> = yup.object({
    user_name: yup.string().nullable().required().label(labels.user_name),
    password: yup.string().nullable().required().label(labels.password),
    remember_me: yup.boolean().nullable().label(labels.remember_me),
  });

  const methods = useForm<Partial<FieldNames>>({
    resolver: yupResolver(resolveSchema),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = methods;

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (payload: FieldNames) => {
      const { status } = await login({
        payload,
      });

      if (status === HttpStatusCode.Ok) {
        const accountDetailQuery = await getAccountDetail();
        const userData = accountDetailQuery?.data?.data;
        if (
          [UserTypeEnum.Admin, UserTypeEnum.SuperAdmin].includes(
            userData.user_type,
          )
        ) {
          navigate('/');
          return;
        }
        navigate('/');
      }
    },
  });

  const onSubmit: SubmitHandler<FieldNames> = async payload => {
    await mutateAsync(payload);
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
          <Grid item xs={12}>
            <TextField
              fullWidth
              {...register('user_name')}
              label={labels.user_name}
              inputProps={{ dir: 'ltr' }}
            />
            <ValidationHelperText
              error={!!errors.user_name}
              helperText={errors?.user_name?.message?.toString()}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              {...register('password')}
              label={labels.password}
              inputProps={{ dir: 'ltr' }}
              type="password"
            />
            <ValidationHelperText
              error={!!errors.password}
              helperText={errors?.password?.message?.toString()}
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              control={control}
              name="remember_me"
              render={({ field: { onChange, value, name } }) => (
                <>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={value}
                        name={name}
                        onChange={onChange}
                        color="primary"
                        size="small"
                      />
                    }
                    label={
                      <Typography variant="h6">{labels.remember_me}</Typography>
                    }
                  />
                  <ValidationHelperText
                    error={!!errors[name]}
                    helperText={errors[name]?.message?.toString()}
                  />
                </>
              )}
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
              {t('common:buttons.login')}
            </ButtonWithLoading>
          </Grid>
        </Grid>
      </FormProvider>
    </AuthWrapper>
  );
};

export default BasicLogin;
