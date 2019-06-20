const joi = require('joi');
const faker = require('faker');
const ValidatorModule = require('../../../src/application/modules/validator');

describe('Validator Module Tests', () => {
  const schema = joi.object().keys({
    example: joi.string().required(),
  }).required();

  describe('isValid()', () => {
    describe('when input is valid', () => {
      it('returns true when input matches schema validation', () => {
        const validator = new ValidatorModule(schema);
        const input = { example: faker.random.word() };

        expect(validator.isValid(input)).toBe(true);
      });
    });

    describe('when input is invalid', () => {
      it('returns true when input does not match schema validation', () => {
        const validator = new ValidatorModule(schema);
        const input = { example: faker.random.boolean() };

        expect(validator.isValid(input)).toBe(false);
      });
    });
  });

  describe('getErrors()', () => {
    describe('when input is valid', () => {
      it('returns empty array when there no validation errors', () => {
        const validator = new ValidatorModule(schema);
        const input = { example: faker.random.word() };

        expect(validator.getErrors(input)).toEqual([]);
      });
    });

    describe('when input is invalid', () => {
      it('returns true when input matches schema validation', () => {
        const validator = new ValidatorModule(schema);
        const errors = joi.validate({}, schema).error.details;

        expect(validator.getErrors({})).toEqual(errors);
      });
    });
  });
});