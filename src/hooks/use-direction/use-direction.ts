import { useDesign } from 'hooks';
import { en, fa } from 'languages';

export const useDirection = () => {
  const { designState } = useDesign();
  const { direction, language } = designState.pageSettings;
  return {
    language: language === 'rtl' ? fa : en,
    flexDirection: direction === 'rtl' ? 'flex-row-reverse' : 'flex-row',
    dirRtl: direction === 'rtl' ? 'rtl' : 'ltr',
    dirLtr: direction === 'rtl' ? 'ltr' : 'rtl',
    rightTL: direction === 'rtl' ? 'right' : 'left',
    leftTR: direction === 'rtl' ? 'left' : 'right',
    marginRtl: direction === 'rtl' ? 'mr' : 'ml',
    marginLtr: direction === 'rtl' ? 'ml' : 'mr',
    paddingRtl: direction === 'rtl' ? 'pr' : 'pl',
    paddingLtr: direction === 'rtl' ? 'pl' : 'pr',
    absoluteRtl: direction === 'rtl' ? 'right' : 'left',
    absoluteLtr: direction === 'rtl' ? 'text-left' : 'text-left',
    textAlignRtl: direction === 'rtl' ? 'text-right' : 'text-left',
    textAlignLtr: direction === 'rtl' ? 'text-left' : 'text-right',
  };
};
