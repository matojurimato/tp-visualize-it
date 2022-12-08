import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Box from "@mui/system/Box";
import { useState } from "react";

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

  const customTextFieldStyle = {
    width: 250,
    margin: 1,
  };

  return (
    <div className="annual-avg-container">
      <form>
        <Box>
          <TextField
            sx={customTextFieldStyle}
            variant="outlined"
            type="text"
            label="GCM name"
            value={gcmName}
            onChange={changeGcmNameHandler}
            required
          />
          <TextField
            sx={customTextFieldStyle}
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
                + Add
              </Button>
            </div>
          </div>
        </Box>
      </form>
    </div>
  );
};

export default FormsYear;
