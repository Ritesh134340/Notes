function checkPassword(password) {
  let passwordData = {
    upperCase: false,
    lowerCase: false,
    length: false,
    number: false,
    character: false,
  };

  const pattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // Add points for password length
  if (password.length >= 8 && password.length <= 12) {
    passwordData.length = true;
  }

  // Add points for password complexity
  if (/[a-z]/.test(password)) {
    passwordData.lowerCase = true;
  }
  if (/[A-Z]/.test(password)) {
    passwordData.upperCase = true;
  }
  if (/\d/.test(password)) {
    passwordData.number = true;
  }
  if (/[@$!%*?&]/.test(password)) {
    passwordData.character = true;
  }

  // Return the password strength score
  return passwordData
}

export default checkPassword;
