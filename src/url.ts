import urlRegex from 'url-regex';

export const AWSURLRegex = urlRegex();

export const validateAWSURL = (url: string) => urlRegex().test(url);
