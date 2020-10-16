
const mongoose = require('mongoose');
require('dotenv').config();
const db = mongoose.connection;

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


// connecting mongoose
mongoose.connect(process.env.DB_URL, options, () => {
    console.log('DB READY TO USE');
  });
  
  // handle error / sucess
  db.on('error', (err) => console.log('ERR:', err.message));
  
  db.on('connected', () => console.log('MONGO CONNECTED'));
  
  db.on('disconnected', () => console.log('MONGO DISCONNECTED'));
  
  
  //const userModel = mongoose.model('user33', userSchema);
  
  const getAll = async () => {
    const allData = await userModel.find({});
    return allData;
  };
  
  module.exports = {
    getAll,
  };