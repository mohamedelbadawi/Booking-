const mongoose = require('mongoose');

const connect = mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true }).then(() => {
    console.log(`Database connected successfully`);
}).catch((error) => {
    console.log(`database error ${error}`);
});

module.exports = connect;