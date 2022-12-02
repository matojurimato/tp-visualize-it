import { TAvailableCountries, TAvailablePeriods } from "./types";

export const BASE_URL: string =
  "https://taneo-climate-api.herokuapp.com/v1/country/";

export const AVAILABLE_COUNTRIES: TAvailableCountries[] = [
  { isoCode: "HRV", name: "Croatia" },
  { isoCode: "SVN", name: "Slovenia" },
  { isoCode: "SRB", name: "Serbia" },
  { isoCode: "BIH", name: "Bosnia & Herzegovina" },
  { isoCode: "MNE", name: "Montenegro" },
  { isoCode: "MKD", name: "Macedonia" },
  { isoCode: "YU", name: "Yugoslavia" },
];

export const AVAILABLE_PERIODS: TAvailablePeriods[] = [
  { fromYear: 2020, toYear: 2039 },
  { fromYear: 2040, toYear: 2059 },
  { fromYear: 2060, toYear: 2079 },
  { fromYear: 2080, toYear: 2099 },
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
