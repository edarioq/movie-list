export const isEmail = (email: string): boolean => {
  if (!email) {
    return false;
  }
  return !!email.match(/^\S+@\S+\.\S+$/);
};

export const isNumber = (number: string): boolean => {
  if (!number) {
    return false;
  }
  return !!number.match(/[0-9]+$/g);
};

export const isPhoneNumber = (number: string) => {
  if (!number) {
    return false;
  }
  return !!number.match(/^[+]?[\s./0-9]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/g);
};

export const hasNoSpaces = (value: string): boolean => {
  if (!value) {
    return false;
  }
  return !!value.match(/^\S*$/);
};

export const hasNoSpecialCharacters = (value: string) => {
  if (!value) {
    return false;
  }
  return !!!value.match(/[^a-zA-Z .]+/);
};
