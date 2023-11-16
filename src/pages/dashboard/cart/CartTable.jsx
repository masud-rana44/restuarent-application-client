import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Trash2 } from 'lucide-react';
import Swal from 'sweetalert2';
import { useAxios } from '../../../hooks/useAxios';
import { useCart } from '../../../hooks/useCart';



export default function CartTable({rows}) {
  const axiosSecure = useAxios()
  const { cartDataRefetch} = useCart()

  const handleDeleteItem = (id) => {
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then(async(result) => {
  if (result.isConfirmed) {
    const res = await axiosSecure.delete(`/cart/${id}`)
    if(res.data.deletedCount > 0) {
      cartDataRefetch()
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    }
  }
});
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className='bg-primary '>
          <TableRow className='text-white font-medium'>
            <TableCell></TableCell>
            <TableCell>ITEM IMAGE</TableCell>
            <TableCell >ITEM NAME</TableCell>
            <TableCell >PRICE</TableCell>
            <TableCell >ACTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <div>1</div>
              </TableCell>
              <TableCell component="th" scope="row">
                <img src={row.image} className='h-16 w-16 rounded-md'/>
              </TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell >${row.price}</TableCell>
              <TableCell >
                <div className='p-2 rounded-sm '>
                  <Trash2 onClick={() => handleDeleteItem(row._id)} className='text-red-600 cursor-pointer'/>
                </div>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
