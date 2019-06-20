const app = require('./application');

app.start()
  .then(() => {
    app.listen(app.port, () => {
      console.log(`App is listening on port ${app.port}`);
    });
  }).catch(error => console.error('App failed to start. Exception: ', error));