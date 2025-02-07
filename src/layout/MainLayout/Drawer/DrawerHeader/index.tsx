import { useTheme } from '@mui/material/styles';
import DrawerHeaderStyled from './DrawerHeaderStyled';
import Logo from 'src/components/logo';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import IconButton from 'src/components/@extended/IconButton';

interface Props {
  open: boolean;
  handleDrawerToggle?: () => void;
}

const DrawerHeader = ({ open, handleDrawerToggle }: Props) => {
  const theme = useTheme();
  const iconBackColorOpen =
    theme.palette.mode === 'dark' ? 'grey.200' : 'grey.300';
  const iconBackColor =
    theme.palette.mode === 'dark' ? 'background.default' : 'grey.100';

  return (
    <DrawerHeaderStyled theme={theme} open={open}>
      {open && (
        <IconButton
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          edge="start"
          color="secondary"
          variant="light"
          sx={{
            color: 'text.primary',
            bgcolor: open ? iconBackColorOpen : iconBackColor,
            ml: { xs: 0, lg: -2 },
          }}
        >
          {!open ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </IconButton>
      )}

      <Logo isIcon={!open} sx={{ width: open ? 'auto' : 35, height: 35 }} />
    </DrawerHeaderStyled>
  );
};

export default DrawerHeader;
