import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Box from "@mui/system/Box";
import { useState } from "react";
import "./NewPointModal.css";

const FormsYear: React.FC<{
  handleSubmitButton: (gcmName: string, yearValue: number[]) => void;
}> = (props) => {
  const [gcmName, setGcmName] = useState<string>("");
  const [yearValue, setYearValue] = useState(0);

  const changeGcmNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setGcmName(event.target.value);
  };

  const changeYearValueHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    event.preventDefault();
    setYearValue(parseFloat(event.target.value));
  };

  const submitHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    props.handleSubmitButton(gcmName, [yearValue]);
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
            value={gcmName}
            onChange={changeGcmNameHandler}
            required
          />
        </div>
        <TextField
          className="input-field"
          variant="outlined"
          type="number"
          label="Year value"
          value={yearValue}
          onChange={changeYearValueHandler}
          required
        />
        <div className="button-container">
          <div className="submit-button">
            <Button onClick={submitHandler} variant="contained">
              ADD NEW POINT
            </Button>
          </div>
        </div>
      </Box>
    </form>
  );
};

export default FormsYear;
