import React from 'react';
import { Button, TextField } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

function FifthStep({ setStep }) {
	return (
		<div>
			<h3>Previous Registration</h3>
			<div>
				<div component='fieldset' className='mt-4 fieldset'>
					<FormLabel component='legend'>
						Has your work, or a version of it, previously been registered with the Copyright Office?{' '}
					</FormLabel>
					<RadioGroup aria-label='radio' name='radio' className='flex-row'>
						<FormControlLabel value='yes' control={<Radio />} label='Yes' />
						<FormControlLabel value='no' control={<Radio />} label='No' />
					</RadioGroup>
				</div>
			</div>
			<div>
				<div component='fieldset' className='mt-4 fieldset'>
					<FormLabel component='legend'>
						If you answered Yes, please explain why you are seeking another registration:
					</FormLabel>
					<RadioGroup aria-label='radio' name='radio'>
						<FormControlLabel
							value='This is the first published edition of the work.'
							control={<Radio />}
							label='This is the first published edition of the work.'
						/>
						<FormControlLabel
							value='This is the first application by the author as a copyright claimant.'
							control={<Radio />}
							label='This is the first application by the author as a copyright claimant.'
						/>
						<FormControlLabel
							value='This is a changed version of the work, as shown by Section 6.'
							control={<Radio />}
							label='This is a changed version of the work, as shown by Section 6.'
						/>
					</RadioGroup>
				</div>
			</div>
			<div className='d-flex input_contained'>
				<TextField
					label='Prior Registration Number'
					margin='normal'
					variant='outlined'
					color='secondary'
					className='mr-3'
				/>
				<TextField label='Year' margin='normal' variant='outlined' color='secondary' />
			</div>
			<Button onClick={() => setStep(4)} variant='contained' color='secondary'>
				Previous
			</Button>
			<Button onClick={() => setStep(6)} variant='contained' color='primary'>
				Next
			</Button>
		</div>
	);
}

export default FifthStep;
