import React, { useContext } from "react";

import { Button, TextField } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Model from "../continuosSheet/ContinuationSheet";
import { multiStepContext } from "../FormOne.js";

function SecondStep({ setStep }) {
  const CHARACTER_LIMIT = 4;
  const { performingArtData, setPerformingArtData } =
    useContext(multiStepContext);
  const [continueSheet, setContinueSheet] = React.useState(false);

  return (
    <div>
      <h3>About the Author</h3>
      <div className="d-flex input_contained">
        <TextField
          label="Name of author:"
          margin="normal"
          variant="outlined"
          color="secondary"
          className="mr-3"
          value={performingArtData["name_of_author"]}
          onChange={(e) =>
            setPerformingArtData({
              ...performingArtData,
              name_of_author: e.target.value,
            })
          }
        />
        <TextField
          type="number"
          label="Year of Birth"
          margin="normal"
          variant="outlined"
          color="secondary"
          className="mr-3"
          value={performingArtData["year_of_birth"]}
          onInput={(e) => {
            e.target.value = Math.max(0, parseInt(e.target.value))
              .toString()
              .slice(0, CHARACTER_LIMIT);
          }}
          helperText={`${performingArtData.year_of_birth.length}/${CHARACTER_LIMIT}`}
          onChange={(e) =>
            setPerformingArtData({
              ...performingArtData,
              year_of_birth: e.target.value,
            })
          }
        />
        <TextField
          type="number"
          label=" Year of Death"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={performingArtData["year_of_death"]}
          onInput={(e) => {
            e.target.value = Math.max(0, parseInt(e.target.value))
              .toString()
              .slice(0, CHARACTER_LIMIT);
          }}
          helperText={`${performingArtData.year_of_death.length}/${CHARACTER_LIMIT}`}
          onChange={(e) =>
            setPerformingArtData({
              ...performingArtData,
              year_of_death: e.target.value,
            })
          }
        />
      </div>
      <div>
        <div component="fieldset" className="mt-4 fieldset">
          <FormLabel component="legend">Was this a “work for hire”?</FormLabel>
          <RadioGroup
            aria-label="radio"
            name="radio"
            className="flex-row"
            value={performingArtData["work_for_hire"]}
            onChange={(e) =>
              setPerformingArtData({
                ...performingArtData,
                work_for_hire: e.target.value,
              })
            }
          >
            <FormControlLabel value="1" control={<Radio />} label="Yes" />
            <FormControlLabel value="0" control={<Radio />} label="No" />
          </RadioGroup>
        </div>
      </div>
      <div className="d-flex input_contained">
        <TextField
          label="Author is a Citizen of"
          margin="normal"
          variant="outlined"
          color="secondary"
          className="mr-3"
          value={performingArtData["citizen_of"]}
          onChange={(e) =>
            setPerformingArtData({
              ...performingArtData,
              citizen_of: e.target.value,
            })
          }
        />
        <TextField
          label="Domiciled"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={performingArtData["domiciled_of"]}
          onChange={(e) =>
            setPerformingArtData({
              ...performingArtData,
              domiciled_of: e.target.value,
            })
          }
        />
      </div>
      <div className="d-flex input_contained">
        <div component="fieldset" className="mt-4 fieldset">
          <FormLabel component="legend">
            Was the authorship anonymous ?
          </FormLabel>
          <RadioGroup
            aria-label="radio"
            name="radio"
            className="flex-row"
            value={performingArtData["authorship_anonymous"]}
            onChange={(e) =>
              setPerformingArtData({
                ...performingArtData,
                authorship_anonymous: e.target.value,
              })
            }
          >
            <FormControlLabel value="1" control={<Radio />} label="Yes" />
            <FormControlLabel value="0" control={<Radio />} label="No" />
          </RadioGroup>
        </div>
        <div component="fieldset" className="mt-4 fieldset">
          <FormLabel component="legend">
            Was the authorship pseudonymous ?
          </FormLabel>
          <RadioGroup
            aria-label="radio"
            name="radio"
            className="flex-row"
            value={performingArtData["authorship_pseudonymous"]}
            onChange={(e) =>
              setPerformingArtData({
                ...performingArtData,
                authorship_pseudonymous: e.target.value,
              })
            }
          >
            <FormControlLabel value="1" control={<Radio />} label="Yes" />
            <FormControlLabel value="0" control={<Radio />} label="No" />
          </RadioGroup>
        </div>
      </div>
      <div>
        <TextField
          label="Nature of authorship - Please describe the nature of material created by this author in
                            which copyright is claimed"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={performingArtData["nature_of_authorship"]}
          onChange={(e) =>
            setPerformingArtData({
              ...performingArtData,
              nature_of_authorship: e.target.value,
            })
          }
        />
      </div>
      <div className="d-flex flex-column mt-2 m-0 p-0">
        <p style={{ fontSize: "20px" }}>
          If there are more than one author, please supply the names of other
          authors along with their Birth Year and Death Year, as applicable, on
          Addendum Sheet
        </p>
        <Button
          className="align-self-end"
          onClick={() => setContinueSheet(true)}
          variant="contained"
          color="secondary"
        >
          Continuation Sheet
        </Button>
      </div>
      <Model show={continueSheet} onHide={() => setContinueSheet(false)} />

      <Button onClick={() => setStep(1)} variant="contained" color="secondary">
        Previous
      </Button>
      <Button onClick={() => setStep(3)} variant="contained" color="primary">
        Next
      </Button>
    </div>
  );
}

export default SecondStep;
