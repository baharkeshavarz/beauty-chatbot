import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Link,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

import Dot from '../../../components/@extended/Dot';
import { ColorProps } from 'src/types/extended';
import { useTranslation } from 'react-i18next';
import useDashboardOrdersList from 'src/pages/Home/hooks/useDashboardOrdersList';
import userOrderStatusMapper from 'src/pages/users/hooks/userOrderStatusMapper';
import UsePaymentStatusMapper from 'src/pages/AdminOrders/hooks/usePaymentStatusMapper';
import NoDataFound from 'src/components/NoDataFound';

interface Data {
  status: string;
  total_amount: number;
  amount: number;
  order_id: number;
  payment_status: number;
}

function createData(
  order_id: number,
  status: string,
  amount: number,
  total_amount: number,
  payment_status: number,
): Data {
  return { order_id, status, amount, total_amount, payment_status };
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number,
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  align: 'center' | 'left' | 'right' | 'inherit' | 'justify' | undefined;
}

interface OrderTableHeadProps {
  order: Order;
  orderBy: string;
}

function OrderTableHead({ order, orderBy }: OrderTableHeadProps) {
  const { t } = useTranslation();

  const headCells: readonly HeadCell[] = [
    {
      id: 'order_id',
      align: 'left',
      disablePadding: false,
      label: t('pages:PendingRequests.orderId'),
    },
    {
      id: 'status',
      align: 'left',
      disablePadding: true,
      label: t('pages:PendingRequests.status'),
    },
    {
      id: 'amount',
      align: 'left',
      disablePadding: false,
      label: t('pages:PendingRequests.amount'),
    },
    {
      id: 'total_amount',
      align: 'left',
      disablePadding: false,
      label: t('pages:PendingRequests.totalAmount'),
    },
    {
      id: 'payment_status',
      align: 'left',
      disablePadding: false,
      label: t('pages:PendingRequests.paymentStatus'),
    },
  ];
  return (
    <TableHead>
      <TableRow>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={headCell.align}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

interface Props {
  status: number;
}

export default function OrderTable() {
  const [order] = useState<Order>('asc');
  const [orderBy] = useState<keyof Data>('order_id');
  const orderStatusMapper = userOrderStatusMapper();
  const orderPaymentMapper = UsePaymentStatusMapper();

  const { data: ordersList, isPending } = useDashboardOrdersList({
    filter: {},
    page: 1,
    page_size: 7,
  });

  const rows = [];
  ordersList?.result.forEach(order => {
    rows.push(
      createData(
        order.order_id,
        orderStatusMapper[order.status].title,
        order.amount,
        order.total_amount,
        orderPaymentMapper[order.payment_status].title,
      ),
    );
  });

  return (
    <Box>
      <TableContainer
        sx={{
          width: '100%',
          overflowX: 'auto',
          position: 'relative',
          display: 'block',
          maxWidth: '100%',
          '& td, & th': { whiteSpace: 'nowrap' },
        }}
      >
        <Table
          aria-labelledby="tableTitle"
          sx={{
            '& .MuiTableCell-root:first-of-type': {
              pl: 2,
            },
            '& .MuiTableCell-root:last-child': {
              pr: 3,
            },
          }}
        >
          <OrderTableHead order={order} orderBy={orderBy} />
          {rows.length === 0 && !isPending && (
            <TableBody>
              <TableRow>
                <TableCell colSpan={6}>
                  <NoDataFound />
                </TableCell>
              </TableRow>
            </TableBody>
          )}

          {rows.length > 0 && (
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy)).map(
                (row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      tabIndex={-1}
                      key={row.order_id}
                    >
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        align="left"
                      >
                        <Link color="secondary" component={RouterLink} to="">
                          {row.order_id}
                        </Link>
                      </TableCell>
                      <TableCell align="left">{row.status}</TableCell>
                      <TableCell align="left">{row.amount}</TableCell>
                      <TableCell align="left">{row.total_amount}</TableCell>
                      <TableCell align="left">{row.payment_status}</TableCell>
                    </TableRow>
                  );
                },
              )}
            </TableBody>
          )}
        </Table>
      </TableContainer>
    </Box>
  );
}
