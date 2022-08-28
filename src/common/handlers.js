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
      pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
    },
    value: '',
    errors: [],
    type: 'password',
  },
  confirmPassword: {
    title: 'Confirm Password',
    validations: {
      minLength: 8,
      required: true,
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
  if (formInputValidations.minLength) {
    if (inputEl.value.length < formInputValidations.minLength) {
      formInput.errors.push(
        `${formInput.title} must be at least ${formInputValidations.minLength} `
      );
    }
  }
  if (formInputValidations.required) {
    if (!inputEl.value) {
      formInput.errors.push(`${formInput.title} must not be empty `);
    }
  }
};
