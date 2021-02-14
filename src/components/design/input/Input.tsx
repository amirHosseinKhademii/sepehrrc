import { useClass } from 'hooks';
import { FC } from 'react';
import { ICLink } from 'icons';
import { Text } from 'components';
import { Switch } from '../switch';

export const Input: FC<IInput> = ({
  className,
  placeholder,
  label,
  onChange,
  onBlur,
  value,
  variant = 'input',
  maxLength,
  withNumber,
  withLink,
  fontFamily = 'font-body',
  disabled,
  height = '145px',
  withSwitch,
}) => {
  const { join, toggle } = useClass();

  return (
    <div className={toggle('w-full', 'opacity-30', disabled)}>
      {variant === 'input' ? (
        <div className={join('w-full flex flex-col ', className)}>
          <div className="flex justify-between w-full items-center">
            {withSwitch ? <Switch className="mb-14px" /> : <div />}
            {label && (
              <Text className="mb-14px text-14px text-white_shade-100 text-right w-full">
                {label}
              </Text>
            )}
          </div>
          <input
            maxLength={maxLength}
            id={label}
            placeholder={placeholder}
            type={withNumber ? 'number' : 'text'}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            disabled={disabled}
            dir={withLink ? 'ltr' : 'rtl'}
            className={`${fontFamily} focus:outline-none w-full h-54px px-4 rounded text-gray_shade-300 bg-gray_shade-800 placeholder-gray_shade-300 focus:ring-2 focus:ring-blue-500`}
          />
        </div>
      ) : variant === 'inputIcon' ? (
        <div className={join('relative h-54px w-full rounded', className)}>
          <input
            className={`${fontFamily} placeholder-gray_shade-300 rounded focus:outline-none h-full pl-4 pr-12 w-full bg-gray_shade-800 text-white focus:ring-2 focus:ring-blue-500`}
            placeholder={placeholder}
            dir={withLink ? 'ltr' : 'rtl'}
            type={withLink ? 'url' : 'text'}
            onChange={onChange}
            onBlur={onBlur}
            disabled={disabled}
          />
          <div className="absolute inset-y-0 right-4 flex items-center ">
            <ICLink fill="#9ba3b5" />
          </div>
        </div>
      ) : variant === 'textArea' ? (
        <div className={join('w-full flex flex-col items-end', className)}>
          {label && (
            <Text className="mb-14px text-14px text-white_shade-100">
              {label}
            </Text>
          )}
          <textarea
            id={label}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            disabled={disabled}
            dir={withLink ? 'ltr' : 'rtl'}
            className={`${fontFamily} h-${height} p-16px focus:outline-none w-full  px-4 rounded text-gray_shade-300 bg-gray_shade-800 placeholder-gray_shade-300 focus:ring-2 focus:ring-blue-500`}
          ></textarea>
        </div>
      ) : null}
      <style jsx>
        {`
          input::-webkit-outer-spin-button,
          input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          /* Firefox */
          input[type='number'] {
            -moz-appearance: textfield;
          }
        `}
      </style>
    </div>
  );
};
