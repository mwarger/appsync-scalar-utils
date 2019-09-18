import ipRegex from 'ip-regex';

export const validateAWSIPAddress = (ip: string) => ipRegex().test(ip);
