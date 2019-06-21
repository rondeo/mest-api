const faker = require('faker');

const generateRequest = () => {
  return {
    requestId: faker.random.number(),
    title: faker.random.word(),
    url: faker.internet.url(),
    options: {
      type: faker.random.number(),
      fromName: faker.random.word(),
      toName: faker.random.word(),
    },
    settings: {
      headers: {},
      queryString: {},
      queryParams: {},
      body: {},
    },
  };
};

const validFlow = {
  title: faker.random.word(),
  requestAmount: faker.random.number(),
  requests: [
    generateRequest(),
    generateRequest(),
    generateRequest(),
  ],
};

module.exports = {
  validFlow,
};
