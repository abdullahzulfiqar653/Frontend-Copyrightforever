import React, { useState } from 'react';
import { useSelector } from 'react-redux'
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
import axios from 'axios';
import { REQUEST_URL } from '../../constant/Constant';

export const multiStepContext = React.createContext();

function FormFour() {
	const [loading, setLoading] = useState(false)
	const [currentStep, setStep] = useState(1);
	const [start, setStart] = useState(false);
	const [modalShow, setModalShow] = React.useState(false);
	const [error, setError] = useState();
	const user = useSelector((state) => state.auth.user);
	let data = new FormData()

	const [soundRecordingData, setSoundRecordingData] = useState({
		form_name: 'SR Sound Recording',
		// form_start_from here
		name: '',
		email_address: '',

		//section_1
		title_of_work: '',
		prior_title: '',		

		// section 2
		name_of_author: '',
		year_of_birth: '',
		year_of_death: '',
		work_for_hire: '',
		citizen_of: '',
		domiciled_of: '',
		authorship_anonymous: '',
		authorship_pseudonymous: '',
		nature_of_authorship: '',
		// section 3
		year_of_authorship: '',
		date_of_authorship: '',
		nation: '',
		// section 4
		claimant_name: '',
		claimant_address: '',
		claimant_address_1: '',
		reciepient_name: '',
		how_obtained_ownership: '',
		// section 5
		previously_registered: '',
		first_published_edition_of_work: '',
		first_application_by_the_author: '',
		changed_version_of_the_work: '',
		prior_reg_number: '',
		prior_reg_year: '',
		// section 6
		identify_preexisting_work: '',
		describe_preexisting_work: '',
		// section 7
		file: null,
		// section 8
		employer_name: '',
		employer_date_of_birth: '',
		date_of_hiring: '',
		employer_address: '',
		date_of_employing_copyright: '',
		state: '',
		sign_image: null,
		// section 9
		certification_name: '',
		// from here continuation sheet start
		continuation_title: '',
		name_and_address: '',
		// continuation_section_1
		name_of_author_1: '',
		year_of_birth_1: '',
		year_of_death_1: '',
		work_for_hire_1: '',
		citizen_of_1: '',
		domiciled_of_1: '',
		authorship_anonymous_1: '',
		authorship_pseudonymous_1: '',
		nature_of_authorship_1: '',
		// continuation_section_2
		name_of_author_2: '',
		year_of_birth_2: '',
		year_of_death_2: '',
		work_for_hire_2: '',
		citizen_of_2: '',
		domiciled_of_2: '',
		authorship_anonymous_2: '',
		authorship_pseudonymous_2: '',
		nature_of_authorship_2: '',
		// continuation_section_3
		name_of_author_3: '',
		year_of_birth_3: '',
		year_of_death_3: '',
		work_for_hire_3: '',
		citizen_of_3: '',
		domiciled_of_3: '',
		authorship_anonymous_3: '',
		authorship_pseudonymous_3: '',
		nature_of_authorship_3: '',
		// continuation_form_last_fields_after_Authors
		continuation_name: '',
		continuation_date: '',
		continuation_address: '',
		continuation_city: '',
		continuation_state: '',
		continuation_zipcode: '',
	});
	const submitData = async () => {
		setLoading(true)
		data.append('form_name', soundRecordingData.form_name)
		data.append('new_form', true)
		// form_start_from here
		data.append('name', soundRecordingData.name)
		data.append('email_address', soundRecordingData.email_address)
		
		//section_1
		data.append('title_of_work', soundRecordingData.title_of_work)
		data.append('prior_title', soundRecordingData.prior_title)
		
		// section_2
		data.append('name_of_author', soundRecordingData.name_of_author)
		data.append('year_of_birth', soundRecordingData.year_of_birth)
		data.append('year_of_death', soundRecordingData.year_of_death)
		data.append('work_for_hire', soundRecordingData.work_for_hire)
		data.append('citizen_of', soundRecordingData.citizen_of)
		data.append('domiciled_of', soundRecordingData.domiciled_of)
		data.append('authorship_anonymous', soundRecordingData.authorship_anonymous)
		data.append('authorship_pseudonymous', soundRecordingData.authorship_pseudonymous)
		data.append('nature_of_authorship', soundRecordingData.nature_of_authorship)
		// Section_3
		data.append('year_of_authorship', soundRecordingData.year_of_authorship)
		data.append('date_of_authorship', soundRecordingData.date_of_authorship)
		data.append('nation', soundRecordingData.nation)
		// Section_4
		data.append('claimant_name', soundRecordingData.claimant_name)
		data.append('claimant_address', soundRecordingData.claimant_address)
		data.append('claimant_address_1', soundRecordingData.claimant_address_1)
		data.append('reciepient_name', soundRecordingData.reciepient_name)
		data.append('how_obtained_ownership', soundRecordingData.how_obtained_ownership)
		// Section_5
		data.append('previously_registered', soundRecordingData.previously_registered)
		data.append('first_published_edition_of_work', soundRecordingData.first_published_edition_of_work)
		data.append('first_application_by_the_author', soundRecordingData.first_application_by_the_author)
		data.append('changed_version_of_the_work', soundRecordingData.changed_version_of_the_work)
		data.append('prior_reg_number', soundRecordingData.prior_reg_number)
		data.append('prior_reg_year', soundRecordingData.prior_reg_year)
		// Section_6
		data.append('identify_preexisting_work', soundRecordingData.identify_preexisting_work)
		data.append('describe_preexisting_work', soundRecordingData.describe_preexisting_work)
		// Section_7
		data.append('file', soundRecordingData.file)
		// Section_8
		data.append('employer_name', soundRecordingData.employer_name)
		data.append('employer_date_of_birth', soundRecordingData.employer_date_of_birth)
		data.append('date_of_hiring', soundRecordingData.date_of_hiring)
		data.append('employer_address', soundRecordingData.employer_address)
		data.append('date_of_employing_copyright', soundRecordingData.date_of_employing_copyright)
		data.append('sign_image', soundRecordingData.sign_image)
		// Section_9
		data.append('certification_name', soundRecordingData.certification_name)
		// from here continuation sheet start
		data.append('continuation_title', soundRecordingData.continuation_title)
		data.append('name_and_address', soundRecordingData.name_and_address)
		// continuation_section_1
		data.append('name_of_author_1', soundRecordingData.name_of_author_1)
		data.append('year_of_birth_1', soundRecordingData.year_of_birth_1)
		data.append('year_of_death_1', soundRecordingData.year_of_death_1)
		data.append('work_for_hire_1', soundRecordingData.work_for_hire_1)
		data.append('citizen_of_1', soundRecordingData.citizen_of_1)
		data.append('domiciled_of_1', soundRecordingData.domiciled_of_1)
		data.append('authorship_anonymous_1', soundRecordingData.authorship_anonymous_1)
		data.append('authorship_pseudonymous_1', soundRecordingData.authorship_pseudonymous_1)
		data.append('nature_of_authorship_1', soundRecordingData.nature_of_authorship_1)
		// continuation_section_2
		data.append('name_of_author_2', soundRecordingData.name_of_author_2)
		data.append('year_of_birth_2', soundRecordingData.year_of_birth_2)
		data.append('year_of_death_2', soundRecordingData.year_of_death_2)
		data.append('work_for_hire_2', soundRecordingData.work_for_hire_2)
		data.append('citizen_of_2', soundRecordingData.citizen_of_2)
		data.append('domiciled_of_2', soundRecordingData.domiciled_of_2)
		data.append('authorship_anonymous_2', soundRecordingData.authorship_anonymous_2)
		data.append('authorship_pseudonymous_2', soundRecordingData.authorship_pseudonymous_2)
		data.append('nature_of_authorship_2', soundRecordingData.nature_of_authorship_2)
		// continuation_section_3
		data.append('name_of_author_3', soundRecordingData.name_of_author_3)
		data.append('year_of_birth_3', soundRecordingData.year_of_birth_3)
		data.append('year_of_death_3', soundRecordingData.year_of_death_3)
		data.append('work_for_hire_3', soundRecordingData.work_for_hire_3)
		data.append('citizen_of_3', soundRecordingData.citizen_of_3)
		data.append('domiciled_of_3', soundRecordingData.domiciled_of_3)
		data.append('authorship_anonymous_3', soundRecordingData.authorship_anonymous_3)
		data.append('authorship_pseudonymous_3', soundRecordingData.authorship_pseudonymous_3)
		data.append('nature_of_authorship_3', soundRecordingData.nature_of_authorship_3)
		// continuation_form_last_fields_after_Authors
		data.append('continuation_name', soundRecordingData.continuation_name)
		data.append('continuation_date', soundRecordingData.continuation_date)
		data.append('continuation_address', soundRecordingData.continuation_address)
		data.append('continuation_city', soundRecordingData.continuation_city)
		data.append('continuation_state', soundRecordingData.continuation_state)
		data.append('continuation_zipcode', soundRecordingData.continuation_zipcode)
		data.append('user', (user && user.userid))

		const config = {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `JWT ${localStorage.getItem('access')}`,
			Accept: 'application/json',
			},
		}
		// const body = JSON.stringify(virtualArtData)
		try {
      		const res = await axios.post(
        	REQUEST_URL + `/api/seform/add`,
        	data,
        	config
			);
			setLoading(false)
			setTimeout(function(){ alert("Form "+ res.statusText + ". Now pay for further proceeding or you also can pay later from YourAccount by selecting the given form"); }, 70);
		} catch (error) {
			setLoading(false)
      		if (error.response.data) {
				setError(error)
			}
    	}
	};
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
		<multiStepContext.Provider value={{ soundRecordingData, setSoundRecordingData, submitData, error, loading }}>
		<Container className='form_cont' id='sound_recording'>
			<Row className='img_cont'>
				<Col className='p-0' sm={12} md={6} xl={4}>
					<img className='img-fluid' src='/images/SR/SR1.jpg' alt='pic1' />
				</Col>
				<Col className='p-0' sm={12} md={6} xl={4}>
					<img className='img-fluid' src='/images/SR/SR2.jpg' alt='pic2' />
				</Col>
				<Col className='p-0' sm={12} md={6} xl={4}>
					<img className='img-fluid' src='/images/SR/SR3.jpg' alt='pic3' />
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
						uppar: 'CopyrightForever.com Form SR for Sound Recording Works',
						heading1: 'Are you the author or contributor of a performing arts work ',
						ulHeading: 'Sound Recordings arts include:',
						listItem1: `Sound Recordings arts include, with one exception, works that result from the fixation of
                                    a series of musical, spoken, or other sounds.

                                    The one exception is for the audio portions of audiovisual works, such as a motion
                                    picture soundtrack or an audio cassette accompanying a filmstrip. These are considered a part of
                                    the audiovisual work as a whole.`,
						listItem2: `Register and protect your sound recording works of authorship in under 5 MINUTES. 
                                    Use our SWIFT REGISTRATION portal`,
						setStart,
						setModalShow,
					}}
				/>
			)}
		</Container>
		</multiStepContext.Provider>
	);
}

export default FormFour;
