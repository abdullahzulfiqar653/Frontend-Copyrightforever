import React, {useContext} from 'react';
import { Modal } from 'react-bootstrap';
import { TextField, Button, InputLabel, FormControl, Select, MenuItem } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import { multiStepContext } from '../FormThree.js';

function ContinuationSheet(props) {
	const { virtualArtData, setVirtualArtData } = useContext(multiStepContext);
	return (
		<Modal {...props} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
			<Modal.Header closeButton>
				<Modal.Title id='contained-modal-title-vcenter'>CONTINUATION SHEET</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				
				<div>
					<TextField
						label=' Identification of Your Application. Give the title as given in your basic form:'
						margin='normal'
						variant='outlined'
						color='secondary'
						value={virtualArtData['continuation_title']}
						onChange={(e) =>
							setVirtualArtData({ ...virtualArtData, continuation_title: e.target.value })
						}
					/>
				</div>

				<div>
					<TextField
						label='Name and addresses of Copyright Claimant in the basic form'
						margin='normal'
						variant='outlined'
						color='secondary'
						value={virtualArtData['name_and_address']}
						onChange={(e) =>
							setVirtualArtData({ ...virtualArtData, name_and_address: e.target.value })
						}
					/>
				</div>
				{/*
         ====================Form_1====================== 
         */}
				<h3>About the Author</h3>
				<div className='d-flex input_contained'>
					<TextField
						label='Name of author:'
						margin='normal'
						variant='outlined'
						color='secondary'
						className='mr-3'
						value={virtualArtData['name_of_author_1']}
						onChange={(e) =>
							setVirtualArtData({ ...virtualArtData, name_of_author_1: e.target.value })
						}
					/>
					<TextField
						label='Year of Birth'
						margin='normal'
						variant='outlined'
						color='secondary'
						className='mr-3'
						value={virtualArtData['year_of_birth_1']}
						onChange={(e) =>
							setVirtualArtData({ ...virtualArtData, year_of_birth_1: e.target.value })
						}
					/>
					<TextField
						label=' Year of Death'
						margin='normal'
						variant='outlined'
						color='secondary'
						className='mr-3'
						value={virtualArtData['year_of_death_1']}
						onChange={(e) =>
							setVirtualArtData({ ...virtualArtData, year_of_death_1: e.target.value })
						}
					/>
						
				</div>
				<div>
					<div component='fieldset' className='mt-4 fieldset'>
						<FormLabel component='legend'>Was this a “work for hire”?</FormLabel>
						<RadioGroup
							aria-label='radio'
							name='radio'
							className='flex-row'
							value={virtualArtData['work_for_hire_1']}
							onChange={(e) =>
								setVirtualArtData({ ...virtualArtData, work_for_hire_1: e.target.value })
							}
						>
							<FormControlLabel value='true' control={<Radio />} label='Yes' />
							<FormControlLabel value='false' control={<Radio />} label='No' />
						</RadioGroup>
					</div>
				</div>
				<div className='d-flex input_contained'>
					<TextField
						label='Author is a Citizen of'
						margin='normal'
						variant='outlined'
						color='secondary'
						className='mr-3'
						value={virtualArtData['citizen_of_1']}
						onChange={(e) =>
							setVirtualArtData({ ...virtualArtData, citizen_of_1: e.target.value })
						}
					/>
					<TextField
						label='Domiciled'
						margin='normal'
						variant='outlined'
						color='secondary'
						value={virtualArtData['domiciled_of_1']}
						onChange={(e) =>
							setVirtualArtData({ ...virtualArtData, domiciled_of_1: e.target.value })
						}
					/>
				</div>
				<div>
					<div component='fieldset' className='mt-4 fieldset'>
						<FormLabel component='legend'>Was the authorship anonymous ?</FormLabel>
						<RadioGroup
							aria-label='radio'
							name='radio'
							className='flex-row'
							value={virtualArtData['authorship_anonymous_1']}
							onChange={(e) =>
								setVirtualArtData({ ...virtualArtData, authorship_anonymous_1: e.target.value })
							}
						>
							<FormControlLabel value='true' control={<Radio />} label='Yes' />
							<FormControlLabel value='false' control={<Radio />} label='No' />
						</RadioGroup>
					</div>
					<div component='fieldset' className='mt-4 fieldset'>
						<FormLabel component='legend'>Was the authorship pseudonymous ?</FormLabel>
						<RadioGroup
							aria-label='radio'
							name='radio'
							className='flex-row'
							value={virtualArtData['authorship_pseudonymous_1']}
							onChange={(e) =>
								setVirtualArtData({ ...virtualArtData, authorship_pseudonymous_1: e.target.value })
							}
						>
							<FormControlLabel value='true' control={<Radio />} label='Yes' />
							<FormControlLabel value='false' control={<Radio />} label='No' />
						</RadioGroup>
					</div>
				</div>
				<div>
					<TextField
						label='Nature of authorship - Please describe the nature of material created by this author in
                            which copyright is claimed'
						margin='normal'
						variant='outlined'
						color='secondary'
						value={virtualArtData['nature_of_authorship_1']}
						onChange={(e) =>
							setVirtualArtData({ ...virtualArtData, nature_of_authorship_1: e.target.value })
						}
					/>
				</div>
				{/*
         ====================Form_1-End====================== 
         */}

				{/*
         ====================Form_2====================== 
         */}

				<div className='d-flex input_contained'>
					<TextField
						label='Name of author:'
						margin='normal'
						variant='outlined'
						color='secondary'
						className='mr-3'
						value={virtualArtData['name_of_author_2']}
						onChange={(e) =>
							setVirtualArtData({ ...virtualArtData, name_of_author_2: e.target.value })
						}
					/>
					<TextField
						label='Year of Birth'
						margin='normal'
						variant='outlined'
						color='secondary'
						className='mr-3'
						value={virtualArtData['year_of_birth_2']}
						onChange={(e) =>
							setVirtualArtData({ ...virtualArtData, year_of_birth_2: e.target.value })
						}
					/>
					<TextField
						label=' Year of Death'
						margin='normal'
						variant='outlined'
						color='secondary'
						className='mr-3'
						value={virtualArtData['year_of_death_2']}
						onChange={(e) =>
							setVirtualArtData({ ...virtualArtData, year_of_death_2: e.target.value })
						}
					/>
						
				</div>
				<div>
					<div component='fieldset' className='mt-4 fieldset'>
						<FormLabel component='legend'>Was this a “work for hire”?</FormLabel>
						<RadioGroup
							aria-label='radio'
							name='radio'
							className='flex-row'
							value={virtualArtData['work_for_hire_2']}
							onChange={(e) =>
								setVirtualArtData({ ...virtualArtData, work_for_hire_2: e.target.value })
							}
						>
							<FormControlLabel value='true' control={<Radio />} label='Yes' />
							<FormControlLabel value='false' control={<Radio />} label='No' />
						</RadioGroup>
					</div>
				</div>
				<div className='d-flex input_contained'>
					<TextField
						label='Author is a Citizen of'
						margin='normal'
						variant='outlined'
						color='secondary'
						className='mr-3'
						value={virtualArtData['citizen_of_2']}
						onChange={(e) =>
							setVirtualArtData({ ...virtualArtData, citizen_of_2: e.target.value })
						}
					/>
					<TextField
						label='Domiciled'
						margin='normal'
						variant='outlined'
						color='secondary'
						value={virtualArtData['domiciled_of_2']}
						onChange={(e) =>
							setVirtualArtData({ ...virtualArtData, domiciled_of_2: e.target.value })
						}
					/>
				</div>
				<div>
					<div component='fieldset' className='mt-4 fieldset'>
						<FormLabel component='legend'>Was the authorship anonymous ?</FormLabel>
						<RadioGroup
							aria-label='radio'
							name='radio'
							className='flex-row'
							value={virtualArtData['authorship_anonymous_2']}
							onChange={(e) =>
								setVirtualArtData({ ...virtualArtData, authorship_anonymous_2: e.target.value })
							}
						>
							<FormControlLabel value='true' control={<Radio />} label='Yes' />
							<FormControlLabel value='false' control={<Radio />} label='No' />
						</RadioGroup>
					</div>
					<div component='fieldset' className='mt-4 fieldset'>
						<FormLabel component='legend'>Was the authorship pseudonymous ?</FormLabel>
						<RadioGroup
							aria-label='radio'
							name='radio'
							className='flex-row'
							value={virtualArtData['authorship_pseudonymous_2']}
							onChange={(e) =>
								setVirtualArtData({ ...virtualArtData, authorship_pseudonymous_2: e.target.value })
							}
						>
							<FormControlLabel value='true' control={<Radio />} label='Yes' />
							<FormControlLabel value='false' control={<Radio />} label='No' />
						</RadioGroup>
					</div>
				</div>
				<div>
					<TextField
						label='Nature of authorship - Please describe the nature of material created by this author in
                            which copyright is claimed'
						margin='normal'
						variant='outlined'
						color='secondary'
						value={virtualArtData['nature_of_authorship_2']}
						onChange={(e) =>
							setVirtualArtData({ ...virtualArtData, nature_of_authorship_2: e.target.value })
						}
					/>
				</div>
				{/*
         ====================Form_2-End====================== 
         */}
			{/* 
         ====================Form_3====================== 
         */}
				<div className='d-flex input_contained'>
					<TextField
						label='Name of author:'
						margin='normal'
						variant='outlined'
						color='secondary'
						className='mr-3'
						value={virtualArtData['name_of_author_3']}
						onChange={(e) =>
							setVirtualArtData({ ...virtualArtData, name_of_author_3: e.target.value })
						}
					/>
					<TextField
						label='Year of Birth'
						margin='normal'
						variant='outlined'
						color='secondary'
						className='mr-3'
						value={virtualArtData['year_of_birth_3']}
						onChange={(e) =>
							setVirtualArtData({ ...virtualArtData, year_of_birth_3: e.target.value })
						}
					/>
					<TextField
						label=' Year of Death'
						margin='normal'
						variant='outlined'
						color='secondary'
						className='mr-3'
						value={virtualArtData['year_of_death_3']}
						onChange={(e) =>
							setVirtualArtData({ ...virtualArtData, year_of_death_3: e.target.value })
						}
					/>
						
				</div>
				<div>
					<div component='fieldset' className='mt-4 fieldset'>
						<FormLabel component='legend'>Was this a “work for hire”?</FormLabel>
						<RadioGroup
							aria-label='radio'
							name='radio'
							className='flex-row'
							value={virtualArtData['work_for_hire_3']}
							onChange={(e) =>
								setVirtualArtData({ ...virtualArtData, work_for_hire_3: e.target.value })
							}
						>
							<FormControlLabel value='true' control={<Radio />} label='Yes' />
							<FormControlLabel value='false' control={<Radio />} label='No' />
						</RadioGroup>
					</div>
				</div>
				<div className='d-flex input_contained'>
					<TextField
						label='Author is a Citizen of'
						margin='normal'
						variant='outlined'
						color='secondary'
						className='mr-3'
						value={virtualArtData['citizen_of_3']}
						onChange={(e) =>
							setVirtualArtData({ ...virtualArtData, citizen_of_3: e.target.value })
						}
					/>
					<TextField label='Domiciled'
						margin='normal'
						variant='outlined'
						color='secondary'
						value={virtualArtData['domiciled_of_3']}
						onChange={(e) =>
							setVirtualArtData({ ...virtualArtData, domiciled_of_3: e.target.value })
						}
					/>
				</div>
				<div>
					<div component='fieldset' className='mt-4 fieldset'>
						<FormLabel component='legend'>Was the authorship anonymous ?</FormLabel>
						<RadioGroup
							aria-label='radio'
							name='radio'
							className='flex-row'
							value={virtualArtData['authorship_anonymous_3']}
							onChange={(e) =>
								setVirtualArtData({ ...virtualArtData, authorship_anonymous_3: e.target.value })
							}
						>
							<FormControlLabel value='true' control={<Radio />} label='Yes' />
							<FormControlLabel value='false' control={<Radio />} label='No' />
						</RadioGroup>
					</div>
					<div component='fieldset' className='mt-4 fieldset'>
						<FormLabel component='legend'>Was the authorship pseudonymous ?</FormLabel>
						<RadioGroup
							aria-label='radio'
							name='radio'
							className='flex-row'
							value={virtualArtData['authorship_pseudonymous_3']}
							onChange={(e) =>
								setVirtualArtData({ ...virtualArtData, authorship_pseudonymous_3: e.target.value })
							}
						>
							<FormControlLabel value='true' control={<Radio />} label='Yes' />
							<FormControlLabel value='false' control={<Radio />} label='No' />
						</RadioGroup>
					</div>
				</div>
				<div>
					<TextField
						label='Nature of authorship - Please describe the nature of material created by this author in
                            which copyright is claimed'
						margin='normal'
						variant='outlined'
						color='secondary'
						value={virtualArtData['nature_of_authorship_3']}
						onChange={(e) =>
							setVirtualArtData({ ...virtualArtData, nature_of_authorship_3: e.target.value })
						}
					/>
				</div>

			{/*
         ====================Form_3-End====================== 
        	*/}

				<div>
					<div className='d-flex input_contained'>
						<TextField
							label='Your Name:'
							margin='normal'
							variant='outlined'
							color='secondary'
							className='mr-3'
							value={virtualArtData['continuation_name']}
						onChange={(e) =>
							setVirtualArtData({ ...virtualArtData, continuation_name: e.target.value })
						}
						/>
						<TextField
							id='date'
							label='Date'
							type='date'
							defaultValue='yyyy-mm-dd'
							margin='normal'
							variant='outlined'
							color='secondary'
							InputLabelProps={{
								shrink: true,
							}}
							value={virtualArtData['continuation_date']}
							onChange={(e) =>
								setVirtualArtData({ ...virtualArtData, continuation_date: e.target.value })
							}
						/>
					</div>
					<TextField
						label='Your Address:'
						margin='normal'
						variant='outlined'
						color='secondary'
						value={virtualArtData['continuation_address']}
						onChange={(e) =>
							setVirtualArtData({ ...virtualArtData, continuation_address: e.target.value })
						}
					/>
					<div className='d-flex input_contained'>
						<TextField
							label='City:'
							margin='normal'
							variant='outlined'
							color='secondary'
							className='mr-3'
							value={virtualArtData['continuation_city']}
							onChange={(e) =>
								setVirtualArtData({ ...virtualArtData, continuation_city: e.target.value })
							}
						/>
						<FormControl
							className='mr-3'
							variant='outlined'
							margin='normal'
							value={virtualArtData['continuation_state']}
							onChange={(e) =>
								setVirtualArtData({ ...virtualArtData, continuation_state: e.target.value })
							}
						>
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
						<TextField
							label='Zip Code:'
							margin='normal'
							variant='outlined'
							color='secondary'
							value={virtualArtData['continuation_zipcode']}
							onChange={(e) =>
								setVirtualArtData({ ...virtualArtData, continuation_zipcode: e.target.value })
							}
						/>
					</div>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<Button
					onClick={props.onHide}
					variant='contained'
					style={{ backgroundColor: 'red', color: 'white' }}
				>
					Submit
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default ContinuationSheet;
