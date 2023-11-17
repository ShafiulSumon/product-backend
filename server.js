const ConnectDB = require('./config/db');
const app = require('./app');
const dotenv = require('dotenv').config();

ConnectDB();

// const PORT = process.env.PORT || 3000;
const PORT = 3000;


app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`);
});