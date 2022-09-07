export const formInputs = {
  email: {
    title: 'Email Address',
    validations: {
      minLength: 8,
      pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      required: true,
    },
    value: '',
    errors: [],
    type: 'email',
  },
  password: {
    title: 'Password',
    validations: {
      minLength: 6,
      pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
      required: true,
      contain: true,
    },
    value: '',
    errors: [],
    type: 'password',
  },
  confirmPassword: {
    title: 'Confirm Password',
    validations: {
      required: true,
      match: true,
    },
    value: '',
    errors: [],
    type: 'password',
  },
};

export const validateInput = (inputEl, formInputs) => {
  const formInput = formInputs[inputEl.name];
  const formInputValidations = formInput.validations;
  formInput.value = inputEl.value;
  formInput.errors = [];
  if (formInputValidations.pattern) {
    if (!inputEl.value.match(formInputValidations.pattern)) {
      formInput.errors.push(`Invalid ${formInput.title}`);
    }
  }
  if (formInputValidations.contain) {
    if (!inputEl.value.match(/([0-9].*[a-z])|([a-z].*[0-9])/)) {
      formInputs.password.errors.push(
        `Password must contain at least one letter and one number`
      );
    }
  }
  if (formInputValidations.minLength) {
    if (inputEl.value.length < formInputValidations.minLength) {
      formInput.errors.push(
        `${formInput.title} must be at least ${formInputValidations.minLength} characters`
      );
    }
  }
  if (formInputValidations.required) {
    if (!inputEl.value) {
      formInput.errors.push(`${formInput.title} must not be empty`);
    }
  }
  if (formInputValidations.match) {
    if (formInputs.confirmPassword.value !== formInputs.password.value) {
      formInputs.confirmPassword.errors.push(
        `Confirm Password must match Password`
      );
    }
  }
};
