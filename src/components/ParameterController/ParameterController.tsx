import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useRecoilState } from "recoil";
import {
  AVAILABLE_COUNTRIES,
  AVAILABLE_PERIODS,
  AVAILABLE_TYPES,
} from "../../models/constants";
import {
  TAvailableCountries,
  TAvailablePeriods,
  TAvailableTypes,
} from "../../models/types";
import {
  selectedCountryState,
  selectedPeriodState,
  selectedTypeState,
} from "../../store/atoms";
import "./ParameterController.css";

const ParameterController = () => {
  const [selectedCountry, setSelectedCountry] =
    useRecoilState(selectedCountryState);

  const [selectedPeriod, setSelectedPeriod] =
    useRecoilState(selectedPeriodState);

  const [selectedType, setSelectedType] = useRecoilState(selectedTypeState);

  const handleChangeCountry = (event: SelectChangeEvent) => {
    const newSelectedCountry: TAvailableCountries = AVAILABLE_COUNTRIES.filter(
      (country) => {
        return country.isoCode === event.target.value;
      },
    )[0];
    setSelectedCountry(newSelectedCountry);
  };

  const handleChangePeriod = (event: SelectChangeEvent) => {
    const newSelectedPeriod: TAvailablePeriods = AVAILABLE_PERIODS.filter(
      (period) => {
        return period.fromYear.toString() === event.target.value;
      },
    )[0];
    setSelectedPeriod(newSelectedPeriod);
  };

  const handleChangeType = (event: SelectChangeEvent) => {
    const newSelectedType: TAvailableTypes = AVAILABLE_TYPES.filter((type) => {
      return type.apiAbbreviation === event.target.value;
    })[0];
    setSelectedType(newSelectedType);
  };

  return (
    <>
      <Box className="select-container">
        <FormControl className="dropdown-select" size="small">
          <InputLabel>Country</InputLabel>
          <Select
            value={selectedCountry.isoCode}
            label="Country"
            onChange={handleChangeCountry}
          >
            {AVAILABLE_COUNTRIES.map((country) => {
              return (
                <MenuItem value={country.isoCode} key={country.isoCode}>
                  {country.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl className="dropdown-select" size="small">
          <InputLabel>Period</InputLabel>
          <Select
            value={selectedPeriod.fromYear.toString()}
            label="Period"
            onChange={handleChangePeriod}
          >
            {AVAILABLE_PERIODS.map((period) => {
              return (
                <MenuItem
                  value={period.fromYear.toString()}
                  key={period.fromYear}
                >{`${period.fromYear}-${period.toYear}`}</MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl className="dropdown-select" size="small">
          <InputLabel>Type</InputLabel>
          <Select
            value={selectedType.apiAbbreviation}
            label="Type"
            onChange={handleChangeType}
          >
            {AVAILABLE_TYPES.map((type) => {
              return (
                <MenuItem
                  value={type.apiAbbreviation}
                  key={type.apiAbbreviation}
                >
                  {type.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default ParameterController;
