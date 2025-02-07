import { ReactNode, useEffect } from 'react';

// material-ui
import createCache, { StylisPlugin } from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

// third-party
import rtlPlugin from 'stylis-plugin-rtl';

// project import
import { useSelector } from 'src/store';
import { languageMapper } from 'src/themes';

// ==============================|| RTL LAYOUT ||============================== //

interface Props {
  children: ReactNode;
}

const RTLLayout = ({ children }: Props) => {
  const i18n = useSelector(state => state.config.i18n);
  const dir = languageMapper[i18n].direction;
  useEffect(() => {
    document.body.dir = dir;
  }, [i18n]);

  const cacheRtl = createCache({
    key: dir === 'rtl' ? 'rtl' : 'css',
    prepend: true,
    stylisPlugins: dir === 'rtl' ? [rtlPlugin as StylisPlugin] : [],
  });

  return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
};

export default RTLLayout;
