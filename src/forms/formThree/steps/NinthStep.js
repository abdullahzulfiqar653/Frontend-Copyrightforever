import React, { useContext } from 'react';
import { Button } from '@material-ui/core';

import { multiStepContext } from '../FormThree.js';
function NinthStep({ setStep }) {
	const { submitData } = useContext(multiStepContext);
	return (
		<div>
			<h4 style={{ color: '#ff0000 ' }}>Almost Done</h4>

			<h3>Certification for Copyright Claimants</h3>
			<div>
				<div component='fieldset' className='mt-4 fieldset'>
					<h5 style={{ lineHeight: '1.7' }}>
						I <input type='text' placeholder='Name' className='mr-2' />
						and aware that, under the Copyright Act of 1976, as amended, at 17 U.S.C. §506(e), the
						law provides: “Any person who knowingly makes a false representation of a material fact
						in the application for copyright registration provided for by section 409, or in any
						written statement filed in connection with the application, shall be fined not more than
						$2,500.”
					</h5>
				</div>
			</div>

			<Button onClick={() => setStep(8)} variant='contained' color='secondary'>
				Previous
			</Button>
			<Button variant='contained' color='primary' onClick={submitData}>
				Submit
			</Button>
		</div>
	);
}

export default NinthStep;
