import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { TextField, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import FirstStep from './steps/FirstStep';
import SecondStep from './steps/SecondStep';
import ThirdStep from './steps/ThirdStep';
import FourthStep from './steps/FourthStep';
import FifthStep from './steps/FifthStep';
import SixthStep from './steps/SixthStep';
import SeventhStep from './steps/SeventhStep';
import EighthStep from './steps/EighthStep';
import NinthStep from './steps/NinthStep';
import Steeper from '../components/Steeper';
import TextSection from '../components/TextSection';

function FormTwo() {
	const [currentStep, setStep] = useState(1);
	const [start, setStart] = useState(false);
	const [modalShow, setModalShow] = React.useState(false);

	const showStep = (step) => {
		// eslint-disable-next-line default-case
		switch (step) {
			case 1:
				return <FirstStep setStep={setStep} />;
			case 2:
				return <SecondStep setStep={setStep} />;
			case 3:
				return <ThirdStep setStep={setStep} />;
			case 4:
				return <FourthStep setStep={setStep} />;
			case 5:
				return <FifthStep setStep={setStep} />;
			case 6:
				return <SixthStep setStep={setStep} />;
			case 7:
				return <SeventhStep setStep={setStep} />;
			case 8:
				return <EighthStep modal={modalShow} setModal={setModalShow} setStep={setStep} />;
			case 9:
				return <NinthStep setStep={setStep} />;
		}
	};
	return (
		<Container className='form_cont' id='literary_work'>
			<Row className='img_cont'>
				<Col className='p-0' sm={12} md={6} xl={4}>
					<img className='img-fluid' src='/images/tx/TX1.jpg' alt='pic1' />
				</Col>
				<Col className='p-0' sm={12} md={6} xl={4}>
					<img className='img-fluid' src='/images/tx/TX2.jpg' alt='pic2' />
				</Col>
				<Col className='p-0' sm={12} md={6} xl={4}>
					<img className='img-fluid' src='/images/tx/TX3.jpg' alt='pic3' />
				</Col>
			</Row>
			{start ? (
				<div className='form_field_cont'>
					<Steeper currentStep={currentStep} />
					{showStep(currentStep)}
				</div>
			) : (
				<TextSection
					text={{
						uppar: 'CopyrightForever.com Form TX for Literary Works',
						heading1: 'Are you the author of a literary work ',
						ulHeading: 'Literary Arts field includes:',
						listItem1: `Literary Arts field includes such matters as writings of fiction, nonfiction, poetry,
                                textbooks, reference works, directories, catalogs, advertising copy, compilations of information,
                                and computer programs`,
						listItem2: `Register and protect your literary works in under 5 MINUTES. Use our SWIFT
                        REGISTRATION portal.`,
						setStart,
						setModalShow,
					}}
					textField={
						<div className='d-flex input_contained'>
							<TextField
								label='Mailing Address:'
								margin='normal'
								variant='outlined'
								color='secondary'
								className='mr-3'
							/>
							<TextField
								label='City:'
								margin='normal'
								variant='outlined'
								color='secondary'
								className='mr-3'
							/>
							<FormControl className='mr-3' variant='outlined' margin='normal'>
								<InputLabel id='demo-simple-select-outlined-label'>Age</InputLabel>
								<Select
									labelId='demo-simple-select-outlined-label'
									id='demo-simple-select-outlined'
									label='Age'
								>
									<MenuItem value=''>
										<em>None</em>
									</MenuItem>
									<MenuItem value={10}>Ten</MenuItem>
									<MenuItem value={20}>Twenty</MenuItem>
									<MenuItem value={30}>Thirty</MenuItem>
								</Select>
							</FormControl>
							<TextField label='Zip Code:' margin='normal' variant='outlined' color='secondary' />
						</div>
					}
				/>
			)}
		</Container>
	);
}

export default FormTwo;
