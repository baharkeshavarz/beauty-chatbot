import { CopyOutlined } from '@ant-design/icons';
import { Chip, IconButtonProps, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

export interface CopyToClipboardProps extends IconButtonProps {
  value: string;
}
const CopyToClipboard: FC<CopyToClipboardProps> = ({ value, ...other }) => {
  const { t } = useTranslation();

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        toast.success(t('common:messages.toast.copied'));
      })
      .catch(err => {});
  };

  return (
    <Chip
      onClick={handleCopyClick}
      variant="outlined"
      size="small"
      sx={{
        cursor: 'pointer',
      }}
      label={
        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          alignItems="center"
          gap={0.2}
        >
          <CopyOutlined />
          <Typography>{value}</Typography>
        </Stack>
      }
    />
  );
};

export default CopyToClipboard;
