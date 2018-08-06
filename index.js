const app = require('./app');
const config = require('./config/dataConfig');
const port = config.usePort || process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server starter on port ${port}`));