import React from 'react';
import { Stepper, StepLabel, Step } from '@material-ui/core';

function Steeper({ currentStep }) {
	return (
		<div className='center-stepper'>
			<Stepper activeStep={currentStep - 1} orientation='horizontal'>
				<Step>
					<StepLabel></StepLabel>
				</Step>
				<Step>
					<StepLabel></StepLabel>
				</Step>
				<Step>
					<StepLabel></StepLabel>
				</Step>
				<Step>
					<StepLabel></StepLabel>
				</Step>
				<Step>
					<StepLabel></StepLabel>
				</Step>
				<Step>
					<StepLabel></StepLabel>
				</Step>
			</Stepper>
		</div>
	);
}

export default Steeper;
