import { Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

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

export default Copyright