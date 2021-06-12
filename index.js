const express = require("express");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose
    .connect('mongodb+srv://prdpifs:Pradmongo00@mysite.92k5n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("db connected succesfully");
    })
        .catch(err => {
        console.log("Error connecting to DB", err);
    });

const app = express();
const port = 4040;
app.use(express.json());
app.listen(port, () => {
  console.log("server started");
});
