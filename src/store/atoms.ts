import { atom } from "recoil";
import {
  AVAILABLE_COUNTRIES,
  AVAILABLE_PERIODS,
  AVAILABLE_TYPES,
} from "../models/constants";
import {
  TAvailableCountries,
  TAvailablePeriods,
  TAvailableTypes,
} from "../models/types";

export const selectedPageState = atom<string>({
  key: "selectedPageState",
  default: "mavg",
});

export const selectedCountryState = atom<TAvailableCountries>({
  key: "selectedCountryState",
  default: AVAILABLE_COUNTRIES[0],
});

export const selectedPeriodState = atom<TAvailablePeriods>({
  key: "selectedPeriodState",
  default: AVAILABLE_PERIODS[0],
});

export const selectedTypeState = atom<TAvailableTypes>({
  key: "selectedTypeState",
  default: AVAILABLE_TYPES[0],
});
