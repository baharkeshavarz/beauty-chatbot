import { useMemo } from 'react';
import { useSelector } from 'src/store';

export interface IUseGetPageTitle {
  ({ pathname }: { pathname: string }): string | null;
}
const useGetPageTitle: IUseGetPageTitle = ({ pathname }) => {
  const privileges = useSelector(state => state.privileges);

  const getTitleByPathName = () => {
    const flattenItems = privileges.flatMap(item => item.subMenu ?? item);
    const page = flattenItems.find(
      item => item.url?.toLowerCase() === pathname?.toLowerCase(),
    );
    return page?.title ?? null;
  };

  const value = useMemo(() => {
    if (!pathname || !privileges) {
      return null;
    }
    return getTitleByPathName();
  }, [privileges]);

  return value;
};

export default useGetPageTitle;
