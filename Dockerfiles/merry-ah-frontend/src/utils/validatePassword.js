const strongPasswordRegex = new RegExp("^(?=.*[a-z])(?=.*[0-9])(?=.{5,})");

const validatePassword = (password) => {
  return strongPasswordRegex.test(password);
};

export default validatePassword;
