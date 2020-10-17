
const mongoose = require('mongoose');
require('dotenv').config();
const db = mongoose.connection;

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  };
// connecting mongoose
mongoose.connect(process.env.DB_URL, options, () => {
    console.log('DB READY TO USE');
  });
  
  // handle error / sucess
  db.on('error', (err) => console.log('ERR:', err.message));
  
  db.on('connected', () => console.log('MONGO CONNECTED'));
  
  db.on('disconnected', () => console.log('MONGO DISCONNECTED'));
  
  
  //const userModel = mongoose.model('user33', userSchema);