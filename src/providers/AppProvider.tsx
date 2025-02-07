import { Theme, useMediaQuery } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import { AppContext } from 'src/contexts/AppContext';

const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm'),
  );

  return (
    <AppContext.Provider
      value={{
        isMobile,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
