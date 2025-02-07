import { Box, useMediaQuery } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { useMemo } from 'react';

import { useSelector } from 'src/store';
import Localization from './Localization';
import MobileSection from './MobileSection';
import Search from './Search';

const HeaderContent = () => {
  const i18n = useSelector(state => state.config.i18n);

  const matchesXs = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('md'),
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const localization = useMemo(() => <Localization />, [i18n]);

  return (
    <>
      {!matchesXs && <Search />}
      {!matchesXs && localization}
      {/* {!matchesXs && <ChangeMode />} */}
      {matchesXs && <Box sx={{ width: '100%', ml: 1 }} />}
      {/* {import.meta.env.MODE === 'development' && <Customization />} */}
      {/* {!matchesXs && <Profile />} */}
      {matchesXs && <MobileSection />}
    </>
  );
};

export default HeaderContent;
