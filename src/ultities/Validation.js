export const isValidEmailForm = (stringEmail) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(stringEmail);
};

export const isValidPasswordForm = (stringPassword) => {
  return /(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{6,20}).*$/.test(
    stringPassword
  );
};
