import React, { useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Model from "../continuosSheet/ContinuationSheet";
import { multiStepContext } from "../FormTwo.js";

function SecondStep({ setStep }) {
  const CHARACTER_LIMIT = 4;
  const { literaryWorksData, setLiteraryWorksData } =
    useContext(multiStepContext);
  const [continueSheet, setContinueSheet] = React.useState(false);
  // const [value, setValue] = React.useState('female');

  // const handleChange = (event) => {
  // 	setValue(event.target.value);
  // };

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
          value={literaryWorksData["name_of_author"]}
          onChange={(e) =>
            setLiteraryWorksData({
              ...literaryWorksData,
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
          value={literaryWorksData["year_of_birth"]}
          onInput={(e) => {
            e.target.value = Math.max(0, parseInt(e.target.value))
              .toString()
              .slice(0, CHARACTER_LIMIT);
          }}
          helperText={`${literaryWorksData.year_of_birth.length}/${CHARACTER_LIMIT}`}
          onChange={(e) =>
            setLiteraryWorksData({
              ...literaryWorksData,
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
          value={literaryWorksData["year_of_death"]}
          onInput={(e) => {
            e.target.value = Math.max(0, parseInt(e.target.value))
              .toString()
              .slice(0, CHARACTER_LIMIT);
          }}
          helperText={`${literaryWorksData.year_of_death.length}/${CHARACTER_LIMIT}`}
          onChange={(e) =>
            setLiteraryWorksData({
              ...literaryWorksData,
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
            value={literaryWorksData["work_for_hire"]}
            onChange={(e) =>
              setLiteraryWorksData({
                ...literaryWorksData,
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
          value={literaryWorksData["citizen_of"]}
          onChange={(e) =>
            setLiteraryWorksData({
              ...literaryWorksData,
              citizen_of: e.target.value,
            })
          }
        />
        <TextField
          label="Domiciled"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={literaryWorksData["domiciled_of"]}
          onChange={(e) =>
            setLiteraryWorksData({
              ...literaryWorksData,
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
            value={literaryWorksData["authorship_anonymous"]}
            onChange={(e) =>
              setLiteraryWorksData({
                ...literaryWorksData,
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
            value={literaryWorksData["authorship_pseudonymous"]}
            onChange={(e) =>
              setLiteraryWorksData({
                ...literaryWorksData,
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
          value={literaryWorksData["nature_of_authorship"]}
          onChange={(e) =>
            setLiteraryWorksData({
              ...literaryWorksData,
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

      <Button
        onClick={() => {
          console.log(literaryWorksData);
          setStep(1);
        }}
        variant="contained"
        color="secondary"
      >
        Previous
      </Button>
      <Button onClick={() => setStep(3)} variant="contained" color="primary">
        Next
      </Button>
    </div>
  );
}

export default SecondStep;
