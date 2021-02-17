import { FC } from 'react';
import { ICCafeBazar, ICGooglePlay } from 'icons';
export const FooterDownloadButton: FC<IFooterDownloadButton> = ({
  market,
  isDark,
  className,
  settings,
}) => {
  const CafeBazar = () => {
    switch (isDark) {
      case true:
        return <ICCafeBazar fill="#d3d7e1" />;
      case false:
        return <ICCafeBazar fill="#1a191d" />;
      default:
        return <ICCafeBazar fill="#1a191d" />;
        break;
    }
  };
  const GooglePlay = () => {
    switch (isDark) {
      case true:
        return <ICGooglePlay fill="#d3d7e1" />;
      case false:
        return <ICGooglePlay fill="#1a191d" />;
      default:
        return <ICGooglePlay fill="#1a191d" />;
        break;
    }
  };

  return market === 'cafebazar' ? (
    <div className={`${className} ${!settings.mobileApp ? 'hidden' : ''}`}>
      <CafeBazar />
    </div>
  ) : (
    <div className={`${className} ${!settings.mobileApp ? 'hidden' : ''}`}>
      <GooglePlay />
    </div>
  );
};
