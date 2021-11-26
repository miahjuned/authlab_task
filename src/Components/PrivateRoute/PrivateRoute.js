import React, { useContext, useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router'
import { userContext } from '../../App';


const PrivateRoute = ({ children, ...rest }) => {

    const { user } = useContext(userContext);

    return (
        <Route
            {...rest}
            render={({ location }) =>
            user.role === "admin" ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
