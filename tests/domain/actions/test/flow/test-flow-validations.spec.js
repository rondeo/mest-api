const faker = require('faker');
const ValidatorModule = require('../../../../../src/application/modules/validator');
const testFlowActionSchema = require('../../../../../src/domain/actions/test/flow/validation');
const fixtures = require('./fixtures');

describe('Test Flow Validations Tests', () => {
  describe('isValid()', () => {
    describe('when input is valid', () => {
      it('returns true when input matches schema validation', () => {
        const validator = new ValidatorModule(testFlowActionSchema);

        expect(validator.isValid(fixtures.validFlow)).toBe(true);
      });
    });

    describe('when input is invalid', () => {
      it('returns true when input does not match schema validation', () => {
        const validator = new ValidatorModule(testFlowActionSchema);
        const input = { example: faker.random.boolean() };

        expect(validator.isValid(fixtures.validFlow.requests)).toBe(false);
      });
    });
  });
});
