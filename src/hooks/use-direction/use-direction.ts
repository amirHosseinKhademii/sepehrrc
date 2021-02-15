import { useDesign } from 'hooks';

export const useDirection = () => {
  const { designState } = useDesign();
  const { direction } = designState.pageSettings;
  return {
    flexDirection: direction === 'rtl' ? 'flex-row-reverse' : 'flex-row',
    dirRtl: direction === 'rtl' ? 'rtl' : 'ltr',
    rightTL: direction === 'rtl' ? 'right' : 'left',
    leftTR: direction === 'rtl' ? 'left' : 'right',
    marginRtl: direction === 'rtl' ? 'mr' : 'ml',
    marginLtr: direction === 'rtl' ? 'ml' : 'mr',
    paddingRtl: direction === 'rtl' ? 'pr' : 'pl',
    paddingLtr: direction === 'rtl' ? 'pl' : 'pr',
    absoluteRtl: direction === 'rtl' ? 'right' : 'left',
    absoluteLtr: direction === 'rtl' ? 'text-left' : 'text-left',
    textAlign: direction === 'rtl' ? 'text-right' : 'text-left',
  };
};
