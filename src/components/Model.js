import React from 'react';
import { Modal } from 'react-bootstrap';
import { Button, TextField } from '@material-ui/core';

function Model(props) {
	return (
		<Modal {...props} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
			<Modal.Header closeButton>
				<Modal.Title id='contained-modal-title-vcenter'>
					POWER OF ATTORNEY AND AUTHORIZATION TO ACT ON BEHALF OF COPYRIGHT OWNER
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div>
					<div className='d-flex'>
						<TextField
							label='Name of Copyright Claimant'
							margin='normal'
							variant='outlined'
							color='secondary'
							className='mr-3'
						/>
						<TextField
							label='Date of Birth '
							margin='normal'
							variant='outlined'
							color='secondary'
						/>
					</div>
					<div>
						<TextField label='Address' margin='normal' variant='outlined' color='secondary' />
					</div>
					<div>
						<p>
							I hereby appoint CopyrightForever.com (CF) and anyone associated with CF as my agent
							or attorney-in-fact for all purposes relating to the filing and prosecution of my
							application for copyright with the U.S. Library of Congress, Copyright Office.
						</p>
						<p>
							I acknowledge that this authorization will revoke any prior authorization I may have
							granted to anyone else previously.{' '}
						</p>
						<p>
							I acknowledge that when this is electronically signed by me, or provided to
							CopyrightForever.com in written, signed form, CF may rely upon my authorization and
							take all actions on my behalf to file and/or prosecute my copyright application(s)
							until such time as my authorization is revoked or terminated.
						</p>
					</div>
					<div className='d-flex'>
						<TextField
							label='Date'
							margin='normal'
							variant='outlined'
							color='secondary'
							className='mr-3'
						/>
						<TextField label='Signature' margin='normal' variant='outlined' color='secondary' />
					</div>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<Button
					onClick={props.onHide}
					variant='contained'
					style={{ backgroundColor: 'red', color: 'white' }}
				>
					Submit
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default Model;
