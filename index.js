const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/chat');
});
app.use('/', express.static(__dirname + '/chat'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))