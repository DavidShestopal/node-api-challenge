const express = require('express');

const projectRoutes = require('./routes/projectsRoutes');
const actionRoutes = require('./routes/actionsRoutes');

const server = express();
server.use(logger);

server.use('/api/projects', projectRoutes);
server.use('/api/actions', actionRoutes);

server.get('/', (req, res) => {
  res.send(`<h2>Server running the scene with the homies!</h2>`);
});

//custom middleware

function logger(req, res, next) {
  console.log(`${req.method} Request to ${req.originalUrl} at ${Date.now()}`);

  next();
}

module.exports = server;
