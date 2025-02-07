import { Backdrop, CircularProgress } from '@mui/material';
import useGetAccountDetail from 'src/hooks/useGetAccountDetail';
import { GuardProps } from 'src/types/auth';

const AuthGuard = ({ children }: GuardProps) => {
  // const { data, isFetching } = useGetAccountDetail();

  // if (isFetching || data?.status !== 200) {
  //   return (
  //     <Backdrop
  //       appear
  //       open
  //       sx={{
  //         backgroundColor: 'transparent',
  //       }}
  //     >
  //       <CircularProgress size={48} />
  //     </Backdrop>
  //   );
  // }

  return children;
};

export default AuthGuard;
