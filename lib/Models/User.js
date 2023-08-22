const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phoneNumber: String,
    img: String,
    about: String,
    skills: [String],
    experience: [
        {
            title: String,
            company: String,
            duration: String,
            componyLogo: String,
        }
    ],
    education: {
        college: String,
        degree: String,
        duration: String,
        collegeLogo: String,
    }
});

const Userfsd = mongoose.model('Userfsd', userSchema) || mongoose.models.Userfsd;

module.exports = Userfsd;