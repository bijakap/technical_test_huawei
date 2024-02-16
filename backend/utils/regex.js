const isValidEmail = (email) => {
  // Define a regular expression for email validation
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  // Test the email against the regular expression
  if (emailRegex.test(email)) {
    // Email is valid
    return true;
  } else {
    // Email is invalid
    return false;
  }
};

const isValidName = (name) => {
  // Define a regular expression for name validation
  const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

  // Test the name against the regular expression
  if (nameRegex.test(name)) {
    // Name is valid
    return true;
  } else {
    // Name is invalid
    return false;
  }
};

const isValidPhoneNumber = (phoneNumber) => {
  // Define a regular expression for phone number validation
  const phoneRegex = /^\+628\d{8,12}$/;

  // Test the phone number against the regular expression
  if (phoneRegex.test(phoneNumber)) {
    // Phone number is valid
    return true;
  } else {
    // Phone number is invalid
    return false;
  }
};

module.exports = {
  isValidEmail,
  isValidName,
  isValidPhoneNumber,
};
