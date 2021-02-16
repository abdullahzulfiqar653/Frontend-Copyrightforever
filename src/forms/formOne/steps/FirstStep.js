import React, { useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';

function FirstStep({ setStep}) {
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
			<div>
				<TextField
					label='Previous or alternate titles:'
					margin='normal'
					variant='outlined'
					color='secondary'
				/>
			</div>
			<div>
				<TextField
					label='Nature of this work. Please describe your work here:'
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
