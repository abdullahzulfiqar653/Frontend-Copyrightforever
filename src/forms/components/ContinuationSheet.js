import React from 'react';
import { Modal } from 'react-bootstrap';
import { TextField, Button, InputLabel, FormControl, Select, MenuItem } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

function ContinuationSheet(props) {
	return (
		<Modal {...props} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
			<Modal.Header closeButton>
				<Modal.Title id='contained-modal-title-vcenter'>CONTINUATION SHEET</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{/*
         ====================Form_1====================== 
         */}
				<div>
					<TextField
						label=' Identification of Your Application. Give the title as given in your basic form:'
						margin='normal'
						variant='outlined'
						color='secondary'
					/>
				</div>

				<div>
					<TextField
						label='Name and addresses of Copyright Claimant in the basic form'
						margin='normal'
						variant='outlined'
						color='secondary'
					/>
				</div>
				<h3>About the Author</h3>
				<div className='d-flex input_contained'>
					<TextField
						label='Name of author:'
						margin='normal'
						variant='outlined'
						color='secondary'
						className='mr-3'
					/>
					<TextField
						label='Year of Birth'
						margin='normal'
						variant='outlined'
						color='secondary'
						className='mr-3'
					/>
					<TextField label=' Year of Death' margin='normal' variant='outlined' color='secondary' />
				</div>
				<div>
					<div component='fieldset' className='mt-4 fieldset'>
						<FormLabel component='legend'>Was this a “work for hire”?</FormLabel>
						<RadioGroup aria-label='radio' name='radio' className='flex-row'>
							<FormControlLabel value='yes' control={<Radio />} label='Yes' />
							<FormControlLabel value='no' control={<Radio />} label='No' />
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
					/>
					<TextField label='Domiciled' margin='normal' variant='outlined' color='secondary' />
				</div>
				<div>
					<div component='fieldset' className='mt-4 fieldset'>
						<FormLabel component='legend'>Was the authorship anonymous ?</FormLabel>
						<RadioGroup aria-label='radio' name='radio' className='flex-row'>
							<FormControlLabel value='yes' control={<Radio />} label='Yes' />
							<FormControlLabel value='no' control={<Radio />} label='No' />
						</RadioGroup>
					</div>
					<div component='fieldset' className='mt-4 fieldset'>
						<FormLabel component='legend'>Was the authorship pseudonymous ?</FormLabel>
						<RadioGroup aria-label='radio' name='radio' className='flex-row'>
							<FormControlLabel value='yes' control={<Radio />} label='Yes' />
							<FormControlLabel value='no' control={<Radio />} label='No' />
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
					/>
				</div>
				{/*
         ====================Form_2-End====================== 
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
					/>
					<TextField
						label='Year of Birth'
						margin='normal'
						variant='outlined'
						color='secondary'
						className='mr-3'
					/>
					<TextField label=' Year of Death' margin='normal' variant='outlined' color='secondary' />
				</div>
				<div>
					<div component='fieldset' className='mt-4 fieldset'>
						<FormLabel component='legend'>Was this a “work for hire”?</FormLabel>
						<RadioGroup aria-label='radio' name='radio' className='flex-row'>
							<FormControlLabel value='yes' control={<Radio />} label='Yes' />
							<FormControlLabel value='no' control={<Radio />} label='No' />
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
					/>
					<TextField label='Domiciled' margin='normal' variant='outlined' color='secondary' />
				</div>
				<div>
					<div component='fieldset' className='mt-4 fieldset'>
						<FormLabel component='legend'>Was the authorship anonymous ?</FormLabel>
						<RadioGroup aria-label='radio' name='radio' className='flex-row'>
							<FormControlLabel value='yes' control={<Radio />} label='Yes' />
							<FormControlLabel value='no' control={<Radio />} label='No' />
						</RadioGroup>
					</div>
					<div component='fieldset' className='mt-4 fieldset'>
						<FormLabel component='legend'>Was the authorship pseudonymous ?</FormLabel>
						<RadioGroup aria-label='radio' name='radio' className='flex-row'>
							<FormControlLabel value='yes' control={<Radio />} label='Yes' />
							<FormControlLabel value='no' control={<Radio />} label='No' />
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
					/>
				</div>
				{/*
         ====================Form_2-END====================== 
         */}
				<div>
					<div className='d-flex input_contained'>
						<TextField
							label='Your Name:'
							margin='normal'
							variant='outlined'
							color='secondary'
							className='mr-3'
						/>
						<TextField label='Date:' margin='normal' variant='outlined' color='secondary' />
					</div>
					<TextField label='Your Address:' margin='normal' variant='outlined' color='secondary' />
					<div className='d-flex input_contained'>
						<TextField
							label='City:'
							margin='normal'
							variant='outlined'
							color='secondary'
							className='mr-3'
						/>
						<FormControl className='mr-3' variant='outlined' margin='normal'>
							<InputLabel id='demo-simple-select-outlined-label'>Age</InputLabel>
							<Select
								labelId='demo-simple-select-outlined-label'
								id='demo-simple-select-outlined'
								label='Age'
							>
								<MenuItem value=''>
									<em>None</em>
								</MenuItem>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</FormControl>
						<TextField label='Zip Code:' margin='normal' variant='outlined' color='secondary' />
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
