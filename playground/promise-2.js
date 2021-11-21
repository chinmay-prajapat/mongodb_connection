require("../src/db/mongoose")
const { ObjectID } = require("bson")
const Task = require("../src/models/task")

Task.findByIdAndDelete({ _id: new ObjectID("6199ab965801d766bd96ad59") })
  .then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })
  })
  .then((task) => {
    console.log(task)
  })
  .catch((e) => {
    console.log(e)
  })
