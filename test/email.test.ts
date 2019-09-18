import { validateAWSEmail } from '../src/email';

describe('email utils', () => {
  it('validates an email', () => {
    const goodEmail = 'blah@blah.com';
    expect(validateAWSEmail(goodEmail)).toBe(true);

    const badEmail = 'blah@';
    expect(validateAWSEmail(badEmail)).toBe(false);
  });
});
