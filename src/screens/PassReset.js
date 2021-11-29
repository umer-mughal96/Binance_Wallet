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
import { loginUser, passResetAction } from '../actions/auth'
import validate from '../components/formValidation/FormValidation';
import useForm from '../components/formValidation/useForm';
import Copyright from '../components/Copyright';
import { useLocation } from 'react-router';
import LoadingButton from '@mui/lab/LoadingButton';

const PassReset = ({ history }) => {
    const theme = createTheme();

    const {
        passwordReset,
        setpasswordReset,
        errors,
        handleChange,
        handleClick,
    } = useForm(login, validate)

    function login() {
        console.log('No errors, submit callback called!')
    }
    const dispatch = useDispatch()
    const search = useLocation().search;
    const token = new URLSearchParams(search).get('token');
    console.log("🚀 ~ file: PassReset.js ~ line 42 ~ PassReset ~ token", token)
    const selector = useSelector(state => state.Auth)
    const { auLoading } = selector

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('submit')
        const data = {
            resetPasswordLink: token,
            newPassword: passwordReset.password
        }
        if (!errors.password && !errors.confirmPassword) {

            dispatch(passResetAction(data, history))
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
                            Reset Password
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2, width: '100%' }}>
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
                                value={passwordReset.password || ''}
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
                                value={passwordReset.confirmPassword || ''}
                                onChange={handleChange}
                            />
                            <Typography variant="body2" align='left' color='red'>
                                {errors.confirmPassword && (
                                    <p className="help is-danger">{errors.confirmPassword}</p>
                                )}
                            </Typography>
                            <LoadingButton type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }} onClick={handleClick} loading={auLoading}

                            >
                                Reset Password
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

export default PassReset
