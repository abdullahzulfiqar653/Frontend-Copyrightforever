import React, { useState } from 'react';
import { Link, Redirect} from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import { TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import Loader from "react-loader-spinner"


const LoginScreen = ({ login, isLoading, isAuthenticated, error }) => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});
	
	
	const { email, password } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		await login(email, password);
	} 

	if (isAuthenticated) {
			console.log("authenticated: ", isLoading)
		return (<Redirect to='/' />)
	}

	return (
		<FormContainer>
			<h1>
				<span>Sign In</span>
			</h1>
			<Form onSubmit={(e) => onSubmit(e)}>
				
				<Form.Group controlId='email'>
					<Form.Label>Email Address</Form.Label>
					<TextField
						name="email"
						label='Email Address'
						margin='normal'
						variant='outlined'
						color='secondary'
						className='mr-3'
						onChange={(e) => onChange(e)}
					/>
				</Form.Group>

				<Form.Group controlId='password'>
					<Form.Label>Password</Form.Label>
					<TextField
						name="password"
						label='Password'
						margin='normal'
						variant='outlined'
						color='secondary'
						className='mr-3'
						type="password"
						onChange={(e) => onChange(e)}
					/>
				</Form.Group>

				<Button
					style={{ backgroundColor: 'red', color: 'white', fontSize: '14px' }}
					type='submit'
					variant='primary'>
					{isLoading ? (
						<Loader
							style={{ display: 'inline-block' }}
							type="ThreeDots"
							color='white'
							height={5}
							width={30}
						/>
							) : ('')}
					Sign In
				</Button>
				{error != null || error != undefined
					? Object.keys(error.data).map((key, index) => (
							<ul key={index} style={{ paddingLeft: '10px', margin:'10px' }}>
								<li style={{ color: '#E0115F', fontSize: '15px', listStyleType:"square" }}>
								<span><strong>{key.toUpperCase()}</strong> : </span>
									<span><strong>{error.data[key]}</strong></span>
								</li>
							</ul>
					))
				: null}
			</Form>

			<Row className='py-3'>
				<Col>
					New To CopyRightForever ?{' '}
					<Link to='/register' style={{ color: 'red ', fontSize: '20px' }}>
						Register
					</Link>
				</Col>
			</Row>
		</FormContainer>
	);
};

const mapStateToProps = (state) => ({
	isLoading: state.auth.loading,
	isAuthenticated: state.auth.isAuthenticated,
	error: state.auth.error
})

export default connect(mapStateToProps, {login})(LoginScreen);
