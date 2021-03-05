import React, { useEffect, useContext } from 'react';
import { Button, TextField } from '@material-ui/core';
import { multiStepContext } from '../FormOne.js'

function FirstStep({ setStep }) {
	const { performingArtData, setPerformingArtData } = useContext(multiStepContext);
	return (
		<div>
			<h3> About Your Work</h3>
			<div>
				<TextField
					label='What is the title of your serial work?'
					margin='normal'
					variant='outlined'
					color='secondary'
					value={performingArtData['title_of_work']}
					onChange={(e) => setPerformingArtData({ ...performingArtData, title_of_work: e.target.value })}
				/>
			</div>
			<div>
				<TextField
					label='Previous or alternate titles:'
					margin='normal'
					variant='outlined'
					color='secondary'
					value={performingArtData['prior_title']}
					onChange={(e) => setPerformingArtData({ ...performingArtData, prior_title: e.target.value })}
				/>
			</div>
			<div>
				<TextField
					label='Nature of this work. Please describe your work here:'
					margin='normal'
					variant='outlined'
					color='secondary'
					value={performingArtData['nature_of_work']}
					onChange={(e) => setPerformingArtData({ ...performingArtData, nature_of_work: e.target.value })}
				/>
			</div>
			<div>
				<Button onClick={() => {
					console.log(performingArtData)
					setStep(2)
				}} variant='contained' color='primary'>
					Next
				</Button>
				
			</div>
		</div>
	);
}

export default FirstStep;
