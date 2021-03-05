import React, { useContext } from 'react';
import { Modal } from 'react-bootstrap';
import { TextField, Button, InputLabel, FormControl, Select, MenuItem } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import { multiStepContext } from '../FormOne.js';

function ContinuationSheet(props) {
	const { performingArtData, setPerformingArtData } = useContext(multiStepContext);
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
						value={performingArtData['continuation_title']}
						onChange={(e) =>
							setPerformingArtData({ ...performingArtData, continuation_title: e.target.value })
						}
					/>
				</div>

				<div>
					<TextField
						label='Name and addresses of Copyright Claimant in the basic form'
						margin='normal'
						variant='outlined'
						color='secondary'
						value={performingArtData['name_and_address']}
						onChange={(e) =>
							setPerformingArtData({ ...performingArtData, name_and_address: e.target.value })
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
						value={performingArtData['name_of_author_1']}
						onChange={(e) =>
							setPerformingArtData({ ...performingArtData, name_of_author_1: e.target.value })
						}
					/>
					<TextField
						label='Year of Birth'
						margin='normal'
						variant='outlined'
						color='secondary'
						className='mr-3'
						value={performingArtData['year_of_birth_1']}
						onChange={(e) =>
							setPerformingArtData({ ...performingArtData, year_of_birth_1: e.target.value })
						}
					/>
					<TextField
						label=' Year of Death'
						margin='normal'
						variant='outlined'
						color='secondary'
						className='mr-3'
						value={performingArtData['year_of_death_1']}
						onChange={(e) =>
							setPerformingArtData({ ...performingArtData, year_of_death_1: e.target.value })
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
							value={performingArtData['work_for_hire_1']}
							onChange={(e) =>
								setPerformingArtData({ ...performingArtData, work_for_hire_1: e.target.value })
							}
						>
							<FormControlLabel value='1' control={<Radio />} label='Yes' />
							<FormControlLabel value='0' control={<Radio />} label='No' />
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
						value={performingArtData['citizen_of_1']}
						onChange={(e) =>
							setPerformingArtData({ ...performingArtData, citizen_of_1: e.target.value })
						}
					/>
					<TextField
						label='Domiciled'
						margin='normal'
						variant='outlined'
						color='secondary'
						value={performingArtData['domiciled_of_1']}
						onChange={(e) =>
							setPerformingArtData({ ...performingArtData, domiciled_of_1: e.target.value })
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
							value={performingArtData['authorship_anonymous_1']}
							onChange={(e) =>
								setPerformingArtData({ ...performingArtData, authorship_anonymous_1: e.target.value })
							}
						>
							<FormControlLabel value='1' control={<Radio />} label='Yes' />
							<FormControlLabel value='0' control={<Radio />} label='No' />
						</RadioGroup>
					</div>
					<div component='fieldset' className='mt-4 fieldset'>
						<FormLabel component='legend'>Was the authorship pseudonymous ?</FormLabel>
						<RadioGroup
							aria-label='radio'
							name='radio'
							className='flex-row'
							value={performingArtData['authorship_pseudonymous_1']}
							onChange={(e) =>
								setPerformingArtData({ ...performingArtData, authorship_pseudonymous_1: e.target.value })
							}
						>
							<FormControlLabel value='1' control={<Radio />} label='Yes' />
							<FormControlLabel value='0' control={<Radio />} label='No' />
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
						value={performingArtData['nature_of_authorship_1']}
						onChange={(e) =>
							setPerformingArtData({ ...performingArtData, nature_of_authorship_1: e.target.value })
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
						value={performingArtData['name_of_author_2']}
						onChange={(e) =>
							setPerformingArtData({ ...performingArtData, name_of_author_2: e.target.value })
						}
					/>
					<TextField
						label='Year of Birth'
						margin='normal'
						variant='outlined'
						color='secondary'
						className='mr-3'
						value={performingArtData['year_of_birth_2']}
						onChange={(e) =>
							setPerformingArtData({ ...performingArtData, year_of_birth_2: e.target.value })
						}
					/>
					<TextField
						label=' Year of Death'
						margin='normal'
						variant='outlined'
						color='secondary'
						className='mr-3'
						value={performingArtData['year_of_death_2']}
						onChange={(e) =>
							setPerformingArtData({ ...performingArtData, year_of_death_2: e.target.value })
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
							value={performingArtData['work_for_hire_2']}
							onChange={(e) =>
								setPerformingArtData({ ...performingArtData, work_for_hire_2: e.target.value })
							}
						>
							<FormControlLabel value='1' control={<Radio />} label='Yes' />
							<FormControlLabel value='0' control={<Radio />} label='No' />
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
						value={performingArtData['citizen_of_2']}
						onChange={(e) =>
							setPerformingArtData({ ...performingArtData, citizen_of_2: e.target.value })
						}
					/>
					<TextField
						label='Domiciled'
						margin='normal'
						variant='outlined'
						color='secondary'
						value={performingArtData['domiciled_of_2']}
						onChange={(e) =>
							setPerformingArtData({ ...performingArtData, domiciled_of_2: e.target.value })
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
							value={performingArtData['authorship_anonymous_2']}
							onChange={(e) =>
								setPerformingArtData({ ...performingArtData, authorship_anonymous_2: e.target.value })
							}
						>
							<FormControlLabel value='1' control={<Radio />} label='Yes' />
							<FormControlLabel value='0' control={<Radio />} label='No' />
						</RadioGroup>
					</div>
					<div component='fieldset' className='mt-4 fieldset'>
						<FormLabel component='legend'>Was the authorship pseudonymous ?</FormLabel>
						<RadioGroup
							aria-label='radio'
							name='radio'
							className='flex-row'
							value={performingArtData['authorship_pseudonymous_2']}
							onChange={(e) =>
								setPerformingArtData({ ...performingArtData, authorship_pseudonymous_2: e.target.value })
							}
						>
							<FormControlLabel value='1' control={<Radio />} label='Yes' />
							<FormControlLabel value='0' control={<Radio />} label='No' />
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
						value={performingArtData['nature_of_authorship_2']}
						onChange={(e) =>
							setPerformingArtData({ ...performingArtData, nature_of_authorship_2: e.target.value })
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
						value={performingArtData['name_of_author_3']}
						onChange={(e) =>
							setPerformingArtData({ ...performingArtData, name_of_author_3: e.target.value })
						}
					/>
					<TextField
						label='Year of Birth'
						margin='normal'
						variant='outlined'
						color='secondary'
						className='mr-3'
						value={performingArtData['year_of_birth_3']}
						onChange={(e) =>
							setPerformingArtData({ ...performingArtData, year_of_birth_3: e.target.value })
						}
					/>
					<TextField
						label=' Year of Death'
						margin='normal'
						variant='outlined'
						color='secondary'
						className='mr-3'
						value={performingArtData['year_of_death_3']}
						onChange={(e) =>
							setPerformingArtData({ ...performingArtData, year_of_death_3: e.target.value })
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
							value={performingArtData['work_for_hire_3']}
							onChange={(e) =>
								setPerformingArtData({ ...performingArtData, work_for_hire_3: e.target.value })
							}
						>
							<FormControlLabel value='1' control={<Radio />} label='Yes' />
							<FormControlLabel value='0' control={<Radio />} label='No' />
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
						value={performingArtData['citizen_of_3']}
						onChange={(e) =>
							setPerformingArtData({ ...performingArtData, citizen_of_3: e.target.value })
						}
					/>
					<TextField label='Domiciled'
						margin='normal'
						variant='outlined'
						color='secondary'
						value={performingArtData['domiciled_of_3']}
						onChange={(e) =>
							setPerformingArtData({ ...performingArtData, domiciled_of_3: e.target.value })
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
							value={performingArtData['authorship_anonymous_3']}
							onChange={(e) =>
								setPerformingArtData({ ...performingArtData, authorship_anonymous_3: e.target.value })
							}
						>
							<FormControlLabel value='1' control={<Radio />} label='Yes' />
							<FormControlLabel value='0' control={<Radio />} label='No' />
						</RadioGroup>
					</div>
					<div component='fieldset' className='mt-4 fieldset'>
						<FormLabel component='legend'>Was the authorship pseudonymous ?</FormLabel>
						<RadioGroup
							aria-label='radio'
							name='radio'
							className='flex-row'
							value={performingArtData['authorship_pseudonymous_3']}
							onChange={(e) =>
								setPerformingArtData({ ...performingArtData, authorship_pseudonymous_3: e.target.value })
							}
						>
							<FormControlLabel value='1' control={<Radio />} label='Yes' />
							<FormControlLabel value='0' control={<Radio />} label='No' />
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
						value={performingArtData['nature_of_authorship_3']}
						onChange={(e) =>
							setPerformingArtData({ ...performingArtData, nature_of_authorship_3: e.target.value })
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
							value={performingArtData['continuation_name']}
						onChange={(e) =>
							setPerformingArtData({ ...performingArtData, continuation_name: e.target.value })
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
							value={performingArtData['continuation_date']}
							onChange={(e) =>
								setPerformingArtData({ ...performingArtData, continuation_date: e.target.value })
							}
						/>
					</div>
					<TextField
						label='Your Address:'
						margin='normal'
						variant='outlined'
						color='secondary'
						value={performingArtData['continuation_address']}
						onChange={(e) =>
							setPerformingArtData({ ...performingArtData, continuation_address: e.target.value })
						}
					/>
					<div className='d-flex input_contained'>
						<TextField
							label='City:'
							margin='normal'
							variant='outlined'
							color='secondary'
							className='mr-3'
							value={performingArtData['continuation_city']}
							onChange={(e) =>
								setPerformingArtData({ ...performingArtData, continuation_city: e.target.value })
							}
						/>
						<FormControl className='mr-3' variant='outlined' margin='normal'>
									<InputLabel htmlFor='continuation state'>Continuation State</InputLabel>
									<Select
										// labelId='demo-simple-select-outlined-label'
										// id='demo-simple-select-outlined'
										label='Age'
										value={performingArtData['continuation_state']}
										onChange={(e) =>
											setPerformingArtData({ ...performingArtData, continuation_state: e.target.value })
										}
									>
										<MenuItem value=''>Continuation State</MenuItem>
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
							value={performingArtData['continuation_zipcode']}
							onChange={(e) =>
								setPerformingArtData({ ...performingArtData, continuation_zipcode: e.target.value })
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
