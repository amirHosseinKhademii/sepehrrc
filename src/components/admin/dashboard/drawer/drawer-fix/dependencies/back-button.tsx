import { ButtonIcon } from 'components';
import { ICArrowRight } from 'icons';

export const BackButton = ({ handleClickBackButton }) => (
  <ButtonIcon
    className="flex justify-center items-center h-82px w-68px py-17px"
    onClick={() => handleClickBackButton()}
  >
    <ICArrowRight />
  </ButtonIcon>
);
