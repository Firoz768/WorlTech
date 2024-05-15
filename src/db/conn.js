const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/myDB", {
    // "useNewUrlParser": true,
    // "useCreateIndex": true,
    // "useUnifiedToplogy": true
}).then(() => {
    console.log("Connection successful");
}).catch((error) => {
    console.log(error);
})