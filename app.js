const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({
        message: 'Hello DevSecOps! App is running smoothly.',
        status: 'success'
    });
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
