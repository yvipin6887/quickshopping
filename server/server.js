const express = require('express');
const bodyParser = require('body-parser')
const app = express();
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))
const PORT = process.env.PORT || 3000;
const db  = require('./models/db');
const userRouter = require('./routes/user');
const storeRouter = require('./routes/store');
const categoryRouter  = require('./routes/category');

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})

app.use('/api/user', userRouter);
app.use('/api/store', storeRouter);
app.use('/api/category', categoryRouter);