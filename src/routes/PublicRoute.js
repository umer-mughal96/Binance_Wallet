import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'

const PublicRoute = ({ component: Component, ...rest }) => {
    const state = useSelector(state => state.Auth)
    const isLogin = state?.user ? true : false;
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            !isLogin ?
                <>
                    <Component {...props} />
                </>
                : <Redirect to="/exchange" />
        )} />
    );
};

export default PublicRoute;
