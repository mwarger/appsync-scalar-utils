import { format, parseISO } from 'date-fns';

// from docs: YYYY-MM-DD
export const AWSDateFormatString = 'yyyy-MM-dd'; // date-fns format

export const AWSTimeFormatString = `hh:mm:ss.SSSX`;

// from docs: YYYY-MM-DDThh:mm:ss.sssZ
export const AWSDateTimeFormatString = `${AWSDateFormatString}'T'${AWSTimeFormatString}`; // date-fns format

export type AWSDateTime = string;
export type AWSDate = string;

export const parseAWSDateTime = (date: AWSDateTime) => parseISO(date);

export const parseAWSDate = (date: AWSDate) => parseISO(date);

export const formatAWSDateTime = (date: Date | number | string) =>
  format(new Date(date), AWSDateTimeFormatString);

export const formatAWSDate = (date: Date | number | string) =>
  format(new Date(date), AWSDateFormatString);
