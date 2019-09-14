import { format, parseISO } from 'date-fns';

// from docs: YYYY-MM-DDThh:mm:ss.sssZ
export const AWSDateTimeFormatString = `yyyy-MM-dd'T'hh:mm:ss.sssX`; // date-fns format

// from docs: YYYY-MM-DD
export const AWSDateFormatString = 'yyyy-MM-dd'; // date-fns format

export const parseAWSDateTime = (date: string) => parseISO(date);

export const parseAWSDate = (date: string) => parseISO(date);

export const formatAWSDateTime = (date: Date | number | string) =>
  format(new Date(date), AWSDateTimeFormatString);

export const formatAWSDate = (date: Date | number | string) =>
  format(new Date(date), AWSDateFormatString);
