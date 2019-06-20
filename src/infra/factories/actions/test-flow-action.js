const TestFlowAction = require('../../../domain/actions/test/flow');
const testFlowSchema = require('../../../domain/actions/test/flow/validation');
const Validator = require('../../../application/modules/validator');

const build = function build(emitter) {
  return new TestFlowAction({
    emitter,
    validator: new Validator(testFlowSchema),
  });
};

module.exports = {
  build,
};


