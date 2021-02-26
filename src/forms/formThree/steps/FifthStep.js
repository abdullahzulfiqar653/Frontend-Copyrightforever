import React, { useContext } from 'react';
import { Button, TextField } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import { multiStepContext } from '../FormThree.js';

function FifthStep({ setStep }) {
	const { virtualArtData, setVirtualArtData } = useContext(multiStepContext);

	return (
		<div>
			<h3>Previous Registration</h3>
			<div>
				<div component='fieldset' className='mt-4 fieldset'>
					<FormLabel component='legend'>
						Has your work, or a version of it, previously been registered with the Copyright Office?{' '}
					</FormLabel>
					<RadioGroup
						aria-label='radio'
						name='radio'
						className='flex-row'
						value={virtualArtData['previously_registered']}
						onChange={(e) =>
							setVirtualArtData({ ...virtualArtData, previously_registered: e.target.value })
						}
					>
						<FormControlLabel value='true' control={<Radio />} label='Yes' />
						<FormControlLabel value='false' control={<Radio />} label='No' />
					</RadioGroup>
				</div>
			</div>
			<div>
				<div component='fieldset' className='mt-4 fieldset'>
					<FormLabel component='legend'>
						If you answered Yes, please explain why you are seeking another registration:
					</FormLabel>
					<RadioGroup
						aria-label='radio'
						name='radio'
						// value={virtualArtData['reason']}
						onChange={(e) =>
						{
							const a = String(e.target.value)
							switch (a) {
								case 'first_published_edition_of_work':
									console.log(e.target.value)
									setVirtualArtData({ ...virtualArtData, first_published_edition_of_work: true })
									console.log(virtualArtData)
									break;
								case 'first_application_by_the_author':
									setVirtualArtData({ ...virtualArtData, first_application_by_the_author: true })
									console.log(virtualArtData)
									break;
								case 'changed_version_of_the_work':
									setVirtualArtData({ ...virtualArtData, changed_version_of_the_work: true })
									console.log(virtualArtData)
									break;
							}
						}
						}
					>
						<FormControlLabel
							value='first_published_edition_of_work'
							control={<Radio />}
							label='This is the first published edition of the work.'
						/>
						<FormControlLabel
							value='first_application_by_the_author'
							control={<Radio />}
							label='This is the first application by the author as a copyright claimant.'
						/>
						<FormControlLabel
							value='changed_version_of_the_work'
							control={<Radio />}
							label='This is a changed version of the work, as shown by Section 6.'
						/>
					</RadioGroup>
				</div>
			</div>
			<div className='d-flex input_contained'>
				<TextField
					label='Prior Registration Number'
					margin='normal'
					variant='outlined'
					color='secondary'
					className='mr-3'
					value={virtualArtData['prior_reg_number']}
					onChange={(e) =>
						setVirtualArtData({ ...virtualArtData, prior_reg_number: e.target.value })
					}
				/>
				<TextField
					label='Year'
					margin='normal'
					variant='outlined'
					color='secondary'
					value={virtualArtData['prior_reg_year']}
					onChange={(e) =>
						setVirtualArtData({ ...virtualArtData, prior_reg_year: e.target.value })
					}
				/>
			</div>
			<Button onClick={() => setStep(4)} variant='contained' color='secondary'>
				Previous
			</Button>
			<Button onClick={() => setStep(6)} variant='contained' color='primary'>
				Next
			</Button>
		</div>
	);
}

export default FifthStep;
