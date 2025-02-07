import { useMemo } from 'react';
import moment from 'jalali-moment';
import { useSelector } from 'src/store';

interface UseFormattedDateParams {
  value: string;
  format?: string;
}

const useFormattedDate = ({
  value,
  format = 'YYYY/MM/DD HH:mm',
}: UseFormattedDateParams): string => {
  const i18n = useSelector(state => state.config.i18n);

  const formattedDate = useMemo(() => {
    if (!value) {
      return '-';
    }

    let dateTime = value;
    dateTime = dateTime.replace(' +03:30', '').replace(' ', 'T');

    if (!dateTime.endsWith('Z')) {
      dateTime += 'Z';
    }

    if (i18n === 'fa-IR') {
      return moment(dateTime).locale('fa').format(format);
    }
    return moment(dateTime).format(format);
  }, [value, format, i18n]);

  return formattedDate;
};

export default useFormattedDate;
