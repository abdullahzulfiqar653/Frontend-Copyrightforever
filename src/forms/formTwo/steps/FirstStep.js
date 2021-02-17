import React from 'react';
import { Button, TextField, FormLabel } from '@material-ui/core';

function FirstStep({ setStep }) {
	return (
		<div>
			<h3> About Your Work</h3>
			<div>
				<TextField
					label='What is the title of your work of authorship ?'
					margin='normal'
					variant='outlined'
					color='secondary'
				/>
			</div>
			<div>
				<TextField
					label='Please list any prior title(s) used for your work:'
					margin='normal'
					variant='outlined'
					color='secondary'
				/>
			</div>
			<FormLabel className='mt-4' style={{ lineHeight: '1.6' }} component='legend'>
				If your work was previously published in any periodical? If so, please provide:
			</FormLabel>
			<div className='d-flex input_contained'>
				<TextField
					className='mr-3'
					label='Volume'
					margin='normal'
					variant='outlined'
					color='secondary'
				/>
				<TextField
					className='mr-3'
					label='Number'
					margin='normal'
					variant='outlined'
					color='secondary'
				/>
				<TextField
					id='date'
					className='mr-3'
					label='Issue Date'
					type='date'
					defaultValue='2017-05-24'
					margin='normal'
					variant='outlined'
					color='secondary'
					InputLabelProps={{
						shrink: true,
					}}
				/>
				<TextField label=' Pages' margin='normal' variant='outlined' color='secondary' />
			</div>
			<div>
				<Button onClick={() => setStep(2)} variant='contained' color='primary'>
					Next
				</Button>
			</div>
		</div>
	);
}

export default FirstStep;
