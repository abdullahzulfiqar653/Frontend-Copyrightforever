import React, { useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import { multiStepContext } from "../FormFour.js";

function FirstStep({ setStep, setStart }) {
  const { soundRecordingData, setSoundRecordingData } =
    useContext(multiStepContext);
  return (
    <div>
      <h3> About Your Work</h3>
      <div>
        <TextField
          label="What is the title of your serial work?"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={soundRecordingData["title_of_work"]}
          onChange={(e) =>
            setSoundRecordingData({
              ...soundRecordingData,
              title_of_work: e.target.value,
            })
          }
        />
      </div>
      <div>
        <TextField
          label="Previous or alternate titles:"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={soundRecordingData["prior_title"]}
          onChange={(e) =>
            setSoundRecordingData({
              ...soundRecordingData,
              prior_title: e.target.value,
            })
          }
        />
      </div>

      <div>
        <Button
          onClick={() => {
            setStart(false);
          }}
          variant="contained"
          color="primary"
        >
          Previous
        </Button>
        <Button onClick={() => setStep(2)} variant="contained" color="primary">
          Next
        </Button>
      </div>
    </div>
  );
}

export default FirstStep;
