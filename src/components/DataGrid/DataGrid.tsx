import { Box } from '@mui/material';
import {
  GetContextMenuItemsParams,
  GridReadyEvent,
  MenuItemDef,
} from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

import { LicenseManager } from 'ag-grid-enterprise';
import { AgGridReact, AgGridReactProps } from 'ag-grid-react';
import { FC, memo } from 'react';
import { LanguagesType } from 'src/configs/languages';
import { useSelector } from 'src/store';
import { languageMapper } from 'src/themes';
import { LoadingCellRenderer } from './components';
import useGrid from './hooks/useGrid';
import localeAr from './utils/localeAr';
import localeFa from './utils/localeFa';
import { useTranslation } from 'react-i18next';

const getClassName = (className: string, mode: string): string => {
  const classes = {
    light: `ag-theme-${className}`,
    dark: `ag-theme-${className}-dark`,
  };

  return classes[mode];
};

LicenseManager.setLicenseKey(
  'IRDEVELOPERS_COM_NDEwMjM0NTgwMDAwMA==f08aae16269f416fe8d65bbf9396be5f',
);

const localeTexts: Partial<
  Record<LanguagesType, AgGridReactProps['localeText']>
> = {
  'fa-IR': localeFa,
  'ar-OM': localeAr,
};

const DataGrid: FC<AgGridReactProps> = ({
  className = 'material',
  ...props
}) => {
  const { t } = useTranslation();
  const i18n = useSelector(state => state.config.i18n);
  const mode = useSelector(state => state.config.mode);

  const _className = getClassName(className, mode);

  const { gridRef } = useGrid();

  const onGridReady = (event: GridReadyEvent) => {
    props.onGridReady?.(event);
    gridRef.current = event.api;
  };

  const getContextMenuItems = (
    params: GetContextMenuItemsParams,
  ): (string | MenuItemDef)[] => {
    const result: (string | MenuItemDef)[] = [
      {
        name: t('common:buttons.refresh'),
        action: params => {
          params.api.refreshServerSide({
            purge: true,
          });
        },
      },
      'copy',
    ];

    return result;
  };

  const component = (
    <Box
      width="100%"
      height="100%"
      sx={{
        [`.${_className}`]: {
          '--ag-checkbox-checked-color': theme => theme.palette.primary.main,
        },

        [`.${_className}-dark`]: {
          '--ag-checkbox-checked-color': theme => theme.palette.primary.main,
          '--ag-background-color': theme => theme.palette.background.paper,
          '--ag-header-background-color': theme =>
            theme.palette.background.paper,
        },
        [`& .${_className}`]: {
          fontFamily: theme => `${theme.typography.fontFamily} !important`,
          fontSize: theme => `${theme.typography.body2.fontSize} !important`,
        },
        ['& .ag-horizontal-right-spacer']: {
          overflowX: 'auto !important',
        },
      }}
    >
      <Box width="100%" height="100%" className={_className}>
        <AgGridReact
          key={i18n}
          enableRtl={languageMapper[i18n].direction === 'rtl'}
          localeText={localeTexts[i18n]}
          headerHeight={50}
          defaultColDef={{
            sortingOrder: ['desc', 'asc', null],
            suppressHeaderMenuButton: true,
            ...props.defaultColDef,
          }}
          suppressCellFocus={true}
          rowHeight={40}
          loadingCellRenderer={LoadingCellRenderer}
          suppressRowClickSelection
          {...props}
          onGridReady={onGridReady}
          getContextMenuItems={getContextMenuItems}
        />
      </Box>
    </Box>
  );

  return component;
};

export default memo(DataGrid);
