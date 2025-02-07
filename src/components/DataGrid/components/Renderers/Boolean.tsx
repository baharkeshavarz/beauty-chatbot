import { Check, Close } from '@mui/icons-material';
import { Stack } from '@mui/material';

const BooleanRenderer = props => {
  let booleanValue: string = props.value;

  if (booleanValue === undefined || booleanValue === null) {
    return <span>-</span>;
  }

  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        height: '100%',
      }}
    >
      {booleanValue ? <Check color="success" /> : <Close color="error" />}
    </Stack>
  );
};

export default BooleanRenderer;
