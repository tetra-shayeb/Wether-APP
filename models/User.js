const mongoose = require('mongoose');
const Scehema = mongoose.Scehema;

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
};

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    phone: { type: Number, required: true },
    password: { type: String, required: true }
});


const User = mongoose.model('user33', userSchema);
module.exports = User;