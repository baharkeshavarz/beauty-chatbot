// material-ui
import { Badge } from '@mui/material';

// project imports
import AvatarStatus from './AvatarStatus';
import { UserProfile } from 'src/types/user-profile';
import Avatar from 'src/components/@extended/Avatar';

interface UserAvatarProps {
  user: UserProfile;
}

const UserAvatar = ({ user }: UserAvatarProps) => (
  <Badge
    overlap="circular"
    badgeContent={<AvatarStatus status={user.online_status!} />}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    sx={{
      '& .MuiBox-root': { width: 6, height: 6 },
      padding: 0,
      minWidth: 12,
      '& svg': { background: '#fff', borderRadius: '50%' },
    }}
  >
    <Avatar
      alt={user.name}
      src={user.avatar && `/assets/images/users/${user.avatar}`}
    />
  </Badge>
);

export default UserAvatar;
