const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const taskSchema = new Schema ({

    title: String,
    dueDate: Date,
    notes: String,
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
      // required: true
    },
    checkedOut: Boolean,
    jobsDone: Boolean
})


module.exports = mongoose.model("Task", taskSchema);
