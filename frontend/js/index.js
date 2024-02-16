console.log("script is loaded");

var cardFrom = document.getElementById("card-form");
var form = document.getElementById("registrasi-form");
var result = document.getElementById("result");
var button = document.getElementById("button");
var buttonBack = document.getElementById("btnBack");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  button.innerHTML = "Loading...";
  button.disabled = true;

  clearErrorMessages(form);

  // Membuat objek JSON
  const jsonData = {
    nama: form.querySelector("#nama").value,
    email: form.querySelector("#email").value,
    nomor_telepon: "+62" + form.querySelector("#nomor_telepon").value,
  };

  console.log(jsonData);

  if (!ValidateJsonData(jsonData)) {
    resetButton();
    return;
  }

  try {
    // Simulate fetching or use actual fetch API
    await simulateFetching();
    console.log("done");
    showResult();
  } catch (error) {
    console.error("Error during fetching:", error);
    resetButton();
  }
});

buttonBack.addEventListener("click", () => {
  result.style.display = "none";
  cardFrom.style.display = "block";

  form.reset();
});

const ValidateJsonData = (JsonData) => {
  var errors = [];
  var NameValue = JsonData["nama"];
  var EmailValue = JsonData["email"];
  var phoneNumberValue = JsonData["nomor_telepon"];

  if (!isValidName(NameValue)) {
    errors.push({
      name: "nama",
      message: "Nama tidak valid",
    });
  }

  if (!isValidEmail(EmailValue)) {
    errors.push({
      name: "email",
      message: "Email tidak valid",
    });
  }

  if (!isValidPhoneNumber(phoneNumberValue)) {
    errors.push({
      name: "nomor_telepon",
      message: "Nomor Telepon tidak valid",
    });
  }

  if (errors.length > 0) {
    displayErrors(errors);
    return false;
  }

  return true;
};

const displayErrors = (errors) => {
  for (let i = 0; i < errors.length; i++) {
    document.getElementById(errors[i].name + "-error").textContent =
      errors[i].message;
  }
};

function clearErrorMessages(form) {
  var formElements = form.elements;

  for (var i = 0; i < formElements.length; i++) {
    var element = formElements[i];
    if (element.tagName === "INPUT") {
      document.getElementById(element.name + "-error").textContent = "";
    }
  }
}

const resetButton = () => {
  button.innerHTML = "Kirim";
  button.disabled = false;
};

const simulateFetching = () => {
  return new Promise((resolve) => {
    // Simulate a 2-second delay
    setTimeout(resolve, 2000);
  });
};

const showResult = () => {
  resetButton();
  result.style.display = "flex";
  cardFrom.style.display = "none";
};

// https://medium.com/@lelianto.eko/indonesian-usefull-regex-formatter-function-41e3c541fcb3
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
