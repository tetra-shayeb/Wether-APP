const mongoose = require('mongoose');
const Scehema = mongoose.Scehema;

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  };

  const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
  });


  const User = mongoose.model('user33', userSchema);
  module.exports = User;