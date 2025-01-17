const express = require('express');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/users.router');
const app = express();

app.use(bodyParser.json());
app.use('/users', usersRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
    