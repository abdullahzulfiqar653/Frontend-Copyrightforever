import React, { useContext } from 'react';
import Model from '../../../components/Model';
import { Button, TextField, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { multiStepContext } from '../FormThree.js';

function EighthStep({ setStep, setModal, modal }) {
	const { userData, setUserData } = useContext(multiStepContext);
	return (
		<div>
			<h4 style={{ color: '#ff0000 ' }}>Almost Done</h4>
			<h3 className='d-flex justify-content-between'>
				Appointment of CopyrightForever as Agency{' '}
				{/* <Button onClick={() => setModal(true)} variant='contained' color='secondary'>
					POA
				</Button> */}
			</h3>
			<div>
				<div component='fieldset' className='mt-4 fieldset'>
					<h5 style={{ lineHeight: '1.7' }}>
						I hereby appoint CopyrightForever.com (CF) and its agents, employees, and/or lawyer(s)
						as my agent or attorney-in-fact for all purposes relating to the filing and registration
						of my application for copyright with the U.S. Library of Congress, Copyright Office
					</h5>

					<h5 className='mt-3' style={{ lineHeight: '1.7' }}>
						I acknowledge that this is a limited, specific grant of agency for registration purposes
						and not for any other purpose or for general agency purposes. I acknowledge that when
						this is electronically signed by me, or provided to CF in written, signed form, CF may
						rely upon my authorization and take all actions on my behalf to file and/or register my
						copyright application(s). This agency will automatically terminate when the registration
						process has been completed
					</h5>
				</div>
			</div>
			<div className='d-flex input_contained'>
				<TextField
					label='Your Name'
					margin='normal'
					variant='outlined'
					color='secondary'
					className='mr-3'
					value={userData['yourName']}
					onChange={(e) => setUserData({ ...userData, yourName: e.target.value })}
				/>
				<TextField
					label='Date'
					margin='normal'
					variant='outlined'
					color='secondary'
					value={userData['date']}
					onChange={(e) => setUserData({ ...userData, date: e.target.value })}
				/>
			</div>
			<div>
				<TextField
					label=' Address'
					margin='normal'
					variant='outlined'
					color='secondary'
					value={userData['address']}
					onChange={(e) => setUserData({ ...userData, address: e.target.value })}
				/>
			</div>

			<div className='d-flex input_contained'>
				<TextField
					label='City'
					margin='normal'
					variant='outlined'
					color='secondary'
					className='mr-3'
					value={userData['city']}
					onChange={(e) => setUserData({ ...userData, city: e.target.value })}
				/>
				<FormControl className='mr-3' variant='outlined' margin='normal'>
					<InputLabel id='demo-simple-select-outlined-label'>State</InputLabel>
					<Select
						labelId='demo-simple-select-outlined-label'
						id='demo-simple-select-outlined'
						label='Age'
						value={userData['state']}
						onChange={(e) => setUserData({ ...userData, state: e.target.value })}
					>
						<MenuItem value=''>
							<em>None</em>
						</MenuItem>
						<MenuItem value={10}>Ten</MenuItem>
						<MenuItem value={20}>Twenty</MenuItem>
						<MenuItem value={30}>Thirty</MenuItem>
					</Select>
				</FormControl>
				<TextField
					label='Zip Code'
					margin='normal'
					variant='outlined'
					color='secondary'
					value={userData['zipCode']}
					onChange={(e) => setUserData({ ...userData, zipCode: e.target.value })}
				/>
			</div>

			{/* <Model show={modal} onHide={() => setModal(false)} /> */}

			<Button onClick={() => setStep(7)} variant='contained' color='secondary'>
				Previous
			</Button>
			<Button onClick={() => setStep(9)} variant='contained' color='primary'>
				Next
			</Button>
		</div>
	);
}

export default EighthStep;
