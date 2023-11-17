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
import { useUser } from '../../../hooks/useUser';



export default function UsersTable({data}) {
  const axiosSecure = useAxios()
  const { refetchUsersData } = useUser()

  const handleDeleteUser = (id) => {
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
    const res = await axiosSecure.delete(`/users/${id}`)
    if(res.data.deletedCount > 0) {
      refetchUsersData()
      Swal.fire({
        title: "Deleted!",
        text: "User deleted successfully.",
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
            <TableCell>No</TableCell>
            <TableCell>IMAGE</TableCell>
            <TableCell >NAME</TableCell>
            <TableCell >Role</TableCell>
            <TableCell >ACTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <div className=' font-medium'>{index + 1}</div>
              </TableCell>
              <TableCell component="th" scope="row">
                <img src={row.image} className='h-12 w-12 object-cover rounded-full'/>
              </TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell >{row.role || 'user'}</TableCell>
              <TableCell >
                <div className='p-2 rounded-sm '>
                  <Trash2 onClick={() => handleDeleteUser(row._id)} className='text-red-600 cursor-pointer'/>
                </div>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
