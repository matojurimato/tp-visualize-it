import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Box from "@mui/system/Box";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { selectedTypeState } from "../../store/atoms";
import "./NewPointModal.css";

const FormsYear: React.FC<{
  handleSubmitButton: (gcmName: string, yearValue: number[]) => void;
}> = (props) => {
  const [gcmNameValue, setGcmName] = useState<string>("");
  const [gcmNameError, setGcmError] = useState(false);
  const [yearValue, setYearValue] = useState("");
  const [yearError, setYearError] = useState(false);
  const [yearErrorMessage, setYearErrorMessage] = useState("");

  const selectedType = useRecoilValue(selectedTypeState);

  const submitButtonDisabled = gcmNameError || yearError;

  const gcmNameOnChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    event.preventDefault();
    setGcmName(event.target.value);
  };

  const gcmNameOnBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (event.target.value.length) {
      setGcmError(false);
      setGcmName(event.target.value);
    } else {
      setGcmError(true);
    }
  };

  const yearValueOnChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    event.preventDefault();
    setYearValue(event.target.value);
  };

  const yearValueOnBlurHandler = (
    event: React.FocusEvent<HTMLInputElement>,
  ) => {
    event.preventDefault();
    if (event.target.value.length === 0) {
      setYearError(true);
      setYearErrorMessage("A value is required");
    } else if (
      selectedType.apiAbbreviation === "pr" &&
      parseFloat(event.target.value) < 0
    ) {
      setYearError(true);
      setYearErrorMessage("Precipitation values can't be negative");
    } else if (isNaN(parseFloat(event.target.value))) {
      setYearValue("");
      setYearError(true);
      setYearErrorMessage("This value must be a number");
    } else {
      setYearError(false);
      setYearErrorMessage("");
      setYearValue(event.target.value);
    }
  };

  const submitHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    props.handleSubmitButton(gcmNameValue, [parseFloat(yearValue)]);
  };

  return (
    <form>
      <Box className="forms-box">
        <div className="gcm-name">
          <TextField
            className="input-field"
            variant="outlined"
            type="text"
            label="GCM name"
            value={gcmNameValue}
            onChange={gcmNameOnChangeHandler}
            onBlur={gcmNameOnBlurHandler}
            error={gcmNameError}
            helperText={gcmNameError && "A GCM name is required"}
            required
          />
        </div>
        <TextField
          className="input-field"
          variant="outlined"
          label="Year value"
          value={yearValue}
          onChange={yearValueOnChangeHandler}
          onBlur={yearValueOnBlurHandler}
          error={yearError}
          helperText={yearErrorMessage}
          required
        />
        <div className="button-container">
          <div className="submit-button">
            <Button
              onClick={submitHandler}
              variant="contained"
              disabled={submitButtonDisabled}
            >
              ADD NEW POINT
            </Button>
          </div>
        </div>
      </Box>
    </form>
  );
};

export default FormsYear;
