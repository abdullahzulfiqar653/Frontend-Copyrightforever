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
import TextSection from '../components/TextSection';

function FormOne() {
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
		<Container className='form_cont' id='performing_art'>
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
						uppar: 'CopyrightForever.com Form PA for Performing Arts Works',
						heading1: 'Are you the author or contributor of a performing arts work',
						ulHeading: 'Performing arts works include:',
						listItem1: `Performing arts works include: musical works, including any accompanying words,dramatic works, including any accompanying music, pantomimes and choreographic
                        works, motion pictures and other audiovisual works.`,
						listItem2: `Register and protect your performing arts works of authorship in under 5 MINUTES.
                        Use our SWIFT REGISTRATION portal.`,
						setStart,
						setModalShow,
					}}
				/>
			)}
		</Container>
	);
}

export default FormOne;
