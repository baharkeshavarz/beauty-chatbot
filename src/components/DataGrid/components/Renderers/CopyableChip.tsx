import { CopyOutlined } from '@ant-design/icons';
import { Chip, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

const CopyableChipRenderer = props => {
  const { t } = useTranslation();

  let value: string = props.value;

  if (value === undefined || value === null) {
    return <span>-</span>;
  }

  const handleClickOnCopy = () => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        toast.success(t('common:messages.toast.copied'));
      })
      .catch(err => {});
  };

  return (
    <Chip
      onClick={handleClickOnCopy}
      variant="outlined"
      size="small"
      sx={{
        cursor: 'pointer',
      }}
      label={
        <Stack direction="row" spacing={1} alignItems="center">
          <CopyOutlined />
          <Typography>{value}</Typography>
        </Stack>
      }
    />
  );
};

export default CopyableChipRenderer;
