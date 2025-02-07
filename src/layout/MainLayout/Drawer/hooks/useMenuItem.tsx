import { useTranslation } from 'react-i18next';
import { useSelector } from 'src/store';
import { NavItemType } from 'src/types/menu';
import DashboardIcon from '@mui/icons-material/Dashboard';

const useMenuItem = (): NavItemType => {
  const { t } = useTranslation();
  const privileges = useSelector(state => state.privileges.value);
  const children: NavItemType['children'] = [];

  children.push({
    id: 'admin-dashboard-menu',
    type: 'item',
    title: t('pages:menu.dashboard'),
    icon: <DashboardIcon />,
    url: '/',
    breadcrumbs: false,
  });

  return {
    id: 'group-server-menu',
    type: 'group',
    children,
  };
};

export default useMenuItem;
