import { validateAWSURL } from '../src/url';

describe('IP Address utils', () => {
  it('validates an IP Address', () => {
    const httpUrl = 'http://google.com';
    expect(validateAWSURL(httpUrl)).toBe(true);

    const httpsUrl = 'https://google.com';
    expect(validateAWSURL(httpsUrl)).toBe(true);

    const noHTTPURl = 'google.com';
    expect(validateAWSURL(noHTTPURl)).toBe(false);

    const badURL = 'blah@';
    expect(validateAWSURL(badURL)).toBe(false);
  });
});
