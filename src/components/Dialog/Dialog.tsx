import { Close } from '@mui/icons-material';
import { Box, DialogActions, IconButton } from '@mui/material';
import MuiDialog, {
  type DialogProps as MuiDialogProps,
} from '@mui/material/Dialog';
import DialogContent, { DialogContentProps } from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { FC } from 'react';
import {
  type ButtonWithLoadingProps,
  ButtonWithLoading,
} from '../ButtonWithLoading';
import { DialogTransition } from '../DialogTransition';

export interface DialogProps extends MuiDialogProps {
  dialogContentProps?: DialogContentProps;
  dialogButtons?: ButtonWithLoadingProps[];
}

const Dialog: FC<DialogProps> = ({ title, ...props }) => {
  return (
    <MuiDialog TransitionComponent={DialogTransition} {...props}>
      <DialogTitle
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {title}
        <IconButton
          aria-label="close-dialog"
          onClick={() => {
            props.onClose({}, 'escapeKeyDown');
          }}
        >
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent {...props.dialogContentProps}>
        <Box mt={1}>{props.children}</Box>
      </DialogContent>
      {props?.dialogButtons?.length > 0 && (
        <DialogActions>
          {props?.dialogButtons.map((button, index) => {
            return <ButtonWithLoading key={index} {...button} />;
          })}
        </DialogActions>
      )}
    </MuiDialog>
  );
};

export default Dialog;
