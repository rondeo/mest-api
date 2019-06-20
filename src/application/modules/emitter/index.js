const { EventEmitter } = require('events');
const events = require('./events');

const getEmitter = (response) => {
  const emitter = new EventEmitter();
  const eventNames = Object.keys(events.names);

  eventNames.forEach((event) => {
    emitter.on(event, (data) => {
      response.status(events.statusCodes[event]);
      response.json(data);
    });
  });

  return emitter;
};

module.exports = getEmitter;

