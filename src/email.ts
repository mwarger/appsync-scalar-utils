// eslint-disable-next-line no-useless-escape
export const AWSEmailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/**
 * Returns true if the email an be used as AWSEmail scalar
 * @param {string} email
 */
export const validateAWSEmail = (email: string) => AWSEmailRegex.test(email);
