import React, { useContext } from 'react';
import { Button, TextField, MenuItem, FormControl, InputLabel, Select } from '@material-ui/core';
import FormLabel from '@material-ui/core/FormLabel';
import { multiStepContext } from '../FormThree.js';

function ThirdStep({ setStep }) {
	const { virtualArtData, setVirtualArtData } = useContext(multiStepContext);
	return (
		<div>
			<h3>Year of Authorship</h3>
			<div>
				<TextField
					label=' Year of your authorship '
					margin='normal'
					variant='outlined'
					color='secondary'
					value={virtualArtData['year_of_authorship']}
					onChange={(e) =>
						setVirtualArtData({ ...virtualArtData, year_of_authorship: e.target.value })
					}
				/>
			</div>
			<FormLabel className='mt-3' style={{ lineHeight: '1.6' }} component='legend'>
				If your work has been published (i.e., disseminated publicly), please provide the Month____
				Day_____ Year____ and Nation_____ where the publication was initially done.
			</FormLabel>
			<div className='d-flex input_contained'>
				<FormControl className='mr-3' variant='outlined' margin='normal'>
					<InputLabel id='demo-simple-select-outlined-label'>Month</InputLabel>
					<Select
						labelId='demo-simple-select-outlined-label'
						id='demo-simple-select-outlined'
						label='Age'
						value={virtualArtData['date_of_authorship']}
						onChange={(e) =>
							setVirtualArtData({ ...virtualArtData, date_of_authorship: e.target.value })
						}
					>
						<MenuItem value=''>
							<em>None</em>
						</MenuItem>

						<MenuItem value={1}>01</MenuItem>
						<MenuItem value={2}>02</MenuItem>
						<MenuItem value={3}>03</MenuItem>
						<MenuItem value={4}>04</MenuItem>
						<MenuItem value={5}>05</MenuItem>
						<MenuItem value={6}>06</MenuItem>
						<MenuItem value={7}>07</MenuItem>
						<MenuItem value={8}>08</MenuItem>
						<MenuItem value={9}>09</MenuItem>
						<MenuItem value={10}>10</MenuItem>
						<MenuItem value={11}>11</MenuItem>
						<MenuItem value={12}>12</MenuItem>
					</Select>
				</FormControl>
				<FormControl className='mr-3' variant='outlined' margin='normal'>
					<InputLabel id='demo-simple-select-outlined-label'>Day</InputLabel>
					<Select
						labelId='demo-simple-select-outlined-label'
						id='demo-simple-select-outlined'
						label='Age'
						value={virtualArtData['date_of_authorship']}
						onChange={(e) =>
							setVirtualArtData({
								...virtualArtData,
								date_of_authorship: e.target.value,
							})
						}
					>
						<MenuItem value=''>
							<em>None</em>
						</MenuItem>
						<MenuItem value={1}>01</MenuItem>
						<MenuItem value={2}>02</MenuItem>
						<MenuItem value={3}>03</MenuItem>
						<MenuItem value={4}>04</MenuItem>
						<MenuItem value={5}>05</MenuItem>
						<MenuItem value={6}>06</MenuItem>
						<MenuItem value={7}>07</MenuItem>
						<MenuItem value={8}>08</MenuItem>
						<MenuItem value={9}>09</MenuItem>
						<MenuItem value={10}>10</MenuItem>
						<MenuItem value={11}>11</MenuItem>
						<MenuItem value={12}>12</MenuItem>
						<MenuItem value={13}>13</MenuItem>
						<MenuItem value={14}>14</MenuItem>
						<MenuItem value={15}>15</MenuItem>
						<MenuItem value={16}>16</MenuItem>
						<MenuItem value={17}>17</MenuItem>
						<MenuItem value={18}>18</MenuItem>
						<MenuItem value={19}>19</MenuItem>
						<MenuItem value={20}>20</MenuItem>
						<MenuItem value={21}>21</MenuItem>
						<MenuItem value={22}>22</MenuItem>
						<MenuItem value={23}>23</MenuItem>
						<MenuItem value={24}>24</MenuItem>
						<MenuItem value={25}>25</MenuItem>
						<MenuItem value={26}>26</MenuItem>
						<MenuItem value={27}>27</MenuItem>
						<MenuItem value={28}>28</MenuItem>
						<MenuItem value={29}>29</MenuItem>
						<MenuItem value={30}>30</MenuItem>
						<MenuItem value={31}>31</MenuItem>
					</Select>
				</FormControl>
				<TextField
					label=' Year'
					margin='normal'
					variant='outlined'
					color='secondary'
					className='mr-3'
					value={virtualArtData['date_of_authorship']}
					onChange={(e) =>
						setVirtualArtData({ ...virtualArtData, date_of_authorship: e.target.value })
					}
				/>
				<TextField
					label='Nation'
					margin='normal'
					variant='outlined'
					color='secondary'
					value={virtualArtData['initialPublishedNation']}
					onChange={(e) =>
						setVirtualArtData({ ...virtualArtData, initialPublishedNation: e.target.value })
					}
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
