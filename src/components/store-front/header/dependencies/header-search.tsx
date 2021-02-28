import { GeneralInput } from 'components';
import { ICSearch, ICMultiply } from 'icons';
import { useDirection } from 'hooks';
export const HeaderSearch = ({ layout = true, show, showHandler }) => {
  const { leftTR, rightTL, language, flexDirection } = useDirection();

  return (
    <div
      className={`sep-header-search relative ${
        show && `w-full`
      } flex ${flexDirection} justify-end `}
    >
      {!show ? (
        <ICSearch
          height="20px"
          width="20px"
          cssClass="sep-header-search__search-ic cursor-pointer"
          className="mx-2 fill-current text-20px"
          onClick={(event) => {
            event.stopPropagation();

            showHandler(!show);
          }}
        />
      ) : (
        <div
          className={`sep-header-search__input-box absolute ${leftTR}-0 -top-15px w-full `}
        >
          <GeneralInput
            layout={layout}
            className="border-gray_shade-300 text-14px focus:outline-none "
            cssClass="sep-header-search__input w-full"
            placeholder={language.HSearchPlaceholder}
            onClick={(e) => {
              e.stopPropagation();
            }}
          />
          <ICMultiply
            height="20px"
            width="20px"
            cssClass="sep-header-search__multiply-ic"
            className={`absolute top-16px ${leftTR}-0 fill-current text-gray_shade-300`}
            onClick={(event) => {
              event.stopPropagation();

              showHandler(!show);
            }}
          />
          <style jsx>
            {`
              div :global(input) {
                border: none;
                border-bottom: 2px solid #9ba3b5;
              }
            `}
          </style>
        </div>
      )}
    </div>
  );
};
