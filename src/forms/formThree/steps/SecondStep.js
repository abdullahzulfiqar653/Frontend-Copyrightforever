import React, { useContext } from 'react';

import { Button, TextField } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Model from '../continuosSheet/ContinuationSheet';

import { multiStepContext } from '../FormThree.js';

function SecondStep({ setStep }) {
	const { virtualArtData, setVirtualArtData } = useContext(multiStepContext);

	const [continueSheet, setContinueSheet] = React.useState(false);
	const [value, setValue] = React.useState('female');

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<div>
			<h3>About the Author</h3>
			<div className='d-flex input_contained'>
				<TextField
					label='Name of author:'
					margin='normal'
					variant='outlined'
					color='secondary'
					className='mr-3'
					value={virtualArtData['name_of_author']}
					onChange={(e) => setVirtualArtData({ ...virtualArtData, name_of_author: e.target.value })}
				/>
				<TextField
					label='Year of Birth'
					margin='normal'
					variant='outlined'
					color='secondary'
					className='mr-3'
					value={virtualArtData['year_of_birth']}
					onChange={(e) => setVirtualArtData({ ...virtualArtData, year_of_birth: e.target.value })}
				/>
				<TextField
					label=' Year of Death'
					margin='normal'
					variant='outlined'
					color='secondary'
					value={virtualArtData['year_of_death']}
					onChange={(e) => setVirtualArtData({ ...virtualArtData, year_of_death: e.target.value })}
				/>
			</div>
			<div>
				<div component='fieldset' className='mt-4 fieldset'>
					<FormLabel component='legend'>Was this a “work for hire”?</FormLabel>
					<RadioGroup
						aria-label='radio'
						name='radio'
						className='flex-row'
						value={virtualArtData['work_for_hire']}
						onChange={(e) =>
							setVirtualArtData({ ...virtualArtData, work_for_hire: e.target.value })
						}
					>
						<FormControlLabel value='yes' control={<Radio />} label='Yes' />
						<FormControlLabel value='no' control={<Radio />} label='No' />
					</RadioGroup>
				</div>
			</div>
			<div className='d-flex input_contained'>
				<TextField
					label='Author is a Citizen of'
					margin='normal'
					variant='outlined'
					color='secondary'
					className='mr-3'
					value={virtualArtData['citizen_of']}
					onChange={(e) => setVirtualArtData({ ...virtualArtData, citizen_of: e.target.value })}
				/>
				<TextField
					label='Domiciled'
					margin='normal'
					variant='outlined'
					color='secondary'
					value={virtualArtData['domiciled_of']}
					onChange={(e) => setVirtualArtData({ ...virtualArtData, domiciled_of: e.target.value })}
				/>
			</div>
			<div className='d-flex input_contained'>
				<div component='fieldset' className='mt-4 fieldset'>
					<FormLabel component='legend'>Was the authorship anonymous ?</FormLabel>
					<RadioGroup
						aria-label='radio'
						name='radio'
						className='flex-row'
						value={virtualArtData['authorship_anonymous']}
						onChange={(e) =>
							setVirtualArtData({ ...virtualArtData, authorship_anonymous: e.target.value })
						}
					>
						<FormControlLabel value='yes' control={<Radio />} label='Yes' />
						<FormControlLabel value='no' control={<Radio />} label='No' />
					</RadioGroup>
				</div>
				<div component='fieldset' className='mt-4 fieldset'>
					<FormLabel component='legend'>Was the authorship pseudonymous ?</FormLabel>
					<RadioGroup
						aria-label='radio'
						name='radio'
						className='flex-row'
						value={virtualArtData['authorship_pseudonymous']}
						onChange={(e) =>
							setVirtualArtData({ ...virtualArtData, authorship_pseudonymous: e.target.value })
						}
					>
						<FormControlLabel value='yes' control={<Radio />} label='Yes' />
						<FormControlLabel value='no' control={<Radio />} label='No' />
					</RadioGroup>
				</div>
			</div>
			<div>
				<TextField
					label='Nature of authorship - Please describe the nature of material created by this author in
                            which copyright is claimed'
					margin='normal'
					variant='outlined'
					color='secondary'
					value={virtualArtData['Nature_of_authorship']}
					onChange={(e) =>
						setVirtualArtData({ ...virtualArtData, Nature_of_authorship: e.target.value })
					}
				/>
			</div>
			<div className='d-flex flex-column  mt-2 m-0 p-0'>
				<p style={{ fontSize: '20px' }}>
					If there are more than one author, please supply the names of other authors along with
					their Birth Year and Death Year, as applicable, on Addendum Sheet
				</p>
				<Button
					className='align-self-end'
					onClick={() => setContinueSheet(true)}
					variant='contained'
					color='secondary'
				>
					Continuation Sheet
				</Button>
			</div>
			<Model show={continueSheet} onHide={() => setContinueSheet(false)} />

			<Button onClick={() => setStep(1)} variant='contained' color='secondary'>
				Previous
			</Button>
			<Button onClick={() => setStep(3)} variant='contained' color='primary'>
				Next
			</Button>
		</div>
	);
}

export default SecondStep;
