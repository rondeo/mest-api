const faker = require('faker');

const generateRequest = () => {
  return {
    requestId: faker.random.number(),
    title: faker.random.word(),
    url: faker.internet.url(),
    settings: {
      type: faker.random.number(),
      fromName: faker.random.word(),
      toName: faker.random.word(),
    },
    options: {
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
