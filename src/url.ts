// eslint-disable-next-line no-useless-escape
export const AWSURLRegex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]_)?\??(?:[\-\+=&;%@\.\w_]_)#?(?:[\.\!\/\\\w]\*))?)/;

export const validateAWSURL = (url: string) => AWSURLRegex.test(url);
