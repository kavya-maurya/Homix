const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();


// ✅ MIDDLEWARE
app.use(cors());
app.use(express.json());



// ✅ MONGODB CONNECT
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log('MongoDB Connected');
})
.catch((error) => {
  console.log(error);
});


// ✅ ROUTES
app.use('/api/devices', require('./routes/deviceRoutes'));


// ✅ SERVER
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});