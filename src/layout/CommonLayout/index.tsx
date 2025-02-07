import { Outlet } from 'react-router-dom';
import { LinearProgressProps } from '@mui/material/LinearProgress';

export interface LoaderProps extends LinearProgressProps {}

const CommonLayout = ({ layout = 'blank' }: { layout?: string }) => {
  return <>{layout === 'blank' && <Outlet />}</>;
};

export default CommonLayout;
