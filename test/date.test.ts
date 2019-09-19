import { formatAWSDate, formatAWSDateTime, formatAWSTimestamp } from '../src';

describe('date utils', () => {
  it('formats a Date to AWSDate format', () => {
    const dateToFormat = new Date('2019/01/01');
    const formattedDate = formatAWSDate(dateToFormat);
    expect(formattedDate).toEqual('2019-01-01');
  });

  it('formats a string Date to AWSDate format', () => {
    const dateToFormat = '2019/01/01';
    const formattedDate = formatAWSDate(dateToFormat);
    expect(formattedDate).toEqual('2019-01-01');
  });

  it('formats a Date to AWSDateTime format', () => {
    const dateToFormat = new Date('2019/01/01');
    const formattedDate = formatAWSDateTime(dateToFormat);
    expect(formattedDate.startsWith('2019-01-01T12:00:00.000')).toBeTruthy(); // ignore time zone
  });

  it('formats a string Date to AWSDateTime format', () => {
    const dateToFormat = '2019/01/01';
    const formattedDate = formatAWSDateTime(dateToFormat);
    expect(formattedDate.startsWith('2019-01-01T12:00:00.000')).toBeTruthy(); // ignore time zone
  });

  it('parses an AWSTimestamp', () => {
    const dateToFormat = 1568902280;
    const formattedDate = formatAWSTimestamp(dateToFormat);
    expect(formattedDate.startsWith('2019-09-19T09:11:20')).toBeTruthy(); // ignore time zone
  });
});
