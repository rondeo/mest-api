const events = require('../../../../application/modules/emitter/events');
const messages = require('../../../../application/messages');

module.exports = function TestFlowAction({
  emitter,
  validator,
}) {
  this.emitter = emitter;
  this.validator = validator;

  this.run = async function run(input) {
    if (!this.validator.isValid(input)) {
      emitter.emit(events.names.badRequest, { errors: this.validator.getErrors(input) });

      return;
    }

    emitter.emit(events.names.success, { ok: true });
  };
}