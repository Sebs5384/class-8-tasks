function testValidateName() {
  console.assert(validateName("") === "This field should contain atleast 1 character", "Validate name has failed to avoid user from putting empty characters on userName");
  console.assert(validateName("53845384538453845384538453845384538453845384538453") === "This field should contain less than 50 characters", "Validate name has failed to avoid user from putting more than 50 characters");
  console.assert(validateName("12345689") === "The field userName should only contain letters", "validateName is not checking for numbers in user's name input");
  console.assert(validateName("Sebastian") === "", "validateName didn't work with a valid name");
}

function testValidateCity() {
  console.assert(validateCity("") === "You must choose a city", "Validate city wasn't able to check if the user choose an option");
  console.assert(validateCity("Santa Cruz") === "", "validateCity didn't work with a valid city");
}

function testValidateGiftDescription() {
  console.assert(validateGiftDescription("") === "This field can't be empty, make sure to fill it with your wished gift", "Validate gift description has failed to check if the description is empty");
  console.assert(
    validateGiftDescription("538453845384538453845384538453845384538453845384538453845384538453845384538453845384538453845384538453845384538453845384538453845384538453845384538453") === "The description you've given is too large",
    "Validate gift description has failed to validate if the description is too large"
  );
  console.assert(validateGiftDescription(",.,.,.,.,.,.") === "The description only accepts numbers and letters", "validateGiftDescription has failed to validate the input only being numbers and letters");
  console.assert(validateGiftDescription("AE86") === "", "validateGiftDescription didn't work with a valid description");
}

testValidateName();
testValidateCity();
testValidateGiftDescription();
