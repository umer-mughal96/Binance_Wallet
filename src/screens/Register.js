import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { registerUser } from '../actions/auth';
import { Avatar } from '@mui/material';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { LockOutlined } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Spinner from '../components/loader/Spinner';
import { errorNotification, warningNotification } from '../components/Toastify/Toastify';
import validate from '../components/formValidation/FormValidation';
import useForm from '../components/formValidation/useForm';


function Copyright(props) {
    console.log(props)
    return (

        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link to='#' className='same-links'>
                RockSolid Exchange
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

const Register = ({ history }) => {

    const {
        userSignUp,
        setUserSignUp,
        errors,
        handleChange,
        handleClick,
    } = useForm(login, validate)

    function login() {
        console.log('No errors, submit callback called!')
    }

    const [disable, setDisable] = useState(false)
    const selector = useSelector(state => state.Auth)
    const dispatch = useDispatch()
    console.log(selector)

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('submit')
        setDisable(selector.auLoading)
        dispatch(registerUser(userSignUp, history))

        setUserSignUp({
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
          })
    };


    return (
        <ThemeProvider theme={theme}>
            {/* {selector.auLoading ?
                <Spinner /> : */}


            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random)',
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
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >

                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlined />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign Up
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2, width: '100%' }}>
                            <TextField
                                className='set-width'
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="User Name"
                                name="name"
                                autoComplete="name"
                                autoFocus
                                onChange={handleChange}
                                value={userSignUp.name || ''}
                            />
                            <Typography variant="body2" align='left' color='red'>
                                {errors.name && (
                                    <p className="help is-danger">{errors.name}</p>
                                )}
                            </Typography>
                            <TextField
                                className='set-width'
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange={handleChange}
                                value={userSignUp.email || ''}
                            />
                            <Typography variant="body2" align='left' color='red'>
                                {errors.email && (
                                    <p className="help is-danger">{errors.email}</p>
                                )}
                            </Typography>
                            <TextField
                                className='set-width'
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={handleChange}
                                value={userSignUp.password || ''}
                            />
                            <Typography variant="body2" align='left' color='red'>
                                {errors.password && (
                                    <p className="help is-danger">{errors.password}</p>
                                )}
                            </Typography>
                            <TextField
                                className='set-width'
                                margin="normal"
                                required
                                fullWidth
                                name="confirmPassword"
                                label="Confirm Password"
                                type="password"
                                id="confirmPassword"
                                autoComplete="current-confirmPassword"
                                value={userSignUp.confirmPassword || ''}
                                onChange={handleChange}
                            />
                            <Typography variant="body2" align='left' color='red'>
                                {errors.confirmPassword && (
                                    <p className="help is-danger">{errors.confirmPassword}</p>
                                )}
                            </Typography>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={handleClick}
                                disabled={!userSignUp.email || !userSignUp.password || !userSignUp.name || !userSignUp.confirmPassword || userSignUp.password !== userSignUp.confirmPassword || disable}
                            >
                                Sign Up
                            </Button>
                            <Grid container>
                                <Grid item>
                                    <Link to="/login" className='same-links'>
                                        {"Already have an account? Sign In"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            {/* } */}


        </ThemeProvider>
    );
}

export default Register
