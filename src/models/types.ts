export type TPoint = {
  gcm: string;
  variable: string;
  fromYear: number;
  toYear: number;
  country?: string;
};

export type TPointMonth = TPoint & {
  monthVals: number[];
};

export type TPointYear = TPoint & {
  annualData: number[];
};

export type TAvailableCountries = {
  isoCode: string;
  name: string;
};

export type TAvailablePeriods = {
  fromYear: number;
  toYear: number;
};

export type TAvailableTypes = {
  apiAbbreviation: string;
  name: string;
};
