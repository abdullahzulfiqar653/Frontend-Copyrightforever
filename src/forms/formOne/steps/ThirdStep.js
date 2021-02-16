import React, { useContext } from 'react';
import { Button, TextField } from '@material-ui/core';
import FormLabel from '@material-ui/core/FormLabel';

function ThirdStep({ setStep }) {
	return (
		<div>
			<h3>Year of Authorship</h3>
			<div>
				<TextField
					label=' Year of your authorship '
					margin='normal'
					variant='outlined'
					color='secondary'
				/>
			</div>
			<FormLabel className='mt-3' style={{ lineHeight: '1.6' }} component='legend'>
				If your work has been published (i.e., disseminated publicly), please provide the Month____
				Day_____ Year____ and Nation_____ where the publication was initially done.
			</FormLabel>
			<div className='d-flex input_contained'>
				<TextField
					label='Month'
					margin='normal'
					variant='outlined'
					color='secondary'
					className='mr-3'
				/>
				<TextField
					label='Day'
					margin='normal'
					variant='outlined'
					color='secondary'
					className='mr-3'
				/>
				<TextField
					label=' Year'
					margin='normal'
					variant='outlined'
					color='secondary'
					className='mr-3'
				/>
				<TextField label='Nation' margin='normal' variant='outlined' color='secondary' />
			</div>
			<Button onClick={() => setStep(2)} variant='contained' color='secondary'>
				Previous
			</Button>
			<Button onClick={() => setStep(4)} variant='contained' color='primary'>
				Next
			</Button>
		</div>
	);
}

export default ThirdStep;
