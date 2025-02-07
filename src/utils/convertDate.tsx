import { FC, useMemo } from 'react';
import moment from 'jalali-moment';
import { useSelector } from 'src/store';

interface DateConvertorProps {
  value: string;
  formatter?: string;
}

const DateConvertor: FC<DateConvertorProps> = ({
  value,
  formatter = "YYYY/MM/DD HH:mm'",
}) => {
  const i18n = useSelector(state => state.config.i18n);

  const date = useMemo(() => {
    let dateTime: string = value;
    if (!dateTime) {
      return '-';
    }
    dateTime = dateTime.replace(' +03:30', '').replace(' ', 'T');

    if (!dateTime.endsWith('Z')) {
      dateTime += 'Z';
    }

    if (i18n === 'fa-IR') {
      return moment(dateTime).locale('fa').format(formatter);
    }
    return moment(dateTime).format(formatter);
  }, [value, i18n]);

  return <div dir="ltr">{date}</div>;
};

export default DateConvertor;
