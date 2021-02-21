import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { multiStepContext } from '../FormThree.js';
function SeventhStep({ setStep }) {
	const hiddenInput = React.useRef(null);
	const { virtualArtData, setVirtualArtData } = useContext(multiStepContext);
	// onchange
	return (
		<div>
			<h4 style={{ color: '#ff0000 ' }}>Almost Done</h4>
			<h3>Physical Deposit Copy of Your Work</h3>
			<div>
				<div component='fieldset' className='mt-4 fieldset'>
					<h5 style={{ lineHeight: '1.7' }}>
						You must provide copies of your work of authorship or phonograph for filing with the
						Copyright Office as follows, as required by the statute:
					</h5>
				</div>
			</div>
			<ul className='form_lists'>
				<li>
					<strong className='strong'>Unpublished Work:</strong> Deposit one complete copy (or
					phonorecord)
				</li>
				<li>
					<strong className='strong'>Published Work:</strong> Deposit two complete copies (or one
					phonorecord) of the best edition.
				</li>
				<li>
					<strong className='strong'>Work First Published Outside the United States:</strong>{' '}
					Deposit one complete copy (or phonorecord) of the first foreign edition.
				</li>
				<li>
					<strong className='strong'>Contribution to a Collective Work:</strong> Deposit one
					complete copy (or pho-norecord) of the best edition of the collective work
				</li>
			</ul>

			<h5 className='d-flex align-items-center'>
				<strong className='strong'>Upload file here:</strong>{' '}
				<input
					type='file'
					name='file'
					onChange={(e) => {
						let file = e.target.files[0]
						let data = new FormData()
						// var FormData: new (form?: HTMLFormElement) => FormData interface FormData
						console.log(file, "this is file")
						data.append('file', file)
						
						console.log(data.get('file'), "aaaaaaaaaaaa")
						console.log(Array.from(data), "bbbbbbbbbb")
						setVirtualArtData({ ...virtualArtData, file: data });
						// console.log(e.target.files[0])
						// const fileReader = new FileReader();
						// fileReader.readAsDataURL(e.target.files[0]);
						// fileReader.onload = (e) => {
						// 	setVirtualArtData({ ...virtualArtData, file: e.target.result });
						// };
					}}
					ref={hiddenInput}
					className='d-none'
				/>
				<Button
					className='m-0 ml-3 '
					variant='contained'
					color='default'
					startIcon={<CloudUploadIcon />}
					onClick={() => hiddenInput.current.click()}
				>
					Upload
				</Button>
			</h5>
			<Button onClick={() => {
				console.log(virtualArtData)
				setStep(6)
			}} variant='contained' color='secondary'>
				Previous
			</Button>
			<Button onClick={() => setStep(8)} variant='contained' color='primary'>
				Next
			</Button>
		</div>
	);
}

export default SeventhStep;
