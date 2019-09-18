import { validateAWSPhone } from '../src/phone';

describe('phone utils', () => {
  it('validates an phone', () => {
    const phoneWithCountryCode = '18161235423';
    expect(validateAWSPhone(phoneWithCountryCode)).toBe(true);
    const phoneWithoutCountryCode = '8161235423';
    expect(validateAWSPhone(phoneWithoutCountryCode)).toBe(true);
    const phoneWithHyphens = '816-235-4234';
    expect(validateAWSPhone(phoneWithHyphens)).toBe(true);

    const badPhone = '123';
    expect(validateAWSPhone(badPhone)).toBe(false);
  });
});
