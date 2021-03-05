import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import { Redirect, Link } from 'react-router-dom';
import { multiStepContext } from '../FormThree.js';
import { useHistory } from 'react-router-dom';
import Loader from "react-loader-spinner"

function NinthStep({ setStep }) {
	const { submitData } = useContext(multiStepContext);
	const { virtualArtData, setVirtualArtData } = useContext(multiStepContext);
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	const { error } = useContext(multiStepContext);
	const { loading } = useContext(multiStepContext);
	const history = useHistory()
	
	return (
		<div>
			<h4 style={{ color: '#ff0000 ' }}>Almost Done</h4>

			<h3>Certification for Copyright Claimants</h3>
			<div>
				<div component='fieldset' className='mt-4 fieldset'>
					<h5 style={{ lineHeight: '1.7' }}>
						I <input
							type='text'
							placeholder='Name'
							className='mr-2'
							value={virtualArtData['certification_name']}
							onChange={(e) => setVirtualArtData({ ...virtualArtData, certification_name: e.target.value })}
							/>
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
			<Button variant='contained' color='primary' onClick={isAuthenticated ? submitData : history.push('/login')}>
				{loading ? (
						<Loader
							style={{ display: 'inline-block' }}
							type="ThreeDots"
							color='white'
							height={5}
							width={30}
						/>
							) : ('')}
				Submit
			</Button>
			{isAuthenticated && error != null && error != undefined
				? Object.keys(error.response.data).map((key, index) => (
						<ul key={index} style={{ paddingLeft: '20px' }}>
							<li style={{ color: 'red', fontSize: '22px', listStyleType:"square" }}>
							<span><strong>{key.toUpperCase()}</strong> : </span>
								<span><strong>{error.response.data[key]}</strong></span>
							</li>
						</ul>
					))
			: null}
		</div>
	);
}

export default NinthStep;
