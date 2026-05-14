const express = require('express');

const router = express.Router();

const {
  createDevice,
  getDevices,
  getDevice,
  updateDevice,
  deleteDevice,
} = require('../controllers/deviceController');


// ✅ CREATE
router.post('/', createDevice);


// ✅ GET ALL
router.get('/', getDevices);


// ✅ GET SINGLE
router.get('/:id', getDevice);


// ✅ UPDATE
router.put('/:id', updateDevice);


// ✅ DELETE
router.delete('/:id', deleteDevice);

module.exports = router;