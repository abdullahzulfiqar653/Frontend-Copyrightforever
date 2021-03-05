import React, {useContext} from 'react';
import { Button, TextField, FormLabel } from '@material-ui/core';
import { multiStepContext } from '../FormTwo'

function FirstStep({ setStep }) {
	const { literaryWorksData, setLiteraryWorksData} = useContext(multiStepContext);
	return (
		<div>
			<h3> About Your Work</h3>
			<TextField
				label='What is the title of your work of authorship?'
				margin='normal'
				variant='outlined'
				color='secondary'
				value={literaryWorksData['title_of_work']}
				onChange={(e) => setLiteraryWorksData({ ...literaryWorksData, title_of_work: e.target.value })}
			/>

			<TextField
				label='Please list any prior title(s) used for your work:'
				margin='normal'
				variant='outlined'
				color='secondary'
				value={literaryWorksData['prior_title']}
				onChange={(e) => setLiteraryWorksData({ ...literaryWorksData, prior_title: e.target.value })}
			/>
			<FormLabel className='mt-4' style={{ lineHeight: '1.6' }} component='legend'>
				If your work was previously published in any periodical? If so, please provide:
			</FormLabel>
			<TextField
				label='what is the title of your collective work:'
				margin='normal'
				variant='outlined'
				color='secondary'
				value={literaryWorksData['title_of_collective_work']}
				onChange={(e) => setLiteraryWorksData({ ...literaryWorksData, title_of_collective_work: e.target.value })}
			/>
			<div className='d-flex input_contained'>
				<TextField
					className='mr-3'
					label='Volume'
					margin='normal'
					variant='outlined'
					color='secondary'
					value={literaryWorksData['volume']}
					onChange={(e) => setLiteraryWorksData({ ...literaryWorksData, volume: e.target.value })}
				/>
				<TextField
					className='mr-3'
					label='Number'
					margin='normal'
					variant='outlined'
					color='secondary'
					value={literaryWorksData['number']}
					onChange={(e) => setLiteraryWorksData({ ...literaryWorksData, number: e.target.value })}
				/>
				<TextField
					id='date'
					className='mr-3'
					label='Issue Date'
					type='date'
					defaultValue='yyyy-mm-dd'
					margin='normal'
					variant='outlined'
					color='secondary'
					InputLabelProps={{
						shrink: true,
					}}
					value={literaryWorksData['issue_date']}
					onChange={(e) => setLiteraryWorksData({ ...literaryWorksData, issue_date: e.target.value })}
				/>
				<TextField
					label=' Pages'
					margin='normal'
					variant='outlined'
					color='secondary'
					value={literaryWorksData['pages']}
					onChange={(e) => setLiteraryWorksData({ ...literaryWorksData, pages: e.target.value })}
				/>
			</div>
			<div>
				<Button onClick={() => {
					console.log(literaryWorksData)
					setStep(2)
				}} variant='contained' color='primary'>
					Next
				</Button>
			</div>
		</div>
	);
}

export default FirstStep;
