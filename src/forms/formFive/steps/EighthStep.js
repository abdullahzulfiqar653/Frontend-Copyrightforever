import React,{useContext} from 'react';
import { Button, TextField, InputLabel, FormControl, Select, MenuItem } from '@material-ui/core';
import Model from '../../../components/Model';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { multiStepContext } from '../FormFive.js'

function EighthStep({ setStep }) {
	const { serialWorkData, setSerialWorkData } = useContext(multiStepContext);
	const hiddenInput = React.useRef(null);
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
					value={serialWorkData['employer_name']}
					onChange={(e) => setSerialWorkData({ ...serialWorkData, employer_name: e.target.value })}
				/>
				<TextField
					id='date'
					label='Date of birth'
					type='date'
					defaultValue='2017-05-24'
					margin='normal'
					variant='outlined'
					color='secondary'
					InputLabelProps={{
						shrink: true,
					}}
					value={serialWorkData['employer_date_of_birth']}
					onChange={(e) =>
						setSerialWorkData({ ...serialWorkData, employer_date_of_birth: e.target.value })
					}
				/>
				<TextField
					id='date'
					label='Date of Hiring'
					type='date'
					defaultValue='2017-05-24'
					margin='normal'
					variant='outlined'
					color='secondary'
					InputLabelProps={{
						shrink: true,
					}}
					value={serialWorkData['date_of_hiring']}
					onChange={(e) =>
						setSerialWorkData({ ...serialWorkData, date_of_hiring: e.target.value })
					}
				/>
				<TextField
					id='date'
					label='Date of Employing'
					type='date'
					defaultValue='2017-05-24'
					margin='normal'
					variant='outlined'
					color='secondary'
					InputLabelProps={{
						shrink: true,
					}}
					value={serialWorkData['date_of_employing_copyright']}
					onChange={(e) =>
						setSerialWorkData({ ...serialWorkData, date_of_employing_copyright: e.target.value })
					}
				/>
			</div>
			<div>
				<TextField
					label=' Address'
					margin='normal'
					variant='outlined'
					color='secondary'
					value={serialWorkData['employer_address']}
					onChange={(e) =>
						setSerialWorkData({ ...serialWorkData, employer_address: e.target.value })
					}
				/>
			</div>
			<div className='d-flex input_contained'>
<TextField
					label='City'
					margin='normal'
					variant='outlined'
					color='secondary'
					className='mr-3'
					value={serialWorkData['city']}
					onChange={(e) => setSerialWorkData({ ...serialWorkData, city: e.target.value })}
				/>
				<FormControl className='mr-3' variant='outlined' margin='normal'>
					<InputLabel htmlFor='state'>State</InputLabel>
					<Select
						// labelId='demo-simple-select-outlined-label'
						// id='demo-simple-select-outlined'
						label='Age'
						value={serialWorkData['state']}
						onChange={(e) =>
							setSerialWorkData({ ...serialWorkData, state: e.target.value })
						}
					>
						<MenuItem value=''>State</MenuItem>
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
				<TextField
					label='Zip Code'
					margin='normal'
					variant='outlined'
					color='secondary'
					value={serialWorkData['zipCode']}
					onChange={(e) => setSerialWorkData({ ...serialWorkData, zipCode: e.target.value })}
				/>
			</div>
			<h5 className='my-3 d-flex align-items-center'>
				<strong className='strong'>Signature:</strong>{' '}
				<input
					type='file'
					onChange={(e) => {
						setSerialWorkData({ ...serialWorkData, sign_image: e.target.files[0] });
					}}
					ref={hiddenInput}
					className='d-none'
				/>
				<Button
					className='m-0 ml-3 '
					variant='contained'
					color='default'
					startIcon={<CloudUploadIcon />}
					onClick={() => hiddenInput.current.click()}
				>
					Upload
				</Button>
			</h5>
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
