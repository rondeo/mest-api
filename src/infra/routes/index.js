// import swaggerUi from 'swagger-ui-express';
// import swaggerDocument from '../../docs';
const testRoutes = require('./test');

const buildRoutes = async app => new Promise((resolve) => {
  app.use('/v1/test', testRoutes());
  // app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  resolve();
});

module.exports = buildRoutes;