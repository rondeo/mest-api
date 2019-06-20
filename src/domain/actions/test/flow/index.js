const events = require('../../../../application/modules/emitter/events');
const messages = require('../../../../application/messages');

module.exports = function TestFlowAction({
  emitter,
  validator,
}) {
  this.emitter = emitter;

  this.run = async function run(input) {
    if (validator.isValid(input)) {
      emitter.emit(events.names.badRequest, { error: messages.common.invalidInput });

      return;
    }

    emitter.emit(events.names.success, { ok: true });
  };
}