const mongoose = require("mongoose");
try {
  mongoose.connect("mongodb+srv://prabhumohan344:mohan7358@cluster0.v35wc99.mongodb.net/power?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}
