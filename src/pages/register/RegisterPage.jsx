import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Swal from 'sweetalert2'
import { useForm } from "react-hook-form"

import bg from '../../assets/others/authentication1.png'
import { useAuth } from '../../contexts/authContext';
import { useNavigate } from 'react-router-dom';
import { SocialLogin } from '../../components/SocialLogin';
import { ImageUpload } from '../../components/ImageUpload';
import { useState } from 'react';
import { useAxiosPublic } from '../../hooks/useAxiosPublic';

    function Copyright(props) {
      return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
          {'Copyright © '}
          <Link color="inherit" href="https://mui.com/">
            Your Website
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      );
    }


// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function RegisterPage() {
  const { createNewUser, updateUser } = useAuth()
  const navigate = useNavigate()
  const { register, handleSubmit, reset } = useForm()
  const [ url, setUrl] = useState(null)
  const axiosPublic = useAxiosPublic()

  const onSubmit = async(data) => {
    try {
    if(!url || !data.name || !data.email || !data.password) throw new Error('Please fill all the fields')

      const userCredentials = await createNewUser(data.email, data.password)
      if(userCredentials.user) {
       await updateUser(data.name, url)



          // add user to mongodb
          const userData = {
            name: data.name,
            email: data.email,
            image: url,
            role: 'user',
            uid: userCredentials.user.uid,
            createdAt: new Date().toISOString()
          }

          const res = await axiosPublic.post('/users', userData)

          if(res.data.acknowledged){
            Swal.fire({
              icon: "success",
              title: "Account created successfully!",
              showConfirmButton: false,
              timer: 1500
            });
            reset()
            navigate('/')
          }

      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error?.message || "Something went wrong!",
      });
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${bg})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 4,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
              <div className='flex items-center space-x-10'>
                <ImageUpload url={url} setUrl={setUrl}/>
              {url && <img src={url} alt="profile" className='w-20 h-20 rounded-full object-cover'/>}
              </div>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Your Name"
                name="name"
                type='text'
                autoComplete="name"
                autoFocus
                {...register(
                  'name',
                  { required: true}
                )}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                { ...register('email', { required: true})}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                {...register('password', { required: true})}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <SocialLogin/>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <div onClick={() => navigate('/login')} className='text-sm cursor-pointer text-blue-400'>
                    {"Already have an account? Login"}
                  </div>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}