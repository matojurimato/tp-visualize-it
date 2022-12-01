import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./ParameterController.css";

const ParameterController = () => {
  return (
    <>
      <Box className="select-container">
        <FormControl className="dropdown-select" size="small">
          <InputLabel>Country</InputLabel>
          <Select label="Country">
            <MenuItem value={"country1"} key={"1"}>
              country1
            </MenuItem>
            <MenuItem value={"country2"} key={"2"}>
              country2
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl className="dropdown-select" size="small">
          <InputLabel>Period</InputLabel>
          <Select label="Period">
            <MenuItem value={"period1"} key={"1"}>
              period1
            </MenuItem>
            <MenuItem value={"period2"} key={"2"}>
              period2
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl className="dropdown-select" size="small">
          <InputLabel>Type</InputLabel>
          <Select label="Type">
            <MenuItem value={"type1"} key={"1"}>
              type1
            </MenuItem>
            <MenuItem value={"type2"} key={"2"}>
              type2
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default ParameterController;
