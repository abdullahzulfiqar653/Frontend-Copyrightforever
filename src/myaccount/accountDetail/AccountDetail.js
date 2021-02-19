import React, { useEffect, useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { load_user, update_profile } from '../../actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';

const AccountDetail = () => {
	const [userProfile, setUserProfile] = useState([]);
	const dispatch = useDispatch();
	const isLoading = useSelector((state) => state.auth.loading);
	const user = useSelector((state) => state.auth.user);
	useEffect(() => {
		dispatch(load_user());
	}, [dispatch]);

	const onChange = (e) => {
		setUserProfile({ ...user.profile, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		const { phone, address, state, postcode } = userProfile;
		dispatch(update_profile(phone, address, state, postcode));
	};

	return (
		<section>
			<h1 className='pt-3 pb-0'>
				<span>Account Information</span>
			</h1>

			<div>
				<TextField
					label='Email'
					margin='normal'
					variant='outlined'
					color='secondary'
					className='mr-3'
					key={`Email:${user && user.useremail}`}
					defaultValue={user && user.useremail}
					disabled
				/>
			</div>
			<div>
				<TextField
					label='Name'
					margin='normal'
					variant='outlined'
					color='secondary'
					className='mr-3'
					disabled
					key={`name:${user && user.username}`}
					defaultValue={user && user.username}
				/>
			</div>
			<form onSubmit={(e) => onSubmit(e)}>
				<TextField
					name='phone'
					label='Phone Number'
					margin='normal'
					variant='outlined'
					color='secondary'
					className='mr-3'
					onChange={(e) => onChange(e)}
					key={`phone:${user && user.profile.phone}`}
					defaultValue={user && user.profile.phone}
				/>
				<TextField
					name='address'
					label='Address'
					margin='normal'
					variant='outlined'
					color='secondary'
					className='mr-3'
					onChange={(e) => onChange(e)}
					key={`address:${user && user.profile.address}`}
					defaultValue={user && user.profile.address}
				/>
				<TextField
					name='state'
					label='State'
					margin='normal'
					variant='outlined'
					color='secondary'
					className='mr-3'
					onChange={(e) => onChange(e)}
					key={`State:${user && user.profile.state}`}
				/>
				<TextField
					defaultValue={user && user.profile.postcode}
					name='postcode'
					label='PostCode'
					margin='normal'
					variant='outlined'
					color='secondary'
					className='mr-3'
					onChange={(e) => onChange(e)}
					key={`postcode:${user && user.profile.state}`}
				/>
				<Button
					variant='contained'
					className='px-5 my-3'
					type='submit'
					style={{ background: 'red', color: 'white' }}
				>
					{isLoading ? (
						<Loader
							style={{ display: 'inline-block' }}
							type='ThreeDots'
							color='white'
							height={5}
							width={30}
						/>
					) : (
						''
					)}
					Submit
				</Button>
			</form>
		</section>
	);
};

export default AccountDetail;
