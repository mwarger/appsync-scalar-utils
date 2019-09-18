import { validateAWSIPAddress } from '../src/ipAddress';

describe('IP Address utils', () => {
  it('validates an IP Address', () => {
    const goodIPAddress = '192.168.1.1';
    expect(validateAWSIPAddress(goodIPAddress)).toBe(true);

    const badIP = 'blah@';
    expect(validateAWSIPAddress(badIP)).toBe(false);
  });
});
