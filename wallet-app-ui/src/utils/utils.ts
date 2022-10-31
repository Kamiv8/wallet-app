export const flattenObject = (nestedMessages: any, prefix = '.') => {
  return Object.keys(nestedMessages).reduce((messages: any, key: any) => {
    const value = nestedMessages[key];
    const prefixedKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'string') {
      messages[prefixedKey] = value;
    } else {
      Object.assign(messages, flattenObject(value, prefixedKey));
    }

    return messages;
  });
};

export const cutString = (value: string, end: number): string =>
  value.length > end ? `${value.slice(0, end)}...` : value;

export const createPathArray = (pathname: string) => {
  return pathname.split('/');
};
