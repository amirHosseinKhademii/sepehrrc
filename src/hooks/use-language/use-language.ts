import { useDesign } from 'hooks';
import { en, fa } from 'languages';
export const useLanguage = () => {
  const { designState } = useDesign();
  const { language } = designState.pageSettings;
  return {
    languageText: language === 'farsi' ? fa : en,
  };
};
