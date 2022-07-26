const express = require('express')

const app = express();

app.get('/test', (req, res) => {
    res.send({status: 'hello world'})
})

const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
})