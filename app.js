const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const GITHUB_TOKEN = "ghp_1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r";

app.get('/', (req, res) => {
    res.json({
        message: 'Hello DevSecOps! App is running smoothly.',
        status: 'success'
    });
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
