const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require("./router/routes");
const cors = require('cors');

const app = express();
const PORT =  5001;
// const MONGODB_URI = 'mongodb://localhost:27017/task-manager';
const MONGODB_URI = 'mongodb://0.0.0.0:27017/task-manager';
// mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    const app = express();
    app.use(express.json());
    app.use(bodyParser.json());
    app.use(cors());
    app.use("/api", routes);    
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  });


