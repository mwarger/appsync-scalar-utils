import { format, parseISO } from 'date-fns';

export const AWSDateTimeFormatString = `yyyy-MM-dd'T'hh:mm:ss.sssX`;
export const AWSDateFormatString = 'yyyy-MM-dd';

export const parseAWSDateTime = (date: string) => parseISO(date);

export const parseAWSDate = (date: string) => parseISO(date);

export const formatAWSDateTime = (date: Date | number | string) =>
  format(new Date(date), AWSDateTimeFormatString);

export const formatAWSDate = (date: Date | number | string) =>
  format(new Date(date), AWSDateFormatString);
