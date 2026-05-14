const Device = require('../models/Device');


// CREATE
const createDevice = async (req, res) => {
  const device = await Device.create(req.body);
  res.json(device);
};


// GET ALL
const getDevices = async (req, res) => {
  const devices = await Device.find();
  res.json(devices);
};


// GET SINGLE
const getDevice = async (req, res) => {
  const device = await Device.findById(req.params.id);
  res.json(device);
};


// UPDATE
const updateDevice = async (req, res) => {
  const device = await Device.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(device);
};


// DELETE
const deleteDevice = async (req, res) => {
  await Device.findByIdAndDelete(req.params.id);

  res.json({
    message: 'Device Deleted',
  });
};


module.exports = {
  createDevice,
  getDevices,
  getDevice,
  updateDevice,
  deleteDevice,
};