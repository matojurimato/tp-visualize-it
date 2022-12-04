export type TPoint = {
  gcm: string;
  variable: string;
  fromYear: number;
  toYear: number;
  monthVals?: number[];
  annualData?: number[];
};

export type TAvailableCountries = {
  isoCode: string;
  name: string;
  formedYugoslavia?: boolean;
};

export type TAvailablePeriods = {
  fromYear: number;
  toYear: number;
};

export type TAvailableTypes = {
  apiAbbreviation: string;
  name: string;
};
