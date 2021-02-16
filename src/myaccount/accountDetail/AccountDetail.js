import React, {useEffect, useState} from "react";
import { Button, TextField,FormLabel } from '@material-ui/core';
import { load_user, update_profile} from '../../actions/auth';
import { connect, useDispatch } from 'react-redux';
import Loader from 'react-loader-spinner'

const AccountDetail = ({ user, isLoading }) => {
	const [userProfile, setUserProfile] = useState([])
	const dispatch = useDispatch();

	const onChange = (e) => {
		setUserProfile({ ...user.profile, [e.target.name]: e.target.value })
	}

	const onSubmit = (e) => {
		e.preventDefault();
		console.log(userProfile)
		const { phone, address, state, postcode } = userProfile;
		dispatch(update_profile(phone, address, state, postcode));
	}

  return (
    <section>
    <h1 className="pt-3 pb-0"><span>Account Information</span></h1>
    
    <div>
			  <TextField
				  defaultValue={user && user.useremail}
					label='Email'
					margin='normal'
					variant='outlined'
					color='secondary'
				  className='mr-3'
				  disabled
				/>
      </div>
      <div>
			  <TextField
				  defaultValue={user && user.username}
					label='Name'
					margin='normal'
					variant='outlined'
					color='secondary'
				  className='mr-3'
				  disabled
				/>
		  </div>
		  <form onSubmit={(e)=> onSubmit(e)}>
				<TextField
				  defaultValue={user && user.profile.phone}
				  name='phone'
					label='Phone Number'
					margin='normal'
					variant='outlined'
					color='secondary'
				  className='mr-3'
				  onChange={(e) => onChange(e)}
				/>
				<TextField
				  defaultValue={user && user.profile.address}
				  name='address'
					label='Address'
					margin='normal'
					variant='outlined'
					color='secondary'
				  className='mr-3'
				  onChange={(e) => onChange(e)}
			  />
			  <TextField
				  defaultValue={user && user.profile.state}
				  name='state'
					label='State'
					margin='normal'
					variant='outlined'
					color='secondary'
				  className='mr-3'
				  onChange={(e) => onChange(e)}
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
				/>
     		 <Button  variant='contained' className="px-5 my-3" type="submit" style={{background:"red",color:"white"}}>
				{isLoading ? (
						<Loader
							style={{ display: 'inline-block' }}
							type='ThreeDots'
							color='white'
							height={5}
							width={30}
						/>
					) : ('')}
				  Submit
		</Button>
			  </form>
    </section>
  );
};

const mapStateToProps = (state) => ({
	isLoading: state.auth.loading,
	user: state.auth.user
})

export default connect(mapStateToProps,{load_user})(AccountDetail);