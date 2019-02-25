const express  = require('express');
const next = require('next');
const routes = require('./src/routes');
const compression = require('compression');

const port =
  parseInt(process.env.PORT || process.env.REACT_APP_PORT, 10) || 3000;
const host = process.env.HOST || process.env.REACT_APP_HOST || '0.0.0.0';
const dev = process.env.NODE_ENV !== 'production';
const dir = process.env.REACT_APP_NEXT_SRC || './src';

const app = next({ dir, dev });
const handle = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();

  server.use(compression());

  // server.get('/workouts/:id', (req, res) => {
  //   return app.render(req, res, '/events/detail', Object.assign(req.params, req.query));
  // });

  server.get('*', (req, res) => handle(req, res));

  server.listen(port, host, err => {
    if (err) throw err;

    console.log(`Express server ready on ${host}:${port}`);
  });
});