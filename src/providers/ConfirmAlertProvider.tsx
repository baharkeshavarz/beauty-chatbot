import { ConfirmProvider, ConfirmProviderProps } from 'material-ui-confirm';
import { useTranslation } from 'react-i18next';

const ConfirmAlertProvider = ({ children }) => {
  const { t } = useTranslation();
  const confirmDefaultOptions: ConfirmProviderProps['defaultOptions'] = {
    title: t('common:confirmAlert.areYouSure'),
    confirmationText: t('common:confirmAlert.buttons.yes'),
    confirmationButtonProps: {
      size: 'small',
      variant: 'contained',
      color: 'primary',
    },
    cancellationButtonProps: {
      size: 'small',
      variant: 'contained',
      color: 'error',
    },
    cancellationText: t('common:confirmAlert.buttons.no'),
    allowClose: true,
    dialogActionsProps: {
      sx: {
        gap: 1,
      },
    },
    dialogProps: {
      PaperProps: {
        sx: {
          width: 320,
        },
      },
    },
  };

  return (
    <ConfirmProvider defaultOptions={confirmDefaultOptions}>
      {children}
    </ConfirmProvider>
  );
};

export default ConfirmAlertProvider;
