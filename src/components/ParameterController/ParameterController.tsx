import Box from "@mui/material/Box";
import "./ParameterController.css";
import SelectCountry from "./SelectCountry";
import SelectPeriod from "./SelectPeriod";
import SelectType from "./SelectType";

const ParameterController = () => {
  return (
    <>
      <Box className="select-container">
        <SelectCountry />
        <SelectPeriod />
        <SelectType />
      </Box>
    </>
  );
};

export default ParameterController;
