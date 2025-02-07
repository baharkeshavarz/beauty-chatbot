import { CustomCellRendererProps } from 'ag-grid-react';
import useFormattedDate from 'src/components/Shared/useFormattedDate';

const DateRenderer = (props: CustomCellRendererProps) => {
  const date = useFormattedDate({
    value: props.value,
    format: 'YYYY/MM/DD HH:mm',
  });

  return <div dir="ltr">{date}</div>;
};

export default DateRenderer;
