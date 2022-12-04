import {
  TAvailableCountries,
  TAvailablePeriods,
  TAvailableTypes,
} from "./types";

export const BASE_URL: string =
  "https://taneo-climate-api.herokuapp.com/v1/country/";

// Yugoslavia is an exception - its isoCode does not exist,
// and custom fetching logic is implemented for it
export const AVAILABLE_COUNTRIES: TAvailableCountries[] = [
  { isoCode: "HRV", name: "Croatia", formedYugoslavia: true },
  { isoCode: "SVN", name: "Slovenia", formedYugoslavia: true },
  { isoCode: "SRB", name: "Serbia", formedYugoslavia: true },
  { isoCode: "BIH", name: "Bosnia & Herzegovina", formedYugoslavia: true },
  { isoCode: "MNE", name: "Montenegro", formedYugoslavia: true },
  { isoCode: "MKD", name: "Macedonia", formedYugoslavia: true },
  { isoCode: "YU", name: "Yugoslavia" },
];

export const AVAILABLE_PERIODS: TAvailablePeriods[] = [
  { fromYear: 2020, toYear: 2039 },
  { fromYear: 2040, toYear: 2059 },
  { fromYear: 2060, toYear: 2079 },
  { fromYear: 2080, toYear: 2099 },
];

export const AVAILABLE_TYPES: TAvailableTypes[] = [
  { apiAbbreviation: "tas", name: "Temperature" },
  { apiAbbreviation: "pr", name: "Precipitation" },
];

export const MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
