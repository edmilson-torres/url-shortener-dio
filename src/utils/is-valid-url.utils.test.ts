import isValidURL from './is-valid-url.utils';

const isValid = isValidURL('http://www.google.com');

describe('isvalid url', () => {
  test('should be able validate a URL', () => {
    expect(isValid).toBeTruthy();
  });
});
