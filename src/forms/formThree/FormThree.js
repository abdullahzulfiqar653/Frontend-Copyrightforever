import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { TextField, InputLabel, FormControl, Select, MenuItem } from '@material-ui/core';
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
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

export const multiStepContext = React.createContext();

function FormThree() {
	const [currentStep, setStep] = useState(1);
	const [start, setStart] = useState(false);
	const [modalShow, setModalShow] = React.useState(false);
	const [userData, setUserData] = useState([]);
	const submitData = () => {console.log(userData)};

	// const { userData, setUserData } = useContext(multiStepContext);
	useEffect(() => {
		var swiper = new Swiper('.swiper-container', {
			slidesPerView: 3,
			spaceBetween: 0,
			slidesPerGroup: 3,
			autoplay: {
				delay: 3500,
				disableOnInteraction: false,
			},
			loop: true,
			loopFillGroupWithBlank: true,
		});
	}, []);

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
		<multiStepContext.Provider value={{ userData, setUserData, submitData }}>
			<Container className='form_cont' id='virtual_art'>
				<Row className='img_cont'>
					<Col className='p-0' sm={12} md={6} xl={12}>
						<div class='swiper-container'>
							<div class='swiper-wrapper'>
								<div class='swiper-slide'>
									<img className='img-fluid' src='/images/va/VA1.jpg' alt='pic1' />
								</div>
								<div class='swiper-slide'>
									<img className='img-fluid' src='/images/va/VA2.jpg' alt='pic2' />
								</div>
								<div class='swiper-slide'>
									<img className='img-fluid' src='/images/va/VA3.jpg' alt='pic3' />
								</div>
								<div class='swiper-slide'>
									<img className='img-fluid' src='/images/va/VA4.jpg' alt='pic4' />
								</div>
								<div class='swiper-slide'>
									<img className='img-fluid' src='/images/va/VA5.jpg' alt='pic5' />
								</div>
								<div class='swiper-slide'>
									<img className='img-fluid' src='/images/va/VA6.jpg' alt='pic6' />
								</div>
							</div>
						</div>
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
							uppar: 'CopyrightForever.com Form VA for Visual Arts Works',
							heading1: 'Are you the author of a visual arts work ',
							ulHeading: 'Visual Arts field includes:',
							listItem1: `Visual Arts field includes photography, drawings, architectural blueprints, and
                                    the like.`,
							listItem2: `Register and protect your visual arts works of authorship in under 5 MINUTES.
                        Use our SWIFT REGISTRATION portal.`,
							setStart,
							setModalShow,
							state: userData,
							setState: setUserData,
						}}
						textField={
							<div className=' border d-flex input_contained'>
								<TextField
									label='Mailing Address:'
									margin='normal'
									variant='outlined'
									color='secondary'
									className='mr-3'
									value={userData['city']}
									onChange={(e) => setUserData({ ...userData, city: e.target.value })}
								/>
								<TextField
									label='City:'
									margin='normal'
									variant='outlined'
									color='secondary'
									className='mr-3'
									value={userData['city']}
									onChange={(e) => setUserData({ ...userData, city: e.target.value })}
								/>
								<FormControl className='mr-3' variant='outlined' margin='normal'>
									<InputLabel id='demo-simple-select-outlined-label'>State</InputLabel>
									<Select
										labelId='demo-simple-select-outlined-label'
										id='demo-simple-select-outlined'
										label='Age'
										value={userData['state']}
										onChange={(e) => setUserData({ ...userData, state: e.target.value })}
									>
										<MenuItem value=''>
											<em>None</em>
										</MenuItem>
										<MenuItem value={10}>Ten</MenuItem>
										<MenuItem value={20}>Twenty</MenuItem>
										<MenuItem value={30}>Thirty</MenuItem>
									</Select>
								</FormControl>
								<TextField
									label='Zip Code:'
									margin='normal'
									variant='outlined'
									color='secondary'
									value={userData['zipCode']}
									onChange={(e) => setUserData({ ...userData, zipCode: e.target.value })}
								/>
							</div>
						}
					/>
				)}
			</Container>
		</multiStepContext.Provider>
	);
}

export default FormThree;
