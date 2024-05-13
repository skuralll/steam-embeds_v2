import { ComponentProps, ReactNode } from 'react';
import Button from './Button';
import Spinner from './Spinner';

type Props = {
  isLoading: boolean;
  children: ReactNode;
} & ComponentProps<'button'>;

const LoadingButton = ({ isLoading = false, children, ...props }: Props) => {
  return (
    <Button disabled={props.disabled == true || isLoading} {...props}>
      {isLoading ? (
        <div className="h-4 w-4 mr-2">
          <Spinner />
        </div>
      ) : (
        <></>
      )}
      {children}
    </Button>
  );
};

export default LoadingButton;
