const RoundByTwoDecimals = (values: number[]) => {
  if (values.length) {
    const roundedValues = values.map((value) => {
      return Math.round(value * 100) / 100;
    });
    return roundedValues;
  }

  return [];
};

export default RoundByTwoDecimals;
