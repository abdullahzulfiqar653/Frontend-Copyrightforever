import React from 'react';
import { Button } from '@material-ui/core';

function SeventhStep({ setStep }) {
	return (
		<div>
			<h4 style={{ color: '#ff0000 ' }}>Almost Done</h4>
			<h3>Physical Deposit Copy of Your Work</h3>
			<div>
				<div component='fieldset' className='mt-4 fieldset'>
					<h5 style={{ lineHeight: '1.7' }}>
						You must provide copies of your work of authorship or phonograph for filing
						with the Copyright Office as follows, as required by the statute:
					</h5>
				</div>
			</div>
			<ul className='form_lists'>
				<li>
					<strong className='strong'>Unpublished Work:</strong> Deposit one complete copy
					(or phonorecord)
				</li>
				<li>
					<strong className='strong'>Published Work:</strong> Deposit two complete copies
					(or one phonorecord) of the best edition.
				</li>
				<li>
					<strong className='strong'>
						Work First Published Outside the United States:
					</strong>{' '}
					Deposit one complete copy (or phonorecord) of the first foreign edition.
				</li>
				<li>
					<strong className='strong'>Contribution to a Collective Work:</strong> Deposit
					one complete copy (or pho-norecord) of the best edition of the collective work
				</li>
			</ul>

			<h5>
				<strong className='strong'>Upload file here:</strong> <input type='file' />
			</h5>
			<Button onClick={() => setStep(6)} variant='contained' color='secondary'>
				Previous
			</Button>
			<Button onClick={() => setStep(8)} variant='contained' color='primary'>
				Next
			</Button>
		</div>
	);
}

export default SeventhStep;
