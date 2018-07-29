const express = require('express');
const controller = require('../contrillers/position')
const router = express.Router();

router.get('/:category', controller.getByCategotyId);
router.post('/', controller.create);
router.patch('/:id', controller.update);
router.delete('/:id', controller.remove);

module.exports = router;