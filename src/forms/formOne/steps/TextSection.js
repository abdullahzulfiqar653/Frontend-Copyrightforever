import React, { useState, useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Button, TextField } from '@material-ui/core';
import { multiStepContext } from '../FormOne.js'

function TextSection({ text, textField, setModalShow }) {
	const { performingArtData, setPerformingArtData } = useContext(multiStepContext);
	return (
		<>
			<Row>
				<Col>
					<h1 className='pb-0'>
						<span>{text.uppar}</span>
					</h1>
					<h1>
						{text.heading1}
						<span>?</span>
					</h1>
					<h2>{text.ulHeading}</h2>
					<p style={{ fontSize: '20px' }}>
						<strong>{text.listItem1}</strong>
					</p>
					<h5 style={{ lineHeight: '1.6' }}>{text.listItem2}</h5>
				</Col>
			</Row>
			<div className='form_field_cont'>
				<div>
					<div>
						<div className='d-flex input_contained'>
							<TextField
								label='Please Tell Us Your Name :'
								margin='normal'
								variant='outlined'
								color='secondary'
								className='mr-3'
								value={performingArtData['name']}
								onChange={(e) => setPerformingArtData({ ...performingArtData, name: e.target.value })}
							/>
							<TextField
								label='Your Email Address:'
								margin='normal'
								variant='outlined'
								color='secondary'
								value={performingArtData['email_address']}
								onChange={(e) =>
									setPerformingArtData({ ...performingArtData, email_address: e.target.value })
								}
							/>
						</div>
						{textField}
					</div>
					<Button
						onClick={() => {
							console.log(performingArtData)
							text.setStart(true);
							text.setModalShow(true);
						}}
						variant='contained'
						color='primary'
					>
						Let's Start
					</Button>
				</div>
			</div>
		</>
	);
}

export default TextSection;
