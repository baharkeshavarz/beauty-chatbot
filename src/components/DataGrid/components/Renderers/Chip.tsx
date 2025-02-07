import { Chip } from '@mui/material';

const ChipRenderer = props => {
  let value: string = props.value;

  if (value === undefined || value === null) {
    return <span>-</span>;
  }

  return <Chip variant="outlined" size="small" label={value} />;
};

export default ChipRenderer;
