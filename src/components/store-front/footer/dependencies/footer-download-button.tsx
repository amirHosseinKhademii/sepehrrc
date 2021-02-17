import { FC } from 'react';
import { SVGCafeBazar, SVGGooglePlay } from 'svgs';
export const FooterDownloadButton: FC<IFooterDownloadButton> = ({
  market,
  isDark,
  className,
}) => {
  const CafeBazar = () => {
    switch (isDark) {
      case true:
        return <SVGCafeBazar fill="#d3d7e1" />;
      case false:
        return <SVGCafeBazar fill="#1a191d" />;
      default:
        return <SVGCafeBazar fill="#1a191d" />;
        break;
    }
  };
  const GooglePlay = () => {
    switch (isDark) {
      case true:
        return <SVGGooglePlay fill="#d3d7e1" />;
      case false:
        return <SVGGooglePlay fill="#1a191d" />;
      default:
        return <SVGGooglePlay fill="#1a191d" />;
        break;
    }
  };

  return market === 'cafebazar' ? (
    <div className={`${className}`}>
      <CafeBazar />
    </div>
  ) : (
    <div className={`${className}`}>
      <GooglePlay />
    </div>
  );
};
