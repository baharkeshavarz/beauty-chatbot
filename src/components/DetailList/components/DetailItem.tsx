import { Check, Close } from '@mui/icons-material';
import {
  Box,
  ListItem,
  ListItemProps,
  ListItemText,
  Typography,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { FC } from 'react';

export interface DetailListItem {
  key: string;
  value: any;
  position?: 'bottom' | 'top';
  type?: 'price' | 'percentage';
}

export type DetailItemProps = ListItemProps & {
  index?: number;
  item: DetailListItem;
};
const DetailItem: FC<DetailItemProps> = ({ item, index, ...props }) => {
  const isBoolean = typeof item.value === 'boolean';
  const isNumber = typeof item.value === 'number';

  const prefix = item.type === 'percentage' ? '%' : '';
  const suffix = item.type === 'price' ? ' ریال' : '';

  const action = isBoolean ? (
    item.value ? (
      <Check color="success" />
    ) : (
      <Close color="error" />
    )
  ) : isNumber ? (
    <Typography>{`${prefix}${item.value?.toLocaleString()}${suffix}`}</Typography>
  ) : (
    <Typography dir="auto">{item.value || '-'}</Typography>
  );

  const _position = item.position || item.value?.length > 46 ? 'bottom' : 'top';

  return (
    <>
      <ListItem
        sx={{
          bgcolor: theme =>
            index % 2 === 1
              ? theme.palette.mode === 'dark'
                ? grey[700]
                : grey[100]
              : null,
        }}
        secondaryAction={_position === 'top' && action}
        {...props}
      >
        <ListItemText
          primary={
            <Typography
              sx={{
                fontWeight: 600,
                textTransform: 'capitalize',
              }}
            >
              {item.key}
            </Typography>
          }
          secondary={
            _position === 'bottom' && <Box sx={{ mt: 1 }}>{action}</Box>
          }
        />
      </ListItem>
    </>
  );
};

export default DetailItem;
