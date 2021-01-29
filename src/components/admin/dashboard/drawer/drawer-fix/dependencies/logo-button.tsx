import { ButtonIcon } from 'components';
import { ICLogo } from 'icons';

export const LogoButton = () => (
  <ButtonIcon className="flex flex-col items-center absolute bottom-0 focus:outline-none">
    <ICLogo className="h-36px w-36px " />
    <span className="uppercase text-gray_shade-300 mt-10px mb-20px ml-auto mr-auto w-36px text-sm font-lato ">
      sepehr v2.1
    </span>
  </ButtonIcon>
);
