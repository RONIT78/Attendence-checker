const moongoose = require("mongoose")

const userSchema = new moongoose.Schema({
    fname: {
        type: String
    },
    department: {
        type: String
    },
    semestr: {
        type: String
    }
})

const User = moongoose.model("Attendence", userSchema);

module.exports = User;