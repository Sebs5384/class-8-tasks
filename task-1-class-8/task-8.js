const $form = document.querySelector("#santa-card");
$form.onsubmit = validateForm;

function validateForm(event) {
  const $form = document.querySelector("#santa-card");

  const userName = $form["user-name"].value;
  const city = $form.city.value;
  const giftDescription = $form["gift-description"].value;

  const userNameError = validateName(userName);
  const cityError = validateCity(city);
  const giftDescriptionError = validateGiftDescription(giftDescription);

  const errors = {
    "user-name": userNameError,
    city: cityError,
    "gift-description": giftDescriptionError,
  };

  const isSuccessful = handleErrors(errors) === 0;
  if (isSuccessful) {
    document.querySelector("#success").className = "";
    $form.className = "hidden";
    setTimeout(function () {
      window.location.href = "wishlist.html";
    }, 5000);
  }

  event.preventDefault();
}

function handleErrors(errors) {
  const keys = Object.keys(errors);
  const $errors = document.querySelector("#errors");
  let errorsQuantity = 0;
  $errors.innerText = "";

  keys.forEach(function (key) {
    const error = errors[key];

    if (error) {
      errorsQuantity++;
      $form[key].className = "error";
      const $error = document.createElement("li");
      $error.innerText = error;
      $errors.appendChild($error);
    } else {
      $form[key].className = "";
    }
  });
  return errorsQuantity;
}

function validateName(userName) {
  if (userName.length === 0) {
    return "This field should contain atleast 1 character";
  }
  if (userName.length >= 50) {
    return "This field should contain less than 50 characters";
  }
  if (!/^[a-z]+$/i.test(userName)) {
    return "The field userName should only contain letters";
  }
  return "";
}

function validateCity(city) {
  if (city === "") {
    return "You must choose a city";
  }
  return "";
}

function validateGiftDescription(giftDescription) {
  if (giftDescription.length === 0) {
    return "This field can't be empty, make sure to fill it with your wished gift";
  }
  if (giftDescription.length >= 150) {
    return "The description you've given is too large";
  }
  if (!/^[a-z0-9\ ]+$/i.test(giftDescription)) {
    return "The description only accepts numbers and letters";
  }
  return "";
}
