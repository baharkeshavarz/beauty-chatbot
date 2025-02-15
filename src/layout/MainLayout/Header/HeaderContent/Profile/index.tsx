import { ReactNode, useRef, useState } from 'react';

// material-ui
import {
  Box,
  ButtonBase,
  CardContent,
  ClickAwayListener,
  Grid,
  Paper,
  Popper,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

// project import
import { LogoutOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Avatar from 'src/components/@extended/Avatar';
import Transitions from 'src/components/@extended/Transitions';
import { IconButtonWithLoading } from 'src/components/IconButtonWithLoading';
import MainCard from 'src/components/MainCard';
import useGetAccountDetail from 'src/hooks/useGetAccountDetail';
import { logout } from 'src/services/account';
import { clearPrivileges } from 'src/store/reducers/privileges';
import ProfileTab from './ProfileTab';
import SettingTab from './SettingTab';

// assets
const avatar1 = '/assets/images/users/avatar-1.png';

// types
interface TabPanelProps {
  children?: ReactNode;
  dir?: string;
  index: number;
  value: number;
}

// tab panel wrapper
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`profile-tabpanel-${index}`}
      aria-labelledby={`profile-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `profile-tab-${index}`,
    'aria-controls': `profile-tabpanel-${index}`,
  };
}

// ==============================|| HEADER CONTENT - PROFILE ||============================== //

const Profile = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const accountDetailQuery = useGetAccountDetail();

  const data = accountDetailQuery?.data?.data.data;

  const { mutateAsync, isPending } = useMutation({
    mutationFn: logout,
  });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogout = async () => {
    await mutateAsync();
    dispatch(clearPrivileges());
    navigate('/login');
  };

  const anchorRef = useRef<any>(null);
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = (event: MouseEvent | TouchEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const iconBackColorOpen =
    theme.palette.mode === 'dark' ? 'grey.200' : 'grey.300';

  return (
    <Box sx={{ flexShrink: 0, ml: 0.75 }}>
      <ButtonBase
        sx={{
          p: 0.25,
          bgcolor: open ? iconBackColorOpen : 'transparent',
          borderRadius: 1,
          '&:hover': {
            bgcolor:
              theme.palette.mode === 'dark'
                ? 'secondary.light'
                : 'secondary.lighter',
          },
          '&:focus-visible': {
            outline: `2px solid ${theme.palette.secondary.dark}`,
            outlineOffset: 2,
          },
        }}
        aria-label="open profile"
        ref={anchorRef}
        aria-controls={open ? 'profile-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <Stack direction="row" spacing={2} alignItems="center" sx={{ p: 0.5 }}>
          <Avatar alt="profile user" src={avatar1} size="xs" />
          <Typography variant="subtitle1">{data?.mobile}</Typography>
        </Stack>
      </ButtonBase>
      <Popper
        placement="bottom-end"
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 9],
              },
            },
          ],
        }}
      >
        {({ TransitionProps }) => (
          <Transitions type="fade" in={open} {...TransitionProps}>
            {open && (
              <Paper
                sx={{
                  boxShadow: theme.customShadows.z1,
                  width: 290,
                  minWidth: 240,
                  maxWidth: 290,
                  [theme.breakpoints.down('md')]: {
                    maxWidth: 250,
                  },
                }}
              >
                <ClickAwayListener onClickAway={handleClose}>
                  <MainCard elevation={0} border={false} content={false}>
                    <CardContent sx={{ px: 2.5, pt: 3 }}>
                      <Grid
                        container
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Grid item>
                          <Stack
                            direction="row"
                            spacing={1.25}
                            alignItems="center"
                          >
                            <Avatar
                              alt="profile user"
                              src={avatar1}
                              sx={{ width: 32, height: 32 }}
                            />
                            <Stack>
                              <Typography variant="h6">
                                {data?.mobile}
                              </Typography>
                              {/* <Typography variant="body2" color="textSecondary">
                              </Typography> */}
                            </Stack>
                          </Stack>
                        </Grid>
                        <Grid item>
                          <Tooltip title={t('common:buttons.logout')}>
                            <IconButtonWithLoading
                              isLoading={isPending}
                              size="large"
                              sx={{ color: 'text.primary' }}
                              onClick={handleLogout}
                            >
                              <LogoutOutlined />
                            </IconButtonWithLoading>
                          </Tooltip>
                        </Grid>
                      </Grid>
                    </CardContent>
                    {open && (
                      <>
                        {/* <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                          <Tabs
                            variant="fullWidth"
                            value={value}
                            onChange={handleChange}
                            aria-label="profile tabs"
                          >
                            <Tab
                              sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textTransform: 'capitalize',
                              }}
                              icon={
                                <UserOutlined
                                  style={{
                                    marginBottom: 0,
                                    marginRight: '10px',
                                  }}
                                />
                              }
                              label="Profile"
                              {...a11yProps(0)}
                            />
                          </Tabs>
                        </Box> */}
                        {/* <TabPanel value={value} index={0} dir={theme.direction}> */}
                        <SettingTab />
                        <ProfileTab
                          handleLogout={handleLogout}
                          isPending={isPending}
                        />
                        {/* </TabPanel> */}
                      </>
                    )}
                  </MainCard>
                </ClickAwayListener>
              </Paper>
            )}
          </Transitions>
        )}
      </Popper>
    </Box>
  );
};

export default Profile;
