import { List } from '@mui/material';
import { FC } from 'react';
import DetailItem, { DetailListItem } from './components/DetailItem';

export interface DetailListProps {
  items: DetailListItem[];
}

const DetailList: FC<DetailListProps> = ({ items }) => {
  return (
    <>
      <List
        sx={{
          p: 0,
        }}
      >
        {items.map((item, index: number) => {
          return <DetailItem key={item.key} index={index} item={item} />;
        })}
      </List>
    </>
  );
};

export default DetailList;
