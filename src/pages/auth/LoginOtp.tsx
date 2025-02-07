import { useEffect, useRef } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import ReactCodeInput from 'react-code-input';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import ButtonWithLoading from 'src/components/ButtonWithLoading/ButtonWithLoading.js';
import ValidationHelperText from 'src/components/ValidationHelperText/ValidationHelperText.js';
import { LoginByOtpPayload } from 'src/services/account/types';
import { onInvalidSubmit } from 'src/utils/form';
import * as yup from 'yup';
import { loginByOtp } from 'src/services/account/index';
import AuthWrapper from 'src/sections/auth/AuthWrapper';
import { DEFAULT_PATH } from 'src/configs/config';

const charsCount = 6;

type FieldNames = Record<'password', any>;

const LoginOtp = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const labels: Record<keyof FieldNames, string> = {
    password: t('common:fields.password'),
  };

  const resolveSchema: yup.ObjectSchema<FieldNames> = yup.object({
    password: yup
      .string()
      .nullable()
      .min(charsCount)
      .max(charsCount)
      .required()
      .label(labels.password),
  });

  const mobileNumber = `${location.state?.prefixPhoneNumber}${location.state?.mobileNumber}`;

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Partial<FieldNames>>({
    resolver: yupResolver(resolveSchema),
  });

  const formRef = useRef(null);

  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (payload: LoginByOtpPayload) => {
      const { data } = await loginByOtp({ payload });
      if (data?.success) {
        // auth.login(data?.value);
        navigate(DEFAULT_PATH);
      }
    },
  });

  const handleLogin: SubmitHandler<FieldNames> = async payload => {
    await mutateAsync({
      ...payload,
      userName: mobileNumber,
    });
  };

  useEffect(() => {
    if (!location.state?.mobileNumber) {
      navigate('/login');
    }
  }, [location.state?.mobileNumber, navigate]);

  const password = watch('password');
  useEffect(() => {
    if (password?.length === charsCount) {
      formRef.current.dispatchEvent(
        new Event('submit', { cancelable: true, bubbles: true }),
      );
    }
  }, [password]);

  const handleClickOnPrev = () => {
    navigate('/login');
  };

  return (
    <AuthWrapper>
      <Box sx={{ mt: 3 }}>
        <form
          ref={formRef}
          onSubmit={handleSubmit(handleLogin, onInvalidSubmit)}
        >
          <Stack
            spacing={1}
            justifyContent="center"
            sx={{
              textAlign: 'center',
            }}
          >
            <Typography variant="caption">
              {t('pages:loginOtp.passwordSentToMobile')}{' '}
              <span dir="ltr">{mobileNumber}</span>
            </Typography>
            <div>
              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, value } }) => (
                  <ReactCodeInput
                    name="password"
                    style={{
                      direction: 'ltr',
                    }}
                    inputMode="numeric"
                    onChange={onChange}
                    value={value}
                    type="text"
                    autoFocus
                    fields={charsCount}
                  />
                )}
              />

              <ValidationHelperText
                error={!!errors.password}
                helperText={errors?.password?.message?.toString()}
              />
            </div>
            <Stack spacing={1}>
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
              <Button
                fullWidth
                variant="outlined"
                disableElevation
                onClick={handleClickOnPrev}
              >
                {t('common:buttons.return')}
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </AuthWrapper>
  );
};

export default LoginOtp;
