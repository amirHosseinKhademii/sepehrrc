import { ButtonIcon } from 'components';
import { ICLogo } from 'icons';
import { useDirection } from 'hooks';
export const LogoButton = () => {
  const { marginRtl, marginLtr } = useDirection();
  return (
    <ButtonIcon className="flex flex-col items-center absolute bottom-0 focus:outline-none">
      <ICLogo className="h-36px w-36px " />
      <span
        className={`uppercase text-gray_shade-300 mt-10px mb-20px ${marginLtr}-auto ${marginRtl}-auto h-28px w-36px  font-lato `}
        style={{ fontSize: '10px', lineHeight: '1.6' }}
      >
        <span className="block">sepehr</span> v2.1
      </span>
    </ButtonIcon>
  );
};
