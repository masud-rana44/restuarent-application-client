import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Edit, Trash2 } from 'lucide-react';
import Swal from 'sweetalert2';
import { useAxios } from '../../../hooks/useAxios';
import { useMenu } from '../../../hooks/useMenu';

export default function MenuTable({ data }) {
  const axiosSecure = useAxios()
  const { refetchMenus } = useMenu()

  const handleDeleteItem = (item) => {
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
    const res = await axiosSecure.delete(`/menus/${item._id}`)
    if(res.data.deletedCount > 0) {
      refetchMenus()
      Swal.fire({
        title: "Deleted!",
        text: `${item.name} deleted successfully.`,
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
            <TableCell>#</TableCell>
            <TableCell>ITEM IMAGE</TableCell>
            <TableCell >ITEM NAME</TableCell>
            <TableCell >PRICE</TableCell>
            <TableCell >UPDATE</TableCell>
            <TableCell >DELETE</TableCell>
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
                <img src={row.image} className='h-14 w-14 object-cover rounded-sm'/>
              </TableCell>
              <TableCell component="th" scope="row">
                <span className='font-medium'>{row.name}</span>
              </TableCell>
              <TableCell >
                ${row.price}
              </TableCell>
              <TableCell >
                <div className='px-2 py-3 rounded-sm bg-primary w-12 flex items-center justify-center text-white hover:opacity-75 transition cursor-pointer'>
                  <Edit size={18} />
                </div>
              </TableCell>
              <TableCell >
                <div className='px-2 py-3 rounded-sm bg-red-600 w-12 flex items-center justify-center text-white hover:opacity-75 transition cursor-pointer'>
                  <Trash2 size={18} onClick={() => handleDeleteItem(row)}/>
                </div>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
