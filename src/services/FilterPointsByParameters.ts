import { useRecoilValue } from "recoil";
import { TPoint } from "../models/types";
import {
  selectedCountryState,
  selectedTypeState,
  selectedPeriodState,
} from "../store/atoms";

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
