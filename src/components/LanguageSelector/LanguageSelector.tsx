import LanguageIcon from '@mui/icons-material/Language';
import {
  ClickAwayListener,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Popper,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { languages } from 'src/configs/languages';

import { useDispatch, useSelector } from 'src/store';
import { onChangeLocalization } from 'src/store/reducers/config';
import { languageMapper } from 'src/themes';
import Transitions from '../Transitions/Transitions';

function LanguageSelector() {
  const theme = useTheme();
  const { t } = useTranslation();

  const [anchorEl, setAnchorEl] = useState(null);

  const dispatch = useDispatch();
  const i18n = useSelector(state => state.config.i18n);

  const mdBreakpoint = useMediaQuery(theme.breakpoints.down('md'));

  const handleToggle = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeLang = lang => {
    dispatch(onChangeLocalization(lang.symbol));
    handleClose();
  };

  return (
    <div>
      <Tooltip placement="top" title={t('common:tooltips.changeLanguage')}>
        <IconButton size="small" onClick={handleToggle}>
          <LanguageIcon sx={{ width: '1.1rem', height: '1.1rem' }} />
        </IconButton>
      </Tooltip>
      <Popper
        sx={{ zIndex: 2000 }}
        placement={mdBreakpoint ? 'bottom-end' : 'bottom'}
        open={!!anchorEl}
        anchorEl={anchorEl}
        role={undefined}
        transition
        popperOptions={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [60, 0],
              },
            },
          ],
        }}
      >
        {({ TransitionProps }) => (
          <Transitions type="fade" in={!!anchorEl} {...TransitionProps}>
            <Paper sx={{ boxShadow: theme.shadows[2], ml: '1rem' }}>
              <ClickAwayListener onClickAway={handleClose}>
                <List
                  dense
                  component="nav"
                  sx={{
                    p: 0,
                    minWidth: 180,
                    maxWidth: 450,
                    bgcolor: theme.palette.background.paper,
                    borderRadius: 0.5,
                    [theme.breakpoints.down('md')]: {
                      maxWidth: 250,
                    },
                  }}
                >
                  {languages.map((item, index) => (
                    <ListItemButton
                      selected={item.symbol === i18n}
                      key={index}
                      onClick={() => handleChangeLang(item)}
                    >
                      <ListItemText
                        primary={
                          <Typography
                            sx={{
                              fontFamily: `${languageMapper[item.symbol].fontFamily} !important`,
                            }}
                          >
                            {' '}
                            <span
                              style={{ padding: '0 1rem' }}
                              className={`fi fi-${item.flag}`}
                            ></span>{' '}
                            {item.name}
                          </Typography>
                        }
                      ></ListItemText>
                    </ListItemButton>
                  ))}
                </List>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
    </div>
  );
}

export default LanguageSelector;
