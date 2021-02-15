import { FC } from 'react';

export const FooterDownloadButton: FC<IFooterDownloadButton> = ({
  icon,
  title,
  market,
}) => {
  return (
    <div
      style={{ borderWidth: '1px' }}
      className="h-45px w-155px flex justify-center items-center rounded  border-alert-900"
    >
      <div></div>
      <div className="flex flex-col justify-center items-center">
        <span className="text-8px uppercase">{title}</span>
        <span className="text-12px uppercase">{market}</span>
      </div>
    </div>
  );
};
