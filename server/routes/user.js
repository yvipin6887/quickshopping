const express = require('express');
const UserController = require('../controller/UserController');
const StoreController = require('../controller/StoreController');
const authenticate = require('../middleware/authenticate');
const router = express.Router();

router.post('/login', UserController.login);
router.get('/', authenticate, UserController.index);
router.get('/:id', UserController.getAction);
router.post('/create', UserController.createAction);
router.put('/update', UserController.updateAction);
router.put('/remove', UserController.destroyAction);

router.post('/create', StoreController.createAction);

module.exports =  router;
