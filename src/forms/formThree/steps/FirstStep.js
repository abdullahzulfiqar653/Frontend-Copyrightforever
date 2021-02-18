import React, { useContext } from 'react';
import { Button, TextField, FormLabel } from '@material-ui/core';

import { multiStepContext } from '../FormThree.js';

function FirstStep({ setStep }) {
	const { virtualArtData, setVirtualArtData } = useContext(multiStepContext);
	return (
		<div>
			<h3> About Your Work</h3>

			<TextField
				label='What is the title of your work of authorship?'
				margin='normal'
				variant='outlined'
				color='secondary'
				value={virtualArtData['title_of_work']}
				onChange={(e) => setVirtualArtData({ ...virtualArtData, title_of_work: e.target.value })}
			/>

			<TextField
				label='Please list any prior title(s) used for your work:'
				margin='normal'
				variant='outlined'
				color='secondary'
				value={virtualArtData['prior_title']}
				onChange={(e) => setVirtualArtData({ ...virtualArtData, prior_title: e.target.value })}
			/>

			<FormLabel className='mt-4' style={{ lineHeight: '1.6' }} component='legend'>
				If your work was previously published in any periodical, serial, or collection,  give
				information about the collective work in which the contribution appeared?
				If so, please provide:
			</FormLabel>
			<TextField
				label='what is the title of your collective work:'
				margin='normal'
				variant='outlined'
				color='secondary'
				value={virtualArtData['title_of_collective_work']}
				onChange={(e) => setVirtualArtData({ ...virtualArtData, title_of_collective_work: e.target.value })}
			/>
			<div className='d-flex input_contained'>
				<TextField
					className='mr-3'
					label='Volume'
					margin='normal'
					variant='outlined'
					color='secondary'
					value={virtualArtData['volume']}
					onChange={(e) => setVirtualArtData({ ...virtualArtData, volume: e.target.value })}
				/>
				<TextField
					className='mr-3'
					label='Number'
					margin='normal'
					variant='outlined'
					color='secondary'
					value={virtualArtData['number']}
					onChange={(e) => setVirtualArtData({ ...virtualArtData, number: e.target.value })}
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
					value={virtualArtData['issue_date']}
					onChange={(e) => setVirtualArtData({ ...virtualArtData, issue_date: e.target.value })}
				/>
				<TextField
					label=' Pages'
					margin='normal'
					variant='outlined'
					color='secondary'
					value={virtualArtData['pages']}
					onChange={(e) => setVirtualArtData({ ...virtualArtData, pages: e.target.value })}
				/>
			</div>
			<div>
				<Button
					onClick={() => {
						setStep(2);
						console.log(virtualArtData, 'userData');
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
