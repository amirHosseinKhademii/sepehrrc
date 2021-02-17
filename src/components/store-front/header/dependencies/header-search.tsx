import { GeneralLink, Input, GeneralInput } from 'components';
import { ICSearch } from 'icons';
import { useDirection } from 'hooks';
export const HeaderSearch = ({ layout = true, show, showHandler }) => {
  const { leftTR, rightTL } = useDirection();

  return (
    <div className="header-search relative w-full">
      {!show ? (
        // <GeneralLink cssClass="header-search__link" layout={layout} href="/">
        <ICSearch
          height="20px"
          width="20px"
          className="mx-2 fill-current text-20px"
          onClick={() => showHandler(!show)}
        />
      ) : (
        // </GeneralLink>
        <div className={`absolute ${leftTR}-full -top-15px w-full`}>
          <GeneralInput
            layout={layout}
            className="border-none"
            cssClass="header-search__input w-full"
            placeholder="عبارت مورد نظرخود را اینجا وارد کنید"
          />
          <ICSearch
            height="20px"
            width="20px"
            className={`absolute top-16px ${leftTR}-20px fill-current`}
            onClick={() => showHandler(!show)}
          />
        </div>
      )}
    </div>
  );
};
