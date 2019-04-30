import getQueryStrings from '../../utils/getQueryStrings';

it('should return an object with query strings ', () => {
  const url = 'http://www.facebook.com?token=mytoken';
  const response = getQueryStrings(url);
  expect(response.token).toEqual('mytoken');
});
it('should return false ', () => {
  const url = 'sdsdsds';
  const response = getQueryStrings(url);
  expect(response).toEqual(false);
});
