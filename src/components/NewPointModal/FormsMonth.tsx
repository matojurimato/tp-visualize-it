import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const FormsMonth: React.FC<{
  handleSubmitButton: (gcmName: string, montValues: number[]) => void;
}> = (props) => {
  const [gcmName, setGcmName] = useState<string>("");
  const [monthValues, setMonthValues] = useState({
    jan: 0,
    feb: 0,
    mar: 0,
    apr: 0,
    may: 0,
    jun: 0,
    jul: 0,
    aug: 0,
    sep: 0,
    oct: 0,
    nov: 0,
    dec: 0,
  });

  const changeGcmNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setGcmName(event.currentTarget.value);
  };

  const changeMonthValueHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    event.preventDefault();
    setMonthValues({
      ...monthValues,
      [event.currentTarget.name]: parseFloat(event.currentTarget.value),
    });
  };

  const submitHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    props.handleSubmitButton(gcmName, Object.values(monthValues));
  };

  const customTextFieldStyle = {
    width: 250,
    margin: 1,
  };

  return (
    <div className="annual-average-container">
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
            label="Jan"
            name="jan"
            value={monthValues.jan}
            onChange={changeMonthValueHandler}
            required
          />
          <TextField
            sx={customTextFieldStyle}
            variant="outlined"
            type="number"
            label="Feb"
            name="feb"
            value={monthValues.feb}
            onChange={changeMonthValueHandler}
            required
          />
          <TextField
            sx={customTextFieldStyle}
            variant="outlined"
            type="number"
            label="Mar"
            name="mar"
            value={monthValues.mar}
            onChange={changeMonthValueHandler}
            required
          />
          <TextField
            sx={customTextFieldStyle}
            variant="outlined"
            type="number"
            label="Apr"
            name="apr"
            value={monthValues.apr}
            onChange={changeMonthValueHandler}
            required
          />
          <TextField
            sx={customTextFieldStyle}
            variant="outlined"
            type="number"
            label="May"
            name="may"
            value={monthValues.may}
            onChange={changeMonthValueHandler}
            required
          />
          <TextField
            sx={customTextFieldStyle}
            variant="outlined"
            type="number"
            label="Jun"
            name="jun"
            value={monthValues.jun}
            onChange={changeMonthValueHandler}
            required
          />
          <TextField
            sx={customTextFieldStyle}
            variant="outlined"
            type="number"
            label="Jul"
            name="jul"
            value={monthValues.jul}
            onChange={changeMonthValueHandler}
            required
          />
          <TextField
            sx={customTextFieldStyle}
            variant="outlined"
            type="number"
            label="Aug"
            name="aug"
            value={monthValues.aug}
            onChange={changeMonthValueHandler}
            required
          />
          <TextField
            sx={customTextFieldStyle}
            variant="outlined"
            type="number"
            label="Sep"
            name="sep"
            value={monthValues.sep}
            onChange={changeMonthValueHandler}
            required
          />
          <TextField
            sx={customTextFieldStyle}
            variant="outlined"
            type="number"
            label="Oct"
            name="oct"
            value={monthValues.oct}
            onChange={changeMonthValueHandler}
            required
          />
          <TextField
            sx={customTextFieldStyle}
            variant="outlined"
            type="number"
            label="Nov"
            name="nov"
            value={monthValues.nov}
            onChange={changeMonthValueHandler}
            required
          />
          <TextField
            sx={customTextFieldStyle}
            variant="outlined"
            type="number"
            label="Dec"
            name="dec"
            value={monthValues.dec}
            onChange={changeMonthValueHandler}
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

export default FormsMonth;
