
// Server
require('dotenv').config();  // always put this at the top of your file.
const server = require('./api/app'); // name this app next time.
const PORT = process.env.PORT || 3000;



server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});