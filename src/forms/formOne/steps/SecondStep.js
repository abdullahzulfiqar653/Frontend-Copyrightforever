import React from 'react';

import { Button, TextField } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Model from '../../components/ContinuationSheet';

function SecondStep({ setStep }) {
	const [continueSheet, setContinueSheet] = React.useState(false);
	const [value, setValue] = React.useState('female');

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<div>
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
					<RadioGroup
						aria-label='radio'
						name='radio'
						value={value}
						onChange={handleChange}
						className='flex-row'
					>
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
			<div className='d-flex input_contained'>
				<div component='fieldset' className='mt-4 fieldset'>
					<FormLabel component='legend'>Was the authorship anonymous ?</FormLabel>
					<RadioGroup
						aria-label='radio'
						name='radio'
						value={value}
						onChange={handleChange}
						className='flex-row'
					>
						<FormControlLabel value='yes' control={<Radio />} label='Yes' />
						<FormControlLabel value='no' control={<Radio />} label='No' />
					</RadioGroup>
				</div>
				<div component='fieldset' className='mt-4 fieldset'>
					<FormLabel component='legend'>Was the authorship pseudonymous ?</FormLabel>
					<RadioGroup
						aria-label='radio'
						name='radio'
						value={value}
						onChange={handleChange}
						className='flex-row'
					>
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
			<div className='d-flex flex-column mt-2 m-0 p-0'>
				<p style={{ fontSize: '20px' }}>
					If there are more than one author, please supply the names of other authors along with
					their Birth Year and Death Year, as applicable, on Addendum Sheet
				</p>
				<Button
					className='align-self-end'
					onClick={() => setContinueSheet(true)}
					variant='contained'
					color='secondary'
				>
					Continuation Sheet
				</Button>
			</div>
			<Model show={continueSheet} onHide={() => setContinueSheet(false)} />

			<Button onClick={() => setStep(1)} variant='contained' color='secondary'>
				Previous
			</Button>
			<Button onClick={() => setStep(3)} variant='contained' color='primary'>
				Next
			</Button>
		</div>
	);
}

export default SecondStep;
