import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function OrdersTable({ data }) {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className='bg-primary '>
          <TableRow className='text-white font-medium'>
            <TableCell>#</TableCell>
            <TableCell> PAYMENT_ID</TableCell>
            <TableCell >TOTAL AMOUNT</TableCell>
            <TableCell >PAYMENT DATE</TableCell>
            <TableCell >STATUS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className='text-dark'>
          {data.map((row, index) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <div className=' font-medium'>{index + 1}</div>
              </TableCell>
              <TableCell component="th" scope="row">
                <span className='font-medium'>{row.paymentId}</span>
              </TableCell>
              <TableCell >
                ${row.total}
              </TableCell>
              <TableCell >
                {new Date(row.createdAt).toLocaleDateString()}
              </TableCell>
              <TableCell>
                {row.status}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
