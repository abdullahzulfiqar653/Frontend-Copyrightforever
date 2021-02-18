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
	const [virtualArtData, setVirtualArtData] = useState({
		name: '',
		email_address: '',
		mailing_address: '',
		city: '',
		state: '',
		zipcode: '',
		title_of_work: '',
		prior_title: '',
		title_of_collective_work: '',
		volume: '',
		number: '',
		issue: '',
		pages: '',
		name_of_author: '',
		year_of_birth: '',
		year_of_death: '',
		work_for_hire: '',
		citizen_of: '',
		domiciled_of: '',
		authorship_anonymous: '',
		authorship_pseudonymous: '',
		nature_of_authorship: '',
		year_of_authorship: '',
		date_of_authorship: '',
		nation: '',
		claimant_name: '',
		reciepient_name: '',
		how_obtained_ownership: '',
		previously_registered: '',
		first_published_edition_of_work: '',
		first_published_by_the_author: '',
		changed_version_of_the_work: '',
		prior_reg_number: '',
		prior_reg_year: '',
		identify_preexisting_work: '',
		describe_preexisting_work: '',
		file: '',	
		employer_name: '',
		employer_date_of_birth: '',
		date_of_hiring: '',
		employer_address: '',
		date_of_employing_copyright: '',
		sign_image: '',
		certification_name: '',
		continuation_title: '',
		name_and_address: '',
		name_of_author_1: '',
		year_of_birth_1: '',
		year_of_death_1: '',
		work_for_hire_1: '',
		citizen_of_1: '',
		domiciled_of_1: '',
		authorship_anonymous_1: '',
		authorship_pseudonymous_1: '',
		nature_of_authorship_1: '',
		name_of_author_2: '',
		year_of_birth_2: '',
		year_of_death_2: '',
		work_for_hire_2: '',
		citizen_of_2: '',
		domiciled_of_2: '',
		authorship_anonymous_2: '',
		authorship_pseudonymous_2: '',
		nature_of_authorship_2: '',
		name_of_author_3: '',
		year_of_birth_3: '',
		year_of_death_3: '',
		work_for_hire_3: '',
		citizen_of_3: '',
		domiciled_of_3: '',
		authorship_anonymous_3: '',
		authorship_pseudonymous_3: '',
		nature_of_authorship_3: '',
		continuation_name: '',
		continuation_date: '',
		continuation_address: '',
		continuation_city: '',
		continuation_state: '',
		continuation_zipcode: '',
	});
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
									<InputLabel htmlFor='state'>State</InputLabel>
									<Select
										// labelId='demo-simple-select-outlined-label'
										// id='demo-simple-select-outlined'
										label='Age'
										value={virtualArtData['state']}
										onChange={(e) =>
											setVirtualArtData({ ...virtualArtData, state: e.target.value })
										}
									>
										<MenuItem value=''>State</MenuItem>
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
									value={virtualArtData['zipcode']}
									onChange={(e) =>
										setVirtualArtData({ ...virtualArtData, zipcode: e.target.value })
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
