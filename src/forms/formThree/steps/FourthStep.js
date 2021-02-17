import React, { useContext } from 'react';
import { Button, TextField } from '@material-ui/core';
import FormLabel from '@material-ui/core/FormLabel';
import { multiStepContext } from '../FormThree.js';

function FourthStep({ setStep }) {
	const { virtualArtData, setVirtualArtData } = useContext(multiStepContext);
	return (
		<div>
			<h3>Copyright Claimants</h3>
			<FormLabel className='mt-4' style={{ lineHeight: '1.6' }} component='legend'>
				Who is the copyright claimant (the copyright owner)?
			</FormLabel>
			<div className='d-flex input_contained'>
				<TextField
					label='Name'
					margin='normal'
					variant='outlined'
					color='secondary'
					className='mr-3'
					value={virtualArtData['copyrightOwnerName']}
					onChange={(e) => setVirtualArtData({ ...virtualArtData, copyrightOwnerName: e.target.value })}
				/>
				<TextField
					label='Address'
					margin='normal'
					variant='outlined'
					color='secondary'
					className='mr-3'
					value={virtualArtData['copyrightOwnerAddress']}
					onChange={(e) => setVirtualArtData({ ...virtualArtData, copyrightOwnerAddress: e.target.value })}
				/>
				<TextField
					label=' Address'
					margin='normal'
					variant='outlined'
					color='secondary'
					className='mr-3'
					value={virtualArtData['copyrightOwnerAddress']}
					onChange={(e) => setVirtualArtData({ ...virtualArtData, copyrightOwnerAddress: e.target.value })}
				/>
			</div>
			<FormLabel className='mt-3' style={{ lineHeight: '1.6' }} component='legend'>
				Has the copyright been transferred?
			</FormLabel>
			<div>
				<TextField
					label='Identify the recipient here'
					margin='normal'
					variant='outlined'
					color='secondary'
					className='mr-3'
					value={virtualArtData['copyrightOwnerRecipientIdentify']}
					onChange={(e) =>
						setVirtualArtData({ ...virtualArtData, copyrightOwnerRecipientIdentify: e.target.value })
					}
				/>
			</div>
			<FormLabel className='mt-3' style={{ lineHeight: '1.6' }} component='legend'>
				and briefly explain how the recipient obtained ownership from the author listed
			</FormLabel>
			<div>
				<TextField
					label=' such as by “work for
                            hire”; “purchase”; “gift” etc'
					margin='normal'
					variant='outlined'
					color='secondary'
					className='mr-3'
					value={virtualArtData['copyrightOwnerRecipientOwnership']}
					onChange={(e) =>
						setVirtualArtData({ ...virtualArtData, copyrightOwnerRecipientOwnership: e.target.value })
					}
				/>
			</div>
			<Button onClick={() => setStep(3)} variant='contained' color='secondary'>
				Previous
			</Button>
			<Button onClick={() => setStep(5)} variant='contained' color='primary'>
				Next
			</Button>
		</div>
	);
}

export default FourthStep;
