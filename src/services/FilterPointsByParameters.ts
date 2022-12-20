/**
 * This function receives an array of _TPoint_s and returns only those
 * _TPoint_s whose country, period and type properties correspond to those in
 * the respective _selectedCountry_, _selectedPeriod_ and _selectedType_ recoil
 * states.
 */

import { useRecoilValue } from "recoil";
import {
  selectedCountryState,
  selectedTypeState,
  selectedPeriodState,
} from "../store/atoms";
import { TPoint } from "../models/types";

const FilterPointsByParameters = (points: TPoint[]) => {
  const selectedCountry = useRecoilValue(selectedCountryState);
  const selectedPeriod = useRecoilValue(selectedPeriodState);
  const selectedType = useRecoilValue(selectedTypeState);

  return points.filter((point) => {
    return (
      point.countryIso === selectedCountry.isoCode &&
      point.fromYear === selectedPeriod.fromYear &&
      point.variable === selectedType.apiAbbreviation
    );
  });
};

export default FilterPointsByParameters;
