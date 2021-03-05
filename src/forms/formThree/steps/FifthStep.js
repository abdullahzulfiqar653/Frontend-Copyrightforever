import React, { useContext, useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import { multiStepContext } from '../FormThree.js';

function FifthStep({ setStep }) {
	const { virtualArtData, setVirtualArtData } = useContext(multiStepContext);
	const [valueTake, setValueTake] = useState('');

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
						<FormControlLabel value='1' control={<Radio />} label='Yes' />
						<FormControlLabel value='0' control={<Radio />} label='No' />
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
							setValueTake(String(e.target.value))
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
			<Button onClick={() => {
				console.log(valueTake)
				switch (String(valueTake)) {
					case 'first_published_edition_of_work':
						setVirtualArtData({
							...virtualArtData,
							first_published_edition_of_work: '1',
							first_application_by_the_author: '0',
							changed_version_of_the_work: '0'
						})
						console.log(virtualArtData, "1")
						break;
					case 'first_application_by_the_author':
						setVirtualArtData({
							...virtualArtData,
							first_application_by_the_author: '1',
							first_published_edition_of_work: '0',
							changed_version_of_the_work: '0'
						})
						console.log(virtualArtData, "2")
						break;
					case 'changed_version_of_the_work':
						setVirtualArtData({
							...virtualArtData,
							changed_version_of_the_work: '1',
							first_application_by_the_author: '0',
							first_published_edition_of_work: '0'
						})
						console.log(virtualArtData, "3")
						break;
						}
				setStep(6)
			}} variant='contained' color='primary'>
				Next
			</Button>
		</div>
	);
}

export default FifthStep;
