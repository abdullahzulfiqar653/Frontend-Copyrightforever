import React, {useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import { TextField } from '@material-ui/core';
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { signup } from "../actions/auth";


const RegisterScreen = ({ signup, isLoading, isAuthenticated, error}) => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		re_password: '',
	})

	const { name, email, password, re_password } = formData;
	const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })
	
	const onSubmit = (e) => {
		e.preventDefault()
		signup(name, email, password, re_password)
	}
	if (isAuthenticated) {
		return <Redirect to="/" />;
	}
	return (
		<FormContainer>
			<h1>
				<span>Sign Up</span>
			</h1>
			<Form onSubmit={(e) => onSubmit(e)}>
				<Form.Group controlId='name'>
					<Form.Label>Name</Form.Label>
					<TextField
						label='Name'
						name='name'
						margin='normal'
						variant='outlined'
						color='secondary'
						className='mr-3'
						onChange={(e)=>onChange(e)}
					/>
				</Form.Group>

				<Form.Group controlId='email'>
					<Form.Label>Email Address</Form.Label>
					<TextField
						label='Email Address'
						name='email'
						margin='normal'
						variant='outlined'
						color='secondary'
						className='mr-3'
						onChange={(e)=>onChange(e)}
					/>
				</Form.Group>

				<Form.Group controlId='password'>
					<Form.Label>Password</Form.Label>
					<TextField
						label='Password'
						name='password'
						margin='normal'
						variant='outlined'
						color='secondary'
						className='mr-3'
						type="password"
						onChange={(e)=>onChange(e)}
					/>
				</Form.Group>

				<Form.Group controlId='confirmPassword'>
					<Form.Label>Confirm Password</Form.Label>
					<TextField
						label='Confirm Password'
						name='re_password'
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
					variant='contained'
					color='primary'>
					
					{isLoading ? (
						<Loader
							style={{ display: 'inline-block' }}
							type="ThreeDots"
							color='white'
							height={5}
							width={30}
						/>
					) : ('')}
					
					Register
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
					Have an Account?{' '}
					<Link style={{ color: 'red ', fontSize: '20px' }} to='/login'>
						Login
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

export default connect(mapStateToProps, {signup})(RegisterScreen);
