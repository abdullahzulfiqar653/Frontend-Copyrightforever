import React, { useState, useEffect } from 'react';
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
import TextSection from './steps/TextSection';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

export const multiStepContext = React.createContext();

function FormThree() {
	const [currentStep, setStep] = useState(1);
	const [start, setStart] = useState(false);
	const [modalShow, setModalShow] = React.useState(false);

	//state & function for input data
	const [virtualArtData, setVirtualArtData] = useState([]);
	const submitData = () => {
		console.log(virtualArtData);
	};

	useEffect(() => {
		new Swiper('.swiper-container', {
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
		<multiStepContext.Provider value={{ virtualArtData, setVirtualArtData, submitData }}>
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
						}}
						textField={
							<div className='d-flex input_contained'>
								<TextField
									label='Mailing Address:'
									margin='normal'
									variant='outlined'
									color='secondary'
									className='mr-3'
									value={virtualArtData['mailing_address']}
									onChange={(e) =>
										setVirtualArtData({ ...virtualArtData, mailing_address: e.target.value })
									}
								/>
								<TextField
									label='City:'
									margin='normal'
									variant='outlined'
									color='secondary'
									className='mr-3'
									value={virtualArtData['city']}
									onChange={(e) => setVirtualArtData({ ...virtualArtData, city: e.target.value })}
								/>
								<FormControl className='mr-3' variant='outlined' margin='normal'>
									<InputLabel id='demo-simple-select-outlined-label'>State</InputLabel>
									<Select
										labelId='demo-simple-select-outlined-label'
										id='demo-simple-select-outlined'
										label='Age'
										value={virtualArtData['state']}
										onChange={(e) =>
											setVirtualArtData({ ...virtualArtData, state: e.target.value })
										}
									>
										<MenuItem value=''>
											<em>None</em>
										</MenuItem>
										<MenuItem value='Alabama'>Alabama</MenuItem>
										<MenuItem value='Alaska'>Alaska</MenuItem>
										<MenuItem value='Arizona'>Arizona</MenuItem>
										<MenuItem value='California'>California</MenuItem>
										<MenuItem value='Colorado'>Colorado</MenuItem>
										<MenuItem value='Connecticut'>Connecticut</MenuItem>
										<MenuItem value='Delaware'>Delaware</MenuItem>
										<MenuItem value='Florida'>Florida</MenuItem>
										<MenuItem value='Georgia'>Georgia</MenuItem>
										<MenuItem value='Hawaii'>Hawaii</MenuItem>
										<MenuItem value='Idaho'>Idaho</MenuItem>
										<MenuItem value='Illinois'>Illinois</MenuItem>
										<MenuItem value='Indiana'>Indiana</MenuItem>
										<MenuItem value='Iowa'>Iowa</MenuItem>
										<MenuItem value='Kansas'>Kansas</MenuItem>
										<MenuItem value='Kentucky'>Kentucky</MenuItem>
										<MenuItem value='Louisiana'>Louisiana</MenuItem>
										<MenuItem value='Maine'>Maine</MenuItem>
										<MenuItem value='Maryland'>Maryland</MenuItem>
										<MenuItem value='Massachusetts'>Massachusetts</MenuItem>
										<MenuItem value='Michigan'>Michigan</MenuItem>
										<MenuItem value='Minnesota'>Minnesota</MenuItem>
										<MenuItem value='Mississippi'>Mississippi</MenuItem>
										<MenuItem value='Missouri'>Missouri</MenuItem>
										<MenuItem value='Montana'>Montana</MenuItem>
										<MenuItem value='Nebraska'>Nebraska</MenuItem>
										<MenuItem value='Nevada'>Nevada</MenuItem>
										<MenuItem value='New Hampshire'>New Hampshire</MenuItem>
										<MenuItem value='New Mexico'>New Mexico</MenuItem>
										<MenuItem value='New York'>New York</MenuItem>
										<MenuItem value='North Carolina'>North Carolina</MenuItem>
										<MenuItem value='North Dakota'>North Dakota</MenuItem>
										<MenuItem value='Ohio'>Ohio</MenuItem>
										<MenuItem value='Oklahoma'>Oklahoma</MenuItem>
										<MenuItem value='Oregon'>Oregon</MenuItem>
										<MenuItem value='Pennsylvania'>Pennsylvania</MenuItem>
										<MenuItem value='Rhoda Island'>Rhoda Island</MenuItem>
										<MenuItem value='South Carolina'>South Carolina</MenuItem>
										<MenuItem value='South Dakota'>South Dakota</MenuItem>
										<MenuItem value='Tennessee'>Tennessee</MenuItem>
										<MenuItem value='Texas'>Texas</MenuItem>
										<MenuItem value='Utah'>Utah</MenuItem>
										<MenuItem value='Vermont'>Vermont</MenuItem>
										<MenuItem value='Virginia'>Virginia</MenuItem>
										<MenuItem value='Washington'>Washington</MenuItem>
										<MenuItem value='West Virginia'>West Virginia</MenuItem>
										<MenuItem value='Wisconsin'>Wisconsin</MenuItem>
										<MenuItem value='Wyoming'>Wyoming</MenuItem>
									</Select>
								</FormControl>
								<TextField
									label='Zip Code:'
									margin='normal'
									variant='outlined'
									color='secondary'
									value={virtualArtData['zipCode']}
									onChange={(e) =>
										setVirtualArtData({ ...virtualArtData, zipCode: e.target.value })
									}
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
