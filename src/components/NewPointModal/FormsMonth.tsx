import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { selectedTypeState } from "../../store/atoms";
import "./NewPointModal.css";

const FormsMonth: React.FC<{
  handleSubmitButton: (gcmName: string, montValues: number[]) => void;
}> = (props) => {
  const [gcmNameValue, setGcmName] = useState<string>("");
  const [gcmNameError, setGcmError] = useState(false);
  const [monthValues, setMonthValues] = useState({
    jan: "",
    feb: "",
    mar: "",
    apr: "",
    may: "",
    jun: "",
    jul: "",
    aug: "",
    sep: "",
    oct: "",
    nov: "",
    dec: "",
  });
  const [monthErrors, setMonthErrors] = useState({
    jan: false,
    feb: false,
    mar: false,
    apr: false,
    may: false,
    jun: false,
    jul: false,
    aug: false,
    sep: false,
    oct: false,
    nov: false,
    dec: false,
  });
  const [monthErrorMessage, setMonthErrorMessage] = useState({
    jan: "",
    feb: "",
    mar: "",
    apr: "",
    may: "",
    jun: "",
    jul: "",
    aug: "",
    sep: "",
    oct: "",
    nov: "",
    dec: "",
  });
  const selectedType = useRecoilValue(selectedTypeState);

  let anyMonthError = false;
  Object.values(monthErrors).forEach((month) => {
    anyMonthError = anyMonthError || month;
  });

  const submitButtonDisabled = gcmNameError || anyMonthError;

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

  const monthValuesOnChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    event.preventDefault();
    setMonthValues({
      ...monthValues,
      [event.target.name]: event.target.value,
    });
  };

  const monthValuesOnBlurHandler = (
    event: React.FocusEvent<HTMLInputElement>,
  ) => {
    event.preventDefault();
    if (event.target.value.length === 0) {
      setMonthErrors({
        ...monthErrors,
        [event.target.name]: true,
      });
      setMonthErrorMessage({
        ...monthErrorMessage,
        [event.target.name]: "A value is required",
      });
    } else if (
      selectedType.apiAbbreviation === "pr" &&
      parseFloat(event.target.value) < 0
    ) {
      setMonthErrors({
        ...monthErrors,
        [event.target.name]: true,
      });
      setMonthErrorMessage({
        ...monthErrorMessage,
        [event.target.name]: "Precipitation values can't be negative",
      });
    } else if (isNaN(parseFloat(event.target.value))) {
      setMonthValues({
        ...monthValues,
        [event.target.name]: event.target.value,
      });
      setMonthErrors({
        ...monthErrors,
        [event.target.name]: true,
      });
      setMonthErrorMessage({
        ...monthErrorMessage,
        [event.target.name]: "This value must be a number",
      });
    } else {
      setMonthErrors({
        ...monthErrors,
        [event.target.name]: false,
      });
      setMonthErrorMessage({
        ...monthErrorMessage,
        [event.target.name]: "",
      });
      setMonthValues({
        ...monthValues,
        [event.target.name]: event.target.value,
      });
    }
  };

  const submitHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    props.handleSubmitButton(
      gcmNameValue,
      Object.values(monthValues).map((value) => {
        return parseFloat(value);
      }),
    );
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
          label="Jan"
          name="jan"
          onChange={monthValuesOnChangeHandler}
          onBlur={monthValuesOnBlurHandler}
          value={monthValues.jan}
          error={monthErrors.jan}
          helperText={monthErrorMessage.jan}
          required
        />
        <TextField
          className="input-field"
          variant="outlined"
          label="Feb"
          name="feb"
          onChange={monthValuesOnChangeHandler}
          onBlur={monthValuesOnBlurHandler}
          value={monthValues.feb}
          error={monthErrors.feb}
          helperText={monthErrorMessage.feb}
          required
        />
        <TextField
          className="input-field"
          variant="outlined"
          label="Mar"
          name="mar"
          onChange={monthValuesOnChangeHandler}
          onBlur={monthValuesOnBlurHandler}
          value={monthValues.mar}
          error={monthErrors.mar}
          helperText={monthErrorMessage.mar}
          required
        />
        <TextField
          className="input-field"
          variant="outlined"
          label="Apr"
          name="apr"
          onChange={monthValuesOnChangeHandler}
          onBlur={monthValuesOnBlurHandler}
          value={monthValues.apr}
          error={monthErrors.apr}
          helperText={monthErrorMessage.apr}
          required
        />
        <TextField
          className="input-field"
          variant="outlined"
          label="May"
          name="may"
          onChange={monthValuesOnChangeHandler}
          onBlur={monthValuesOnBlurHandler}
          value={monthValues.may}
          error={monthErrors.may}
          helperText={monthErrorMessage.may}
          required
        />
        <TextField
          className="input-field"
          variant="outlined"
          label="Jun"
          name="jun"
          onChange={monthValuesOnChangeHandler}
          onBlur={monthValuesOnBlurHandler}
          value={monthValues.jun}
          error={monthErrors.jun}
          helperText={monthErrorMessage.jun}
          required
        />
        <TextField
          className="input-field"
          variant="outlined"
          label="Jul"
          name="jul"
          onChange={monthValuesOnChangeHandler}
          onBlur={monthValuesOnBlurHandler}
          value={monthValues.jul}
          error={monthErrors.jul}
          helperText={monthErrorMessage.jul}
          required
        />
        <TextField
          className="input-field"
          variant="outlined"
          label="Aug"
          name="aug"
          onChange={monthValuesOnChangeHandler}
          onBlur={monthValuesOnBlurHandler}
          value={monthValues.aug}
          error={monthErrors.aug}
          helperText={monthErrorMessage.aug}
          required
        />
        <TextField
          className="input-field"
          variant="outlined"
          label="Sep"
          name="sep"
          onChange={monthValuesOnChangeHandler}
          onBlur={monthValuesOnBlurHandler}
          value={monthValues.sep}
          error={monthErrors.sep}
          helperText={monthErrorMessage.sep}
          required
        />
        <TextField
          className="input-field"
          variant="outlined"
          label="Oct"
          name="oct"
          onChange={monthValuesOnChangeHandler}
          onBlur={monthValuesOnBlurHandler}
          value={monthValues.oct}
          error={monthErrors.oct}
          helperText={monthErrorMessage.oct}
          required
        />
        <TextField
          className="input-field"
          variant="outlined"
          label="Nov"
          name="nov"
          onChange={monthValuesOnChangeHandler}
          onBlur={monthValuesOnBlurHandler}
          value={monthValues.nov}
          error={monthErrors.nov}
          helperText={monthErrorMessage.nov}
          required
        />
        <TextField
          className="input-field"
          variant="outlined"
          label="Dec"
          name="dec"
          onChange={monthValuesOnChangeHandler}
          onBlur={monthValuesOnBlurHandler}
          value={monthValues.dec}
          error={monthErrors.dec}
          helperText={monthErrorMessage.dec}
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

export default FormsMonth;
