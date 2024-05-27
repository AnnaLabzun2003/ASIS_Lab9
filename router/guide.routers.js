const express = require('express');
const router = express.Router();

const guideController = require('../controller/guide.controller.js')

// Маршрут для отримання списку всіх департаментів
router.get('/', guideController.findAll);
router.post('/', guideController.create);
router.get('/:id', guideController.findById);
//router.put('/:id', guideController.update);
router.post('/put/:id', guideController.update);
//router.delete('/:id', guideController.delete);
router.get('/delete/:id', guideController.delete);



module.exports = router;