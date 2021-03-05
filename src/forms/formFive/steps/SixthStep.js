import React, { useContext } from 'react';
import { Button, TextField } from '@material-ui/core';
import { multiStepContext } from '../FormFive.js'

function SixthStep({ setStep }) {
	const { serialWorkData, setSerialWorkData } = useContext(multiStepContext);
	return (
		<div>
			<h3>Derivative Work or Compilation Work</h3>
			<div>
				<TextField
					label='If your work is derivative or modification of a preexisting work, identify the
                            preexisting work:'
					margin='normal'
					variant='outlined'
					color='secondary'
					value={serialWorkData['identify_preexisting_work']}
					onChange={(e) => setSerialWorkData({ ...serialWorkData, identify_preexisting_work: e.target.value })}
				/>
			</div>
			<div>
				<TextField
					label='Describe the material added to the preexisting work:'
					margin='normal'
					variant='outlined'
					color='secondary'
					value={serialWorkData['describe_preexisting_work']}
					onChange={(e) => setSerialWorkData({ ...serialWorkData, describe_preexisting_work: e.target.value })}
				/>
			</div>

			<Button onClick={() => setStep(5)} variant='contained' color='secondary'>
				Previous
			</Button>
			<Button onClick={() => setStep(7)} variant='contained' color='primary'>
				Next
			</Button>
		</div>
	);
}
export default SixthStep;
