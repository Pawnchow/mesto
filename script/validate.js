//    Валидация форм
  const getErrorElement = (formElement, inputElement) => {
    return formElement.querySelector(`#${inputElement.id}-error`);
  };
  const getErrorMessage = (inputElement) => {
    return inputElement.validationMessage;
  };
  
  const showError = (formElement, inputElement, errorMessage) => {
    const errorElement = getErrorElement(formElement, inputElement);
    errorElement.textContent = errorMessage;
    inputElement.classList.add(validationConfig.inputErrorClass);
  };
  
  const hideError = (formElement, inputElement) => {
    const errorElement = getErrorElement(formElement, inputElement);
    errorElement.textContent = "";
    inputElement.classList.remove(validationConfig.inputErrorClass);
  };
  
  const checkValidity = (formElement, inputElement) => {
    const isInputNotValid = !inputElement.validity.valid;
    if (isInputNotValid) {
      const errorMessage = getErrorMessage(inputElement);
      showError(formElement, inputElement, errorMessage);
    } else {
      hideError(formElement, inputElement);
    }
  };
  
  const setEventListeners = (formElement) => {
    const inputList = formElement.querySelectorAll(validationConfig.inputSelector);
    const submitButtonElement = formElement.querySelector(validationConfig.submitButtonSelector);
    toggleButtonState(inputList, submitButtonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", (evt) => {
        checkValidity(formElement, inputElement);
        toggleButtonState(inputList, submitButtonElement);
      });
    });
  };
  
  // Функция включения валидации
  
  const enableValidation = (validationConfig) => {
    const formList = document.querySelectorAll(validationConfig.formSelector);
  
    formList.forEach((formElement) => {
      formElement.addEventListener("submit", (evt) => {
        evt.preventDefault();
      });
      setEventListeners(formElement);
    });
  };
  
  // Функция выключения кнопки при невалидной форме
  const toggleButtonState = (inputList, submitButtonElement) => {
    const inputElements = Array.from(inputList);
    const hasInvalidInput = inputElements.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  
    if (hasInvalidInput) {
      submitButtonElement.classList.add(validationConfig.inactiveButtonClass);
      submitButtonElement.setAttribute("disabled", true);
    } else {
      submitButtonElement.classList.remove(validationConfig.inactiveButtonClass);
      submitButtonElement.removeAttribute("disabled");
    }
  };
  
  enableValidation(validationConfig);


// Функция сброса ошибок формы
const resetValidation = (formElement) => {
    const inputList = formElement.querySelectorAll(".popup__input");
    const submitButtonElement = formElement.querySelector(validationConfig.submitButtonSelector);
    toggleButtonState(inputList, submitButtonElement);
    inputList.forEach((inputElement) => {
        hideError(formElement, inputElement);
    });
};