const getQueryStrings = (url) => {
  const obj = {};
  if (url.indexOf('?') < 0) {
    return false;
  }
  if (!url) {
    return false;
  }
  const getParams = url.split('?')[1].split('&');
  getParams.forEach((element) => {
    const [key, value] = element.split('=');
    obj[key] = value;
  });
  return obj;
};

export default getQueryStrings;
