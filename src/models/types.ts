export type TPoint = {
  gcm: String;
  variable: String;
  fromYear: Number;
  toYear: Number;
  country?: String;
};

export type TPointMonth = TPoint & {
  monthVals: Number[];
};

export type TPointYear = TPoint & {
  annualData: Number[];
};

export type TAvailableCountries = {
  isoCode: String;
  name: String;
};

export type TAvailablePeriods = {
  fromYear: Number;
  toYear: Number;
};
