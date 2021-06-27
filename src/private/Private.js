import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => (
    
	<Route
		{...rest}
		render={(props) =>
			localStorage.getItem("access") ? (
				<Component {...props} />
			) : (
				<Redirect
					to={{
						pathname: '/login',
						state: { from: props.location },
					}}
				/>
			)
		}></Route>
);

export default PrivateRoute;
