import { Grid } from '@mui/material';
import { FC } from 'react';
import UserInfo from './userInfo';

interface UserInfoRendererProps {
  userId: number;
}

const UserInfoRenderer: FC<UserInfoRendererProps> = ({ userId }) => {
  return (
    <Grid container spacing={1}>
      <Grid item>
        <UserInfo userId={userId} />
      </Grid>
    </Grid>
  );
};

export default UserInfoRenderer;
