const express = require('express');
const StoreController = require('../controller/StoreController');
const authenticate = require('../middleware/authenticate');
const router = express.Router();

router.get('/', StoreController.index);
router.get('/:id', StoreController.getAction);
router.post('/create', StoreController.createAction);
router.put('/update', StoreController.updateAction);

module.exports =  router;
