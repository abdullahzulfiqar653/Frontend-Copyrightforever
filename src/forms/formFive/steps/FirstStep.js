import React from 'react';
import { Button, TextField } from '@material-ui/core';

function FirstStep({ setStep }) {
	return (
		<div>
			<h3> About Your Work</h3>
			<div>
				<TextField
					label='What is the title of your serial work?'
					margin='normal'
					variant='outlined'
					color='secondary'
				/>
			</div>
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
					label='Date on copies'
					type='date'
					defaultValue='2017-05-24'
					margin='normal'
					variant='outlined'
					color='secondary'
					InputLabelProps={{
						shrink: true,
					}}
				/>
				<TextField
					label='Frequency of Publication'
					margin='normal'
					variant='outlined'
					color='secondary'
				/>
			</div>
			<div>
				<TextField
					label='Previous or alternate titles:'
					margin='normal'
					variant='outlined'
					color='secondary'
				/>
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
