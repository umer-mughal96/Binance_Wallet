import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Avatar } from '@mui/material';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { LockOutlined } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Spinner from '../components/loader/Spinner';
import { forgetPassAction, loginUser } from '../actions/auth'
import validate from '../components/formValidation/FormValidation';
import useForm from '../components/formValidation/useForm';
import Copyright from '../components/Copyright';
import { LoadingButton } from '@mui/lab';

const ForgetPass = () => {
    const theme = createTheme();

    const {
        forgetPass,
        setforgetPass,
        errors,
        handleChange,
        handleClick,
    } = useForm(login, validate);

    function login() {
        console.log('No errors, submit callback called!');
    }


    console.log(forgetPass)
    const [disable, setDisable] = useState(false)
    const [loader, setLoader] = useState()
    const dispatch = useDispatch()
    const selector = useSelector(state => state.Auth)
    const { auLoading } = selector
    console.log(auLoading)

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!errors.email) {
            dispatch(forgetPassAction(forgetPass))
        }



    };
    return (
        <ThemeProvider theme={theme}>
            {/* {loader ?
            <Spinner />: */}
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
                            Forget Password?
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2, width: '100%' }}>
                            <TextField
                                className='set-width'
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={handleChange}
                                value={forgetPass.email || ''}
                            />
                            <Typography variant="body2" align='left' color='red'>
                                {errors.email && (
                                    <p className="help is-danger">{errors.email}</p>
                                )}
                            </Typography>
                            <LoadingButton type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }} onClick={handleClick} loading={auLoading}

                            >
                                Send Password Reset Link
                            </LoadingButton>
                            <Grid container>
                                <Grid item xs>
                                    <Link to="/login" variant="body2" className='same-links'>
                                        Already Have an account? Sign In
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link to='/' variant="body2" className='same-links'>
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid >
            {/* } */}


        </ThemeProvider >
    )
}

export default ForgetPass
