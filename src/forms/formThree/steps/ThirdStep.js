import React, { useContext } from 'react';
import { Button, TextField } from '@material-ui/core';
import FormLabel from '@material-ui/core/FormLabel';
import { multiStepContext } from '../FormThree.js';

function ThirdStep({ setStep }) {
	const { userData, setUserData } = useContext(multiStepContext);
	return (
		<div>
			<h3>Year of Authorship</h3>
			<div>
				<TextField
					label=' Year of your authorship '
					margin='normal'
					variant='outlined'
					color='secondary'
					value={userData['authorshipYear']}
					onChange={(e) => setUserData({ ...userData, authorshipYear: e.target.value })}
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
					value={userData['initialPublishedMonth']}
					onChange={(e) => setUserData({ ...userData, initialPublishedMonth: e.target.value })}
				/>
				<TextField
					label='Day'
					margin='normal'
					variant='outlined'
					color='secondary'
					className='mr-3'
					value={userData['initialPublishedDay']}
					onChange={(e) => setUserData({ ...userData, initialPublishedDay: e.target.value })}
				/>
				<TextField
					label=' Year'
					margin='normal'
					variant='outlined'
					color='secondary'
					className='mr-3'
					value={userData['initialPublishedYear']}
					onChange={(e) => setUserData({ ...userData, initialPublishedYear: e.target.value })}
				/>
				<TextField
					label='Nation'
					margin='normal'
					variant='outlined'
					color='secondary'
					value={userData['initialPublishedNation']}
					onChange={(e) => setUserData({ ...userData, initialPublishedNation: e.target.value })}
				/>
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
