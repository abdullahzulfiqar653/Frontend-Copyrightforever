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

function FormFive() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [currentStep, setStep] = useState(1);
  const [start, setStart] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  const [error, setError] = useState();
  const user = useSelector((state) => state.auth.user);
  let data = new FormData();

  const [serialWorkData, setSerialWorkData] = useState({
    form_name: "SE Serial Works",
    // form_start_from here
    name: "",
    email_address: "",
    //section_1
    title_of_work: "",
    volume: "",
    number: "",
    date_on_copies: "",
    frequency: "",
    prior_title: "",
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
    month: "",
    day: "",
    year: "",
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
    city: "",
    zipcode: "",
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
    data.append("form_name", serialWorkData.form_name);
    data.append("new_form", true);
    // form_start_from here
    data.append("name", serialWorkData.name);
    data.append("email_address", serialWorkData.email_address);

    //section_1
    data.append("title_of_work", serialWorkData.title_of_work);
    data.append("volume", serialWorkData.volume);
    data.append("number", serialWorkData.number);
    data.append("date_on_copies", serialWorkData.date_on_copies);
    data.append("frequency", serialWorkData.frequency);
    data.append("prior_title", serialWorkData.prior_title);

    // section_2
    data.append("name_of_author", serialWorkData.name_of_author);
    data.append("year_of_birth", serialWorkData.year_of_birth);
    data.append("year_of_death", serialWorkData.year_of_death);
    data.append("work_for_hire", serialWorkData.work_for_hire);
    data.append("citizen_of", serialWorkData.citizen_of);
    data.append("domiciled_of", serialWorkData.domiciled_of);
    data.append("authorship_anonymous", serialWorkData.authorship_anonymous);
    data.append(
      "authorship_pseudonymous",
      serialWorkData.authorship_pseudonymous
    );
    data.append("nature_of_authorship", serialWorkData.nature_of_authorship);
    // Section_3
    data.append("year_of_authorship", serialWorkData.year_of_authorship);
    data.append("day", serialWorkData.day);
    data.append("month", serialWorkData.month);
    data.append("year", serialWorkData.year);
    data.append("nation", serialWorkData.nation);
    // Section_4
    data.append("claimant_name", serialWorkData.claimant_name);
    data.append("claimant_address", serialWorkData.claimant_address);
    data.append("claimant_address_1", serialWorkData.claimant_address_1);
    data.append("reciepient_name", serialWorkData.reciepient_name);
    data.append(
      "how_obtained_ownership",
      serialWorkData.how_obtained_ownership
    );
    // Section_5
    data.append("previously_registered", serialWorkData.previously_registered);
    data.append(
      "first_published_edition_of_work",
      serialWorkData.first_published_edition_of_work
    );
    data.append(
      "first_application_by_the_author",
      serialWorkData.first_application_by_the_author
    );
    data.append(
      "changed_version_of_the_work",
      serialWorkData.changed_version_of_the_work
    );
    data.append("prior_reg_number", serialWorkData.prior_reg_number);
    data.append("prior_reg_year", serialWorkData.prior_reg_year);
    // Section_6
    data.append(
      "identify_preexisting_work",
      serialWorkData.identify_preexisting_work
    );
    data.append(
      "describe_preexisting_work",
      serialWorkData.describe_preexisting_work
    );
    // Section_7
    data.append("file", serialWorkData.file);
    // Section_8
    data.append("employer_name", serialWorkData.employer_name);
    data.append(
      "employer_date_of_birth",
      serialWorkData.employer_date_of_birth
    );
    data.append("date_of_hiring", serialWorkData.date_of_hiring);
    data.append("employer_address", serialWorkData.employer_address);
    data.append(
      "date_of_employing_copyright",
      serialWorkData.date_of_employing_copyright
    );
    data.append("city", serialWorkData.city);
    data.append("state", serialWorkData.state);
    data.append("zipcode", serialWorkData.zipcode);
    data.append("sign_image", serialWorkData.sign_image);
    // Section_9
    data.append("certification_name", serialWorkData.certification_name);
    // from here continuation sheet start
    data.append("continuation_title", serialWorkData.continuation_title);
    data.append("name_and_address", serialWorkData.name_and_address);
    // continuation_section_1
    data.append("name_of_author_1", serialWorkData.name_of_author_1);
    data.append("year_of_birth_1", serialWorkData.year_of_birth_1);
    data.append("year_of_death_1", serialWorkData.year_of_death_1);
    data.append("work_for_hire_1", serialWorkData.work_for_hire_1);
    data.append("citizen_of_1", serialWorkData.citizen_of_1);
    data.append("domiciled_of_1", serialWorkData.domiciled_of_1);
    data.append(
      "authorship_anonymous_1",
      serialWorkData.authorship_anonymous_1
    );
    data.append(
      "authorship_pseudonymous_1",
      serialWorkData.authorship_pseudonymous_1
    );
    data.append(
      "nature_of_authorship_1",
      serialWorkData.nature_of_authorship_1
    );
    // continuation_section_2
    data.append("name_of_author_2", serialWorkData.name_of_author_2);
    data.append("year_of_birth_2", serialWorkData.year_of_birth_2);
    data.append("year_of_death_2", serialWorkData.year_of_death_2);
    data.append("work_for_hire_2", serialWorkData.work_for_hire_2);
    data.append("citizen_of_2", serialWorkData.citizen_of_2);
    data.append("domiciled_of_2", serialWorkData.domiciled_of_2);
    data.append(
      "authorship_anonymous_2",
      serialWorkData.authorship_anonymous_2
    );
    data.append(
      "authorship_pseudonymous_2",
      serialWorkData.authorship_pseudonymous_2
    );
    data.append(
      "nature_of_authorship_2",
      serialWorkData.nature_of_authorship_2
    );
    // continuation_section_3
    data.append("name_of_author_3", serialWorkData.name_of_author_3);
    data.append("year_of_birth_3", serialWorkData.year_of_birth_3);
    data.append("year_of_death_3", serialWorkData.year_of_death_3);
    data.append("work_for_hire_3", serialWorkData.work_for_hire_3);
    data.append("citizen_of_3", serialWorkData.citizen_of_3);
    data.append("domiciled_of_3", serialWorkData.domiciled_of_3);
    data.append(
      "authorship_anonymous_3",
      serialWorkData.authorship_anonymous_3
    );
    data.append(
      "authorship_pseudonymous_3",
      serialWorkData.authorship_pseudonymous_3
    );
    data.append(
      "nature_of_authorship_3",
      serialWorkData.nature_of_authorship_3
    );
    // continuation_form_last_fields_after_Authors
    data.append("continuation_name", serialWorkData.continuation_name);
    data.append("continuation_date", serialWorkData.continuation_date);
    data.append("continuation_address", serialWorkData.continuation_address);
    data.append("continuation_city", serialWorkData.continuation_city);
    data.append("continuation_state", serialWorkData.continuation_state);
    data.append("continuation_zipcode", serialWorkData.continuation_zipcode);
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
        REQUEST_URL + `/api/add/seform`,
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
        return <FirstStep setStart={setStart} setStep={setStep} />;
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
      value={{ serialWorkData, setSerialWorkData, submitData, error, loading }}
    >
      <Container className="form_cont" id="serial_work">
        <Row className="img_cont">
          <Col className="p-0" sm={12} md={6} xl={4}>
            <img className="img-fluid" src="/images/SE/SE1.jpg" alt="pic1" />
          </Col>
          <Col className="p-0" sm={12} md={6} xl={4}>
            <img className="img-fluid" src="/images/SE/SE2.jpg" alt="pic2" />
          </Col>
          <Col className="p-0" sm={12} md={6} xl={4}>
            <img className="img-fluid" src="/images/SE/SE3.jpg" alt="pic3" />
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
              uppar: "CopyrightForever.com Form SE for Serial Works",
              heading1: "Are you the author or contributor of a serial work ",
              ulHeading:
                "Serial works of authorship, whether original or derivative, includes:",
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
    </multiStepContext.Provider>
  );
}

export default FormFive;
