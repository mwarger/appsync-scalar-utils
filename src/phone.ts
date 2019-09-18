import {
  parseNumber,
  formatNumber,
  parsePhoneNumber,
  CountryCode,
} from 'libphonenumber-js';

export const validateAWSPhone = (
  phoneNumber: string,
  countryCode: CountryCode = 'US'
) => parsePhoneNumber(phoneNumber, countryCode).isPossible();

export const formatAWSPhone = (
  phoneNumber: string,
  countryCode: CountryCode = 'US'
) => formatNumber(parseNumber(phoneNumber, countryCode), 'E.164');
