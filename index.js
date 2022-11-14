const express = require('express');
const dotenv = require('dotenv')
dotenv.config();
require('./config/database')
const app = express();

app.use(express.json())
// routes
const hotelRoutes = require('./routes/hotels')
app.use('/api/v1/hotels', hotelRoutes)








app.listen(4000, () => {
    console.log(`your app is running`)
})