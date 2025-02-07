import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { I18nextProvider } from 'react-i18next';
import Snackbar from 'src/components/@extended/Snackbar';
import RTLLayout from 'src/components/RTLLayout';
import ScrollTop from 'src/components/ScrollTop';
import 'src/i18n/i18n';
import i18n from 'src/i18n/i18n';
import Routes from 'src/routes';
import ThemeCustomization from 'src/themes';
import CustomLocalizationProvider from './components/Fields/providers/CustomLocalizationProvider';
import ErrorBoundary from './errorBoundary';
import ConfirmAlertProvider from './providers/ConfirmAlertProvider';
import LanguageProvider from './providers/LanguageProvider';
import ToastProvider from './providers/ToastProvider';
import '/node_modules/flag-icons/css/flag-icons.min.css';
import AppProvider from './providers/AppProvider';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <I18nextProvider i18n={i18n}>
      <LanguageProvider>
        <ThemeCustomization>
          <ErrorBoundary>
            <ConfirmAlertProvider>
              <RTLLayout>
                <CustomLocalizationProvider>
                  <AppProvider>
                    <ScrollTop>
                      <>
                        <Routes />
                        <Snackbar />
                      </>
                    </ScrollTop>
                  </AppProvider>
                </CustomLocalizationProvider>
                <ToastProvider />
              </RTLLayout>
            </ConfirmAlertProvider>
          </ErrorBoundary>
        </ThemeCustomization>
      </LanguageProvider>
    </I18nextProvider>
  </QueryClientProvider>
);

export default App;
