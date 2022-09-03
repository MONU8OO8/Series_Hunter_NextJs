const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    phone: {type: String, required: true,},
    desc: {type: String, required: true}
    // title:  String, // String is shorthand for {type: String}
    // author: String,
    // body:   String,
    // // comments: [{ body: String, date: Date }],
    // // date: { type: Date, default: Date.now },
    // hidden: String
    // // meta: {
    // //   votes: Number,
    // //   favs:  Number
    // // }
});
  // }, {timestamps: ture});

mongoose.models = {}
export default mongoose.model("user", userSchema);