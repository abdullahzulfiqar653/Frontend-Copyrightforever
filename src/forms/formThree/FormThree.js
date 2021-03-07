import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import {
  TextField,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
} from '@material-ui/core';
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
import axios from 'axios';
import { REQUEST_URL } from '../../constant/Constant';
import { savingId } from '../../actions/auth';
import { useHistory } from 'react-router-dom';

export const multiStepContext = React.createContext();

function FormThree() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [currentStep, setStep] = useState(1);
  const [start, setStart] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  const [error, setError] = useState();
  const user = useSelector((state) => state.auth.user);
  let data = new FormData();

  //state & function for input data
  const [virtualArtData, setVirtualArtData] = useState({
    form_name: 'VA VitualArts Work',
    // form_start_from here
    name: '',
    email_address: '',
    mailing_address: '',
    city: '',
    state: '',
    zipcode: '',
    //section_1
    title_of_work: '',
    prior_title: '',
    title_of_collective_work: '',
    volume: '',
    number: '',
    issue_date: '',
    pages: '',
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
    setLoading(true);
    console.log(virtualArtData);
    // data.append('form_name', virtualArtData.form_name)
    data.append('new_form', true);
    // form_start_from here
    data.append('name', virtualArtData.name);
    data.append('email_address', virtualArtData.email_address);
    data.append('mailing_address', virtualArtData.mailing_address);
    data.append('city', virtualArtData.city);
    data.append('state', virtualArtData.state);
    data.append('zipcode', virtualArtData.zipcode);
    //section_1
    data.append('title_of_work', virtualArtData.title_of_work);
    data.append('prior_title', virtualArtData.prior_title);
    data.append(
      'title_of_collective_work',
      virtualArtData.title_of_collective_work
    );
    data.append('volume', virtualArtData.volume);
    data.append('number', virtualArtData.number);
    data.append('issue_date', virtualArtData.issue_date);
    data.append('pages', virtualArtData.pages);
    // section_2
    data.append('name_of_author', virtualArtData.name_of_author);
    data.append('year_of_birth', virtualArtData.year_of_birth);
    data.append('year_of_death', virtualArtData.year_of_death);
    data.append('work_for_hire', virtualArtData.work_for_hire);
    data.append('citizen_of', virtualArtData.citizen_of);
    data.append('domiciled_of', virtualArtData.domiciled_of);
    data.append('authorship_anonymous', virtualArtData.authorship_anonymous);
    data.append(
      'authorship_pseudonymous',
      virtualArtData.authorship_pseudonymous
    );
    data.append('nature_of_authorship', virtualArtData.nature_of_authorship);
    // Section_3
    data.append('year_of_authorship', virtualArtData.year_of_authorship);
    data.append('date_of_authorship', virtualArtData.date_of_authorship);
    data.append('nation', virtualArtData.nation);
    // Section_4
    data.append('claimant_name', virtualArtData.claimant_name);
    data.append('claimant_address', virtualArtData.claimant_address);
    data.append('claimant_address_1', virtualArtData.claimant_address_1);
    data.append('reciepient_name', virtualArtData.reciepient_name);
    data.append(
      'how_obtained_ownership',
      virtualArtData.how_obtained_ownership
    );
    // Section_5
    data.append('previously_registered', virtualArtData.previously_registered);
    data.append(
      'first_published_edition_of_work',
      virtualArtData.first_published_edition_of_work
    );
    data.append(
      'first_application_by_the_author',
      virtualArtData.first_application_by_the_author
    );
    data.append(
      'changed_version_of_the_work',
      virtualArtData.changed_version_of_the_work
    );
    data.append('prior_reg_number', virtualArtData.prior_reg_number);
    data.append('prior_reg_year', virtualArtData.prior_reg_year);
    // Section_6
    data.append(
      'identify_preexisting_work',
      virtualArtData.identify_preexisting_work
    );
    data.append(
      'describe_preexisting_work',
      virtualArtData.describe_preexisting_work
    );
    // Section_7
    data.append('file', virtualArtData.file);
    // Section_8
    data.append('employer_name', virtualArtData.employer_name);
    data.append(
      'employer_date_of_birth',
      virtualArtData.employer_date_of_birth
    );
    data.append('date_of_hiring', virtualArtData.date_of_hiring);
    data.append('employer_address', virtualArtData.employer_address);
    data.append(
      'date_of_employing_copyright',
      virtualArtData.date_of_employing_copyright
    );
    data.append('sign_image', virtualArtData.sign_image);
    // Section_9
    data.append('certification_name', virtualArtData.certification_name);
    // from here continuation sheet start
    data.append('continuation_title', virtualArtData.continuation_title);
    data.append('name_and_address', virtualArtData.name_and_address);
    // continuation_section_1
    data.append('name_of_author_1', virtualArtData.name_of_author_1);
    data.append('year_of_birth_1', virtualArtData.year_of_birth_1);
    data.append('year_of_death_1', virtualArtData.year_of_death_1);
    data.append('work_for_hire_1', virtualArtData.work_for_hire_1);
    data.append('citizen_of_1', virtualArtData.citizen_of_1);
    data.append('domiciled_of_1', virtualArtData.domiciled_of_1);
    data.append(
      'authorship_anonymous_1',
      virtualArtData.authorship_anonymous_1
    );
    data.append(
      'authorship_pseudonymous_1',
      virtualArtData.authorship_pseudonymous_1
    );
    data.append(
      'nature_of_authorship_1',
      virtualArtData.nature_of_authorship_1
    );
    // continuation_section_2
    data.append('name_of_author_2', virtualArtData.name_of_author_2);
    data.append('year_of_birth_2', virtualArtData.year_of_birth_2);
    data.append('year_of_death_2', virtualArtData.year_of_death_2);
    data.append('work_for_hire_2', virtualArtData.work_for_hire_2);
    data.append('citizen_of_2', virtualArtData.citizen_of_2);
    data.append('domiciled_of_2', virtualArtData.domiciled_of_2);
    data.append(
      'authorship_anonymous_2',
      virtualArtData.authorship_anonymous_2
    );
    data.append(
      'authorship_pseudonymous_2',
      virtualArtData.authorship_pseudonymous_2
    );
    data.append(
      'nature_of_authorship_2',
      virtualArtData.nature_of_authorship_2
    );
    // continuation_section_3
    data.append('name_of_author_3', virtualArtData.name_of_author_3);
    data.append('year_of_birth_3', virtualArtData.year_of_birth_3);
    data.append('year_of_death_3', virtualArtData.year_of_death_3);
    data.append('work_for_hire_3', virtualArtData.work_for_hire_3);
    data.append('citizen_of_3', virtualArtData.citizen_of_3);
    data.append('domiciled_of_3', virtualArtData.domiciled_of_3);
    data.append(
      'authorship_anonymous_3',
      virtualArtData.authorship_anonymous_3
    );
    data.append(
      'authorship_pseudonymous_3',
      virtualArtData.authorship_pseudonymous_3
    );
    data.append(
      'nature_of_authorship_3',
      virtualArtData.nature_of_authorship_3
    );
    // continuation_form_last_fields_after_Authors
    data.append('continuation_name', virtualArtData.continuation_name);
    data.append('continuation_date', virtualArtData.continuation_date);
    data.append('continuation_address', virtualArtData.continuation_address);
    data.append('continuation_city', virtualArtData.continuation_city);
    data.append('continuation_state', virtualArtData.continuation_state);
    data.append('continuation_zipcode', virtualArtData.continuation_zipcode);
    data.append('user', user && user.userid);

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${localStorage.getItem('access')}`,
        Accept: 'application/json',
      },
    };
    // const body = JSON.stringify(virtualArtData)
    try {
      const res = await axios.post(
        REQUEST_URL + `/api/vaform/add`,
        data,
        config
      );
      dispatch(savingId(res.data.id, res.data.form_name));
      setLoading(false);
      setTimeout(function () {
        alert(
          'Form ' +
            res.statusText +
            '. Now pay for further proceeding or you also can pay later from YourAccount by selecting the given form'
        );
      }, 70);
    } catch (error) {
      setLoading(false);
      if (error.response.data) {
        setError(error);
      }
    }
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
        return (
          <EighthStep
            modal={modalShow}
            setModal={setModalShow}
            setStep={setStep}
          />
        );
      case 9:
        return <NinthStep setStep={setStep} />;
    }
  };
  return (
    <multiStepContext.Provider
      value={{ virtualArtData, setVirtualArtData, submitData, error, loading }}>
      <Container className='form_cont' id='virtual_art'>
        <Row className='img_cont'>
          <Col className='p-0' sm={12} md={6} xl={12}>
            <div class='swiper-container'>
              <div class='swiper-wrapper'>
                <div class='swiper-slide'>
                  <img
                    className='img-fluid'
                    src='/images/va/VA1.jpg'
                    alt='pic1'
                  />
                </div>
                <div class='swiper-slide'>
                  <img
                    className='img-fluid'
                    src='/images/va/VA2.jpg'
                    alt='pic2'
                  />
                </div>
                <div class='swiper-slide'>
                  <img
                    className='img-fluid'
                    src='/images/va/VA3.jpg'
                    alt='pic3'
                  />
                </div>
                <div class='swiper-slide'>
                  <img
                    className='img-fluid'
                    src='/images/va/VA4.jpg'
                    alt='pic4'
                  />
                </div>
                <div class='swiper-slide'>
                  <img
                    className='img-fluid'
                    src='/images/va/VA5.jpg'
                    alt='pic5'
                  />
                </div>
                <div class='swiper-slide'>
                  <img
                    className='img-fluid'
                    src='/images/va/VA6.jpg'
                    alt='pic6'
                  />
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
                    setVirtualArtData({
                      ...virtualArtData,
                      mailing_address: e.target.value,
                    })
                  }
                />
                <TextField
                  label='City:'
                  margin='normal'
                  variant='outlined'
                  color='secondary'
                  className='mr-3'
                  value={virtualArtData['city']}
                  onChange={(e) =>
                    setVirtualArtData({
                      ...virtualArtData,
                      city: e.target.value,
                    })
                  }
                />
                <FormControl
                  className='mr-3'
                  variant='outlined'
                  margin='normal'>
                  <InputLabel htmlFor='state'>State</InputLabel>
                  <Select
                    // labelId='demo-simple-select-outlined-label'
                    // id='demo-simple-select-outlined'
                    label='Age'
                    value={virtualArtData['state']}
                    onChange={(e) =>
                      setVirtualArtData({
                        ...virtualArtData,
                        state: e.target.value,
                      })
                    }>
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
                    setVirtualArtData({
                      ...virtualArtData,
                      zipcode: e.target.value,
                    })
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
