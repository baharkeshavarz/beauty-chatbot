import { CustomCellRendererProps } from 'ag-grid-react';
import { IAdminUser } from 'src/services/userAdmin/types';
import UserInfoRenderer from './UserInfoRenderer';

const UserInfoRendererGrid = (props: CustomCellRendererProps<IAdminUser>) => {
  return <UserInfoRenderer userId={props.data?.user_id} />;
};

export default UserInfoRendererGrid;
