const getEmitter = require('../../application/modules/emitter');

module.exports = function actionRunner(request, response, factory) {
  const emitter = getEmitter(response);
  const action = factory.build(emitter);

  return action.run(request);
}
