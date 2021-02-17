import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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
import TextSection from './steps/TextSection';

function FormFive() {
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
		<Container className='form_cont' id='serial_work'>
			<Row className='img_cont'>
				<Col className='p-0' sm={12} md={6} xl={4}>
					<img className='img-fluid' src='/images/SE/SE1.jpg' alt='pic1' />
				</Col>
				<Col className='p-0' sm={12} md={6} xl={4}>
					<img className='img-fluid' src='/images/SE/SE2.jpg' alt='pic2' />
				</Col>
				<Col className='p-0' sm={12} md={6} xl={4}>
					<img className='img-fluid' src='/images/SE/SE3.jpg' alt='pic3' />
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
						uppar: 'CopyrightForever.com Form SE for Serial Works',
						heading1: 'Are you the author or contributor of a serial work ',
						ulHeading: 'Serial works of authorship, whether original or derivative, includes:',
						listItem1: `Serial works of authorship, whether original or derivative, include periodicals;
                                    newspapers; annuals; and the journals, proceedings, and transactions of societies.`,
						listItem2: `Register and protect your serial works in under 5 MINUTES. Use our SWIFT
                                    REGISTRATION portal.`,
						setStart,
						setModalShow,
					}}
				/>
			)}
		</Container>
	);
}

export default FormFive;
