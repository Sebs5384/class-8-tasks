const $form = document.querySelector("#santa-card");

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
