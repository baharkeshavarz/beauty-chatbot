import { Chip } from '@mui/material';

const ChipByValueRenderer = ({ value }) => {
  if (value === undefined || value === null) {
    return <span>-</span>;
  }

  return <Chip variant="outlined" size="small" label={value} />;
};

export default ChipByValueRenderer;
