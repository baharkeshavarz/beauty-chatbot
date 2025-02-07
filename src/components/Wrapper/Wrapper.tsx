import { Stack } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import { LinkProps } from 'react-router-dom';
import {
  ButtonWithLoading,
  ButtonWithLoadingProps,
} from '../ButtonWithLoading';

export interface WrapperProps {
  buttons?: (ButtonWithLoadingProps & { id: string } & Partial<LinkProps>)[];
}

const Wrapper: FC<PropsWithChildren<WrapperProps>> = ({
  children,
  buttons = [],
}) => {
  return (
    <Stack spacing={2}>
      <Stack spacing={1} direction="row">
        {buttons.length > 0 &&
          buttons.map(button => {
            return <ButtonWithLoading key={button.id} {...button} />;
          })}
      </Stack>
      {children}
    </Stack>
  );
};

export default Wrapper;
