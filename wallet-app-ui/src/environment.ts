import { CustomString } from './overrides/string.override';

type Environment = (variable: string) => string;

export const environment: Environment = (variable: string) => {
  const env = window.__env__;
  return (env && env[variable]) || process.env[variable] || CustomString.Empty;
};
