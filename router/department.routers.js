const express = require('express');
const router = express.Router();

const departmentController = require('../controller/department.controller')

// Маршрут для отримання списку всіх департаментів
router.get('/', departmentController.findAll);
router.post('/', departmentController.create);
router.get('/:id', departmentController.findById);
//router.put('/:id', departmentController.update);
router.post('/put/:id', departmentController.update);
//router.delete('/:id', departmentController.delete);
router.get('/delete/:id', departmentController.delete);


module.exports = router;
