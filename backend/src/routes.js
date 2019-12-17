const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');
const UserController = require('./controllers/UserController');



const routes = express.Router();
routes.get('/devimg', UserController.show);
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);



routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);

module.exports = routes;