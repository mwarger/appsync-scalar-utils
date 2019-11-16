import { format, parseISO, fromUnixTime } from 'date-fns';

// from docs: YYYY-MM-DD
export const AWSDateFormatString = 'yyyy-MM-dd'; // date-fns format

export const AWSTimeFormatString = `hh:mm:ss.SSSX`;

// from docs: YYYY-MM-DDThh:mm:ss.sssZ
export const AWSDateTimeFormatString = `${AWSDateFormatString}'T'${AWSTimeFormatString}`; // date-fns format

/**
 * Returns a Date parsed from the AppSync DateTime scalar
 * @param {string} date AWSDateTime returned from AppSync
 */
export const parseAWSDateTime = (date: string) => parseISO(date);

/**
 * Returns a Date parsed from the AppSync Date scalar
 * @param {string} date -  parse AWSDate returned from AppSync
 */
export const parseAWSDate = (date: string) => parseISO(date);

/**
 * Returns a string that can be passed to a GraphQL mutation as an AWSDateTime scalar
 * @param {Date|number|string} date - Date to be formatted
 */
export const formatAWSDateTime = (date: Date | number | string) => {
  return format(new Date(date), AWSDateTimeFormatString);
};

/**
 * Returns a string that can be passed to a GraphQL mutation as an AWSDate scalar
 * @param date Used to construct a Date
 */
export const formatAWSDate = (date: Date | number | string) =>
  format(new Date(date), AWSDateFormatString);

/**
 *
 * @param timestamp Unix epoch timestamp
 */
export const formatAWSTimestamp = (timestamp: number) =>
  format(fromUnixTime(timestamp), AWSDateTimeFormatString);
