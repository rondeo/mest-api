const faker = require('faker');
const getEmitter = require('../../../src/application/modules/emitter');
const events = require('../../../src/application/modules/emitter/events');

describe('Emitter Module Tests', () => {  
  describe('getEmitter()', () => {
    it('executes response with status 200 and callback input when emits success event', () => {
      const response = {
        status: jest.fn(() => {}),
        json: jest.fn(() => {}),
      };
      const input = { data: faker.random.number() };

      const emitter = getEmitter(response);
      emitter.emit(events.names.success, input);

      expect(response.status).toHaveBeenCalledWith(events.statusCodes.success);
      expect(response.json).toHaveBeenCalledWith(input);
    });
    it('executes response with status 400 and callback input when emits bad request event', () => {
      const response = {
        status: jest.fn(() => {}),
        json: jest.fn(() => {}),
      };
      const input = { data: faker.random.number() };

      const emitter = getEmitter(response);
      emitter.emit(events.names.badRequest, input);

      expect(response.status).toHaveBeenCalledWith(events.statusCodes.badRequest);
      expect(response.json).toHaveBeenCalledWith(input);
    });
    it('executes response with status 422 and callback input when emits unprocessable entity event', () => {
      const response = {
        status: jest.fn(() => {}),
        json: jest.fn(() => {}),
      };
      const input = { data: faker.random.number() };

      const emitter = getEmitter(response);
      emitter.emit(events.names.unprocessableEntity, input);

      expect(response.status).toHaveBeenCalledWith(events.statusCodes.unprocessableEntity);
      expect(response.json).toHaveBeenCalledWith(input);
    });
    it('executes response with status 204 and callback input when emits no content event', () => {
      const response = {
        status: jest.fn(() => {}),
        json: jest.fn(() => {}),
      };
      const input = { data: faker.random.number() };

      const emitter = getEmitter(response);
      emitter.emit(events.names.noContent, input);

      expect(response.status).toHaveBeenCalledWith(events.statusCodes.noContent);
      expect(response.json).toHaveBeenCalledWith(input);
    });
    it('executes response with status 500 and callback input when emits internal server error event', () => {
      const response = {
        status: jest.fn(() => {}),
        json: jest.fn(() => {}),
      };
      const input = { data: faker.random.number() };

      const emitter = getEmitter(response);
      emitter.emit(events.names.internalServerError, input);

      expect(response.status).toHaveBeenCalledWith(events.statusCodes.internalServerError);
      expect(response.json).toHaveBeenCalledWith(input);
    });
  });
});