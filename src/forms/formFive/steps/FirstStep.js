import React, { useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import { multiStepContext } from "../FormFive.js";

function FirstStep({ setStep, setStart }) {
  const { serialWorkData, setSerialWorkData } = useContext(multiStepContext);
  return (
    <div>
      <h3> About Your Work</h3>
      <div>
        <TextField
          label="What is the title of your serial work?"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={serialWorkData["title_of_work"]}
          onChange={(e) =>
            setSerialWorkData({
              ...serialWorkData,
              title_of_work: e.target.value,
            })
          }
        />
      </div>
      <div className="d-flex input_contained">
        <TextField
          className="mr-3"
          label="Volume"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={serialWorkData["volume"]}
          onChange={(e) =>
            setSerialWorkData({ ...serialWorkData, volume: e.target.value })
          }
        />
        <TextField
          className="mr-3"
          label="Number"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={serialWorkData["number"]}
          onChange={(e) =>
            setSerialWorkData({ ...serialWorkData, number: e.target.value })
          }
        />
        <TextField
          id="date"
          className="mr-3"
          label="Date on copies"
          type="date"
          defaultValue="2017-05-24"
          margin="normal"
          variant="outlined"
          color="secondary"
          InputLabelProps={{
            shrink: true,
          }}
          value={serialWorkData["date_on_copies"]}
          onChange={(e) =>
            setSerialWorkData({
              ...serialWorkData,
              date_on_copies: e.target.value,
            })
          }
        />
        <TextField
          label="Frequency of Publication"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={serialWorkData["frequency"]}
          onChange={(e) =>
            setSerialWorkData({ ...serialWorkData, frequency: e.target.value })
          }
        />
      </div>
      <div>
        <TextField
          label="Previous or alternate titles:"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={serialWorkData["prior_title"]}
          onChange={(e) =>
            setSerialWorkData({
              ...serialWorkData,
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
