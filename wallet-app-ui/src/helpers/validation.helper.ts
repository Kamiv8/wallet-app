export const stringRangeChars = (
  value: string,
  min?: number,
  max?: number,
): boolean => {
  return value.length >= (min || 0) && value.length <= (max || value.length);
};

export const notAllowNegativeNumbers = (value: number): boolean => {
  return !(value >= 0);
};
