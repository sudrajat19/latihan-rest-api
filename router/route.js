const express = require('express');
const app = express();
const port = 3000; // Port yang akan digunakan

// Middleware untuk meng-handle body request JSON
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports('./route.js');