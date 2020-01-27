const server = require('./server');

const port = process.env.PORT || 8000;

server.listen(port, (req, res) => {
    console.log(`SERVER ON PORT ${port}`)
})