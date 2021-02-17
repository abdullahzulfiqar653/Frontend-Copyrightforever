import React from 'react';
import { Button, TextField, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import Model from '../../../components/Model';

function EighthStep({ setStep, setModal, modal }) {
	return (
		<div>
			<h4 style={{ color: '#ff0000 ' }}>Almost Done</h4>
			<h3 className='d-flex justify-content-between'>
				Appointment of CopyrightForever as Agency{' '}
				{/* <Button onClick={() => setModal(true)} variant='contained' color='secondary'>
					POA
				</Button>{' '} */}
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
				/>
				<TextField
					id='date'
					label='Date'
					type='date'
					defaultValue='2017-05-24'
					margin='normal'
					variant='outlined'
					color='secondary'
					InputLabelProps={{
						shrink: true,
					}}
				/>
			</div>
			<div>
				<TextField label=' Address' margin='normal' variant='outlined' color='secondary' />
			</div>
			<div className='d-flex input_contained'>
				<TextField
					label='City'
					margin='normal'
					variant='outlined'
					color='secondary'
					className='mr-3'
				/>
				<FormControl className='mr-3' variant='outlined' margin='normal'>
					<InputLabel id='demo-simple-select-outlined-label'>State</InputLabel>
					<Select
						labelId='demo-simple-select-outlined-label'
						id='demo-simple-select-outlined'
						label='Age'
					>
						<MenuItem value=''>
							<em>None</em>
						</MenuItem>
						<MenuItem value='Alabama'>Alabama</MenuItem>
						<MenuItem value='Alaska'>Alaska</MenuItem>
						<MenuItem value='Arizona'>Arizona</MenuItem>
						<MenuItem value='California'>California</MenuItem>
						<MenuItem value='Colorado'>Colorado</MenuItem>
						<MenuItem value='Connecticut'>Connecticut</MenuItem>
						<MenuItem value='Delaware'>Delaware</MenuItem>
						<MenuItem value='Florida'>Florida</MenuItem>
						<MenuItem value='Georgia'>Georgia</MenuItem>
						<MenuItem value='Hawaii'>Hawaii</MenuItem>
						<MenuItem value='Idaho'>Idaho</MenuItem>
						<MenuItem value='Illinois'>Illinois</MenuItem>
						<MenuItem value='Indiana'>Indiana</MenuItem>
						<MenuItem value='Iowa'>Iowa</MenuItem>
						<MenuItem value='Kansas'>Kansas</MenuItem>
						<MenuItem value='Kentucky'>Kentucky</MenuItem>
						<MenuItem value='Louisiana'>Louisiana</MenuItem>
						<MenuItem value='Maine'>Maine</MenuItem>
						<MenuItem value='Maryland'>Maryland</MenuItem>
						<MenuItem value='Massachusetts'>Massachusetts</MenuItem>
						<MenuItem value='Michigan'>Michigan</MenuItem>
						<MenuItem value='Minnesota'>Minnesota</MenuItem>
						<MenuItem value='Mississippi'>Mississippi</MenuItem>
						<MenuItem value='Missouri'>Missouri</MenuItem>
						<MenuItem value='Montana'>Montana</MenuItem>
						<MenuItem value='Nebraska'>Nebraska</MenuItem>
						<MenuItem value='Nevada'>Nevada</MenuItem>
						<MenuItem value='New Hampshire'>New Hampshire</MenuItem>
						<MenuItem value='New Mexico'>New Mexico</MenuItem>
						<MenuItem value='New York'>New York</MenuItem>
						<MenuItem value='North Carolina'>North Carolina</MenuItem>
						<MenuItem value='North Dakota'>North Dakota</MenuItem>
						<MenuItem value='Ohio'>Ohio</MenuItem>
						<MenuItem value='Oklahoma'>Oklahoma</MenuItem>
						<MenuItem value='Oregon'>Oregon</MenuItem>
						<MenuItem value='Pennsylvania'>Pennsylvania</MenuItem>
						<MenuItem value='Rhoda Island'>Rhoda Island</MenuItem>
						<MenuItem value='South Carolina'>South Carolina</MenuItem>
						<MenuItem value='South Dakota'>South Dakota</MenuItem>
						<MenuItem value='Tennessee'>Tennessee</MenuItem>
						<MenuItem value='Texas'>Texas</MenuItem>
						<MenuItem value='Utah'>Utah</MenuItem>
						<MenuItem value='Vermont'>Vermont</MenuItem>
						<MenuItem value='Virginia'>Virginia</MenuItem>
						<MenuItem value='Washington'>Washington</MenuItem>
						<MenuItem value='West Virginia'>West Virginia</MenuItem>
						<MenuItem value='Wisconsin'>Wisconsin</MenuItem>
						<MenuItem value='Wyoming'>Wyoming</MenuItem>
					</Select>
				</FormControl>
				<TextField label='Zip Code' margin='normal' variant='outlined' color='secondary' />
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
