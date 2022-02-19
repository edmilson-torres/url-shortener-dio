import isValidURL from './is-valid-url.utils';

describe('isvalid url', () => {
  const isValid = isValidURL('http://www.google.com');

  it('is valid url', () => {
    expect(isValid).toBeTruthy();
  });
});
