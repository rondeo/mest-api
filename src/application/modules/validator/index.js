const joi = require('joi');

module.exports = function Validator(schema) {
  this.schema = schema;

  this.validate = function (input) {
    return joi.validate(input, this.schema, { abortEarly: false });
  }

  this.isValid = function (input) {
    const validationError = this.validate(input, this.schema).error;
    
    if (validationError !== null) {
      console.warn('Validation Errors: ', validationError.details);
    }

    return validationError === null;
  };

  this.getErrors = function (input) {
    if (!this.isValid(input)) return this.validate(input, this.schema).error.details;

    return [];
  };
};
