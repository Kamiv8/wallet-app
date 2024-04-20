export const passwordRegex = /^(?=.*[^a-zA-Z0-9])(?=.*\d)(?=.*[A-Z]).+$/;

export const guidRegex =
  /^[0-9A-F]{8}-[0-9A-F]{4}-[5][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;

export const hexColorRegex = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
