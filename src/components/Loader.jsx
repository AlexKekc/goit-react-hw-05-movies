import { RotatingLines } from 'react-loader-spinner';
import { LoaderSpinner } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderSpinner>
      <RotatingLines
        strokeColor="#ffa500"
        strokeWidth="5"
        animationDuration="0.75"
        width="50"
      />
    </LoaderSpinner>
  );
};
