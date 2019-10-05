import { validateAWSPhone, formatAWSPhone } from '../src/phone';

describe('phone utils', () => {
  it('validates a phone', () => {
    const phoneWithCountryCode = '18161235423';
    expect(validateAWSPhone(phoneWithCountryCode)).toBe(true);
    const phoneWithCountryCodePlus = '+18161235423';
    expect(validateAWSPhone(phoneWithCountryCodePlus)).toBe(true);
    const phoneWithoutCountryCode = '8161235423';
    expect(validateAWSPhone(phoneWithoutCountryCode)).toBe(true);
    const phoneWithHyphens = '816-235-4234';
    expect(validateAWSPhone(phoneWithHyphens)).toBe(true);

    const badPhone = '123';
    expect(validateAWSPhone(badPhone)).toBe(false);
  });

  it('formats a phone', () => {
    const expected = '+18161235423';
    const phoneWithCountryCode = '18161235423';
    expect(formatAWSPhone(phoneWithCountryCode)).toEqual(expected);
    const phoneWithCountryCodePlus = '+1 816 123 5423';
    expect(formatAWSPhone(phoneWithCountryCodePlus)).toEqual(expected);
    const phoneWithoutCountryCode = '8161235423';
    expect(formatAWSPhone(phoneWithoutCountryCode)).toEqual(expected);
    const phoneWithHyphens = '816-123-5423';
    expect(formatAWSPhone(phoneWithHyphens)).toEqual(expected);

    const badPhone = '123';
    expect(formatAWSPhone(badPhone)).not.toEqual(expected);
  });
});
