const express = require('express');
const router = express.Router();

const landmarkController = require('../controller/landmark.controller.js')

// Маршрут для отримання списку всіх департаментів
router.get('/', landmarkController.findAll);
router.post('/', landmarkController.create);
router.get('/:id', landmarkController.findById);
//router.put('/:id', landmarkController.update);
router.post('/put/:id', landmarkController.update);
//router.delete('/:id', landmarkController.delete);
router.get('/delete/:id', landmarkController.delete);

module.exports = router;