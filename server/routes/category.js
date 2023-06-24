const express = require('express');
const CategoryController = require('../controller/CategoryController');
const router = express.Router()

router.post('/create', CategoryController.createAction);

module.exports =  router;