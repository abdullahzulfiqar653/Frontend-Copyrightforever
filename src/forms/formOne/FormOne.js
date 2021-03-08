import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

import FirstStep from "./steps/FirstStep";
import SecondStep from "./steps/SecondStep";
import ThirdStep from "./steps/ThirdStep";
import FourthStep from "./steps/FourthStep";
import FifthStep from "./steps/FifthStep";
import SixthStep from "./steps/SixthStep";
import SeventhStep from "./steps/SeventhStep";
import EighthStep from "./steps/EighthStep";
import NinthStep from "./steps/NinthStep";
import Steeper from "../components/Steeper";
import TextSection from "./steps/TextSection";
import axios from "axios";
import { REQUEST_URL } from "../../constant/Constant";
import { useHistory } from "react-router-dom";

export const multiStepContext = React.createContext();

function FormOne() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [currentStep, setStep] = useState(1);
  const [start, setStart] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  const [error, setError] = useState();
  const user = useSelector((state) => state.auth.user);
  let data = new FormData();

  const [performingArtData, setPerformingArtData] = useState({
    form_name: "PA Performing Arts",
    // form_start_from here
    name: "",
    email_address: "",
    // mailing_address: '',
    // city: '',
    // zipcode: '',

    //section_1
    title_of_work: "",
    prior_title: "",
    nature_of_work: "",
    // title_of_collective_work: '',
    // volume: '',
    // number: '',
    // issue_date: '',
    // pages: '',

    // section 2
    name_of_author: "",
    year_of_birth: "",
    year_of_death: "",
    work_for_hire: "",
    citizen_of: "",
    domiciled_of: "",
    authorship_anonymous: "",
    authorship_pseudonymous: "",
    nature_of_authorship: "",
    // section 3
    year_of_authorship: "",
    date_of_authorship: "",
    nation: "",
    // section 4
    claimant_name: "",
    claimant_address: "",
    claimant_address_1: "",
    reciepient_name: "",
    how_obtained_ownership: "",
    // section 5
    previously_registered: "",
    first_published_edition_of_work: "",
    first_application_by_the_author: "",
    changed_version_of_the_work: "",
    prior_reg_number: "",
    prior_reg_year: "",
    // section 6
    identify_preexisting_work: "",
    describe_preexisting_work: "",
    // section 7
    file: null,
    // section 8
    employer_name: "",
    employer_date_of_birth: "",
    date_of_hiring: "",
    employer_address: "",
    date_of_employing_copyright: "",
    state: "",
    sign_image: null,
    // section 9
    certification_name: "",
    // from here continuation sheet start
    continuation_title: "",
    name_and_address: "",
    // continuation_section_1
    name_of_author_1: "",
    year_of_birth_1: "",
    year_of_death_1: "",
    work_for_hire_1: "",
    citizen_of_1: "",
    domiciled_of_1: "",
    authorship_anonymous_1: "",
    authorship_pseudonymous_1: "",
    nature_of_authorship_1: "",
    // continuation_section_2
    name_of_author_2: "",
    year_of_birth_2: "",
    year_of_death_2: "",
    work_for_hire_2: "",
    citizen_of_2: "",
    domiciled_of_2: "",
    authorship_anonymous_2: "",
    authorship_pseudonymous_2: "",
    nature_of_authorship_2: "",
    // continuation_section_3
    name_of_author_3: "",
    year_of_birth_3: "",
    year_of_death_3: "",
    work_for_hire_3: "",
    citizen_of_3: "",
    domiciled_of_3: "",
    authorship_anonymous_3: "",
    authorship_pseudonymous_3: "",
    nature_of_authorship_3: "",
    // continuation_form_last_fields_after_Authors
    continuation_name: "",
    continuation_date: "",
    continuation_address: "",
    continuation_city: "",
    continuation_state: "",
    continuation_zipcode: "",
  });
  const submitData = async () => {
    setLoading(true);
    data.append("form_name", performingArtData.form_name);
    data.append("new_form", true);
    // form_start_from here
    data.append("name", performingArtData.name);
    data.append("email_address", performingArtData.email_address);

    //section_1
    data.append("title_of_work", performingArtData.title_of_work);
    data.append("prior_title", performingArtData.prior_title);
    data.append("nature_of_work", performingArtData.nature_of_work);

    // section_2
    data.append("name_of_author", performingArtData.name_of_author);
    data.append("year_of_birth", performingArtData.year_of_birth);
    data.append("year_of_death", performingArtData.year_of_death);
    data.append("work_for_hire", performingArtData.work_for_hire);
    data.append("citizen_of", performingArtData.citizen_of);
    data.append("domiciled_of", performingArtData.domiciled_of);
    data.append("authorship_anonymous", performingArtData.authorship_anonymous);
    data.append(
      "authorship_pseudonymous",
      performingArtData.authorship_pseudonymous
    );
    data.append("nature_of_authorship", performingArtData.nature_of_authorship);
    // Section_3
    data.append("year_of_authorship", performingArtData.year_of_authorship);
    data.append("date_of_authorship", performingArtData.date_of_authorship);
    data.append("nation", performingArtData.nation);
    // Section_4
    data.append("claimant_name", performingArtData.claimant_name);
    data.append("claimant_address", performingArtData.claimant_address);
    data.append("claimant_address_1", performingArtData.claimant_address_1);
    data.append("reciepient_name", performingArtData.reciepient_name);
    data.append(
      "how_obtained_ownership",
      performingArtData.how_obtained_ownership
    );
    // Section_5
    data.append(
      "previously_registered",
      performingArtData.previously_registered
    );
    data.append(
      "first_published_edition_of_work",
      performingArtData.first_published_edition_of_work
    );
    data.append(
      "first_application_by_the_author",
      performingArtData.first_application_by_the_author
    );
    data.append(
      "changed_version_of_the_work",
      performingArtData.changed_version_of_the_work
    );
    data.append("prior_reg_number", performingArtData.prior_reg_number);
    data.append("prior_reg_year", performingArtData.prior_reg_year);
    // Section_6
    data.append(
      "identify_preexisting_work",
      performingArtData.identify_preexisting_work
    );
    data.append(
      "describe_preexisting_work",
      performingArtData.describe_preexisting_work
    );
    // Section_7
    data.append("file", performingArtData.file);
    // Section_8
    data.append("employer_name", performingArtData.employer_name);
    data.append(
      "employer_date_of_birth",
      performingArtData.employer_date_of_birth
    );
    data.append("date_of_hiring", performingArtData.date_of_hiring);
    data.append("employer_address", performingArtData.employer_address);
    data.append(
      "date_of_employing_copyright",
      performingArtData.date_of_employing_copyright
    );
    data.append("sign_image", performingArtData.sign_image);
    // Section_9
    data.append("certification_name", performingArtData.certification_name);
    // from here continuation sheet start
    data.append("continuation_title", performingArtData.continuation_title);
    data.append("name_and_address", performingArtData.name_and_address);
    // continuation_section_1
    data.append("name_of_author_1", performingArtData.name_of_author_1);
    data.append("year_of_birth_1", performingArtData.year_of_birth_1);
    data.append("year_of_death_1", performingArtData.year_of_death_1);
    data.append("work_for_hire_1", performingArtData.work_for_hire_1);
    data.append("citizen_of_1", performingArtData.citizen_of_1);
    data.append("domiciled_of_1", performingArtData.domiciled_of_1);
    data.append(
      "authorship_anonymous_1",
      performingArtData.authorship_anonymous_1
    );
    data.append(
      "authorship_pseudonymous_1",
      performingArtData.authorship_pseudonymous_1
    );
    data.append(
      "nature_of_authorship_1",
      performingArtData.nature_of_authorship_1
    );
    // continuation_section_2
    data.append("name_of_author_2", performingArtData.name_of_author_2);
    data.append("year_of_birth_2", performingArtData.year_of_birth_2);
    data.append("year_of_death_2", performingArtData.year_of_death_2);
    data.append("work_for_hire_2", performingArtData.work_for_hire_2);
    data.append("citizen_of_2", performingArtData.citizen_of_2);
    data.append("domiciled_of_2", performingArtData.domiciled_of_2);
    data.append(
      "authorship_anonymous_2",
      performingArtData.authorship_anonymous_2
    );
    data.append(
      "authorship_pseudonymous_2",
      performingArtData.authorship_pseudonymous_2
    );
    data.append(
      "nature_of_authorship_2",
      performingArtData.nature_of_authorship_2
    );
    // continuation_section_3
    data.append("name_of_author_3", performingArtData.name_of_author_3);
    data.append("year_of_birth_3", performingArtData.year_of_birth_3);
    data.append("year_of_death_3", performingArtData.year_of_death_3);
    data.append("work_for_hire_3", performingArtData.work_for_hire_3);
    data.append("citizen_of_3", performingArtData.citizen_of_3);
    data.append("domiciled_of_3", performingArtData.domiciled_of_3);
    data.append(
      "authorship_anonymous_3",
      performingArtData.authorship_anonymous_3
    );
    data.append(
      "authorship_pseudonymous_3",
      performingArtData.authorship_pseudonymous_3
    );
    data.append(
      "nature_of_authorship_3",
      performingArtData.nature_of_authorship_3
    );
    // continuation_form_last_fields_after_Authors
    data.append("continuation_name", performingArtData.continuation_name);
    data.append("continuation_date", performingArtData.continuation_date);
    data.append("continuation_address", performingArtData.continuation_address);
    data.append("continuation_city", performingArtData.continuation_city);
    data.append("continuation_state", performingArtData.continuation_state);
    data.append("continuation_zipcode", performingArtData.continuation_zipcode);
    data.append("user", user && user.userid);

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    // const body = JSON.stringify(virtualArtData)
    try {
      const res = await axios.post(
        REQUEST_URL + `/api/add/paform`,
        data,
        config
      );
      if (res.data.id && res.data.new_form) {
        setLoading(false);
        // dispatch(savingId(res.data.id, res.data.form_name));
        history.push("/myaccount");
        setTimeout(function () {
          alert(
            "Form " + res.statusText + ". Now Select the form and Pay for that"
          );
        }, 700);
      }
    } catch (error) {
      setLoading(false);
      if (error.response.data) {
        setError(error);
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
      value={{
        performingArtData,
        setPerformingArtData,
        submitData,
        error,
        loading,
      }}
    >
      <Container className="form_cont" id="performing_art">
        <Row className="img_cont">
          <Col className="p-0" sm={12} md={6} xl={4}>
            <img className="img-fluid" src="/images/tx/TX1.jpg" alt="pic1" />
          </Col>
          <Col className="p-0" sm={12} md={6} xl={4}>
            <img className="img-fluid" src="/images/tx/TX2.jpg" alt="pic2" />
          </Col>
          <Col className="p-0" sm={12} md={6} xl={4}>
            <img className="img-fluid" src="/images/tx/TX3.jpg" alt="pic3" />
          </Col>
        </Row>
        {start ? (
          <div className="form_field_cont">
            <Steeper currentStep={currentStep} />
            {showStep(currentStep)}
          </div>
        ) : (
          <TextSection
            text={{
              uppar: "CopyrightForever.com Form PA for Performing Arts Works",
              heading1:
                "Are you the author or contributor of a performing arts work",
              ulHeading: "Performing arts works include:",
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
    </multiStepContext.Provider>
  );
}

export default FormOne;
