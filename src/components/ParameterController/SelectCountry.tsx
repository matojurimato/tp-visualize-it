import { useRecoilState } from "recoil";
import { selectedCountryState } from "../../store/atoms";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { AVAILABLE_COUNTRIES } from "../../models/constants";
import { TAvailableCountries } from "../../models/types";
import "./ParameterController.css";

const SelectCountry = () => {
  const [selectedCountry, setSelectedCountry] =
    useRecoilState(selectedCountryState);

  const handleChangeCountry = (event: SelectChangeEvent) => {
    const newSelectedCountry: TAvailableCountries = AVAILABLE_COUNTRIES.filter(
      (country) => {
        return country.isoCode === event.target.value;
      },
    )[0];
    setSelectedCountry(newSelectedCountry);
  };

  return (
    <>
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
    </>
  );
};

export default SelectCountry;
