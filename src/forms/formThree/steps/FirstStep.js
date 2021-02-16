import React, { useEffect, useContext } from 'react';
import { Button, TextField, FormLabel } from '@material-ui/core';
import { multiStepContext } from '../FormThree.js';

function FirstStep({ setStep }) {
	const { userData, setUserData } = useContext(multiStepContext);
	return (
		<div>
			<h3> About Your Work</h3>

			<TextField
				label='What is the title of your work of authorship?'
				margin='normal'
				variant='outlined'
				color='secondary'
				value={userData['titleOfYourWork']}
				onChange={(e) => setUserData({ ...userData, titleOfYourWork: e.target.value })}
			/>

			<TextField
				label='Please list any prior title(s) used for your work:'
				margin='normal'
				variant='outlined'
				color='secondary'
				value={userData['priorTitle']}
				onChange={(e) => setUserData({ ...userData, priorTitle: e.target.value })}
			/>

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
					value={userData['volume']}
					onChange={(e) => setUserData({ ...userData, volume: e.target.value })}
				/>
				<TextField
					className='mr-3'
					label='Number'
					margin='normal'
					variant='outlined'
					color='secondary'
					value={userData['number']}
					onChange={(e) => setUserData({ ...userData, number: e.target.value })}
				/>
				<TextField
					label='Issue Date'
					margin='normal'
					variant='outlined'
					color='secondary'
					className='mr-3'
					value={userData['issueDate']}
					onChange={(e) => setUserData({ ...userData, issueDate: e.target.value })}
				/>
				<TextField
					label=' Pages'
					margin='normal'
					variant='outlined'
					color='secondary'
					value={userData['pages']}
					onChange={(e) => setUserData({ ...userData, pages: e.target.value })}
				/>
			</div>
			<div>
				<Button
					onClick={() => {
						setStep(2);
						console.log(userData, 'userData');
					}}
					variant='contained'
					color='primary'
				>
					Next
				</Button>
			</div>
		</div>
	);
}

export default FirstStep;
