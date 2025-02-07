import { useSelector } from 'src/store';
import { languageMapper } from 'src/themes';

export interface IUsePinPosition {
  (): 'left' | 'right';
}
const usePinPosition: IUsePinPosition = () => {
  const lang = useSelector(state => state.config.i18n);
  return languageMapper[lang].direction === 'rtl' ? 'right' : 'left';
};

export default usePinPosition;
