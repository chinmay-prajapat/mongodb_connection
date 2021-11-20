require("../src/db/mongoose")
const User = require("../src/models/user")
// 61979091679832493c9125b0
User.findByIdAndUpdate("61979091679832493c9125b0", { age: 10 })
  .then((user) => {
    console.log(user)
    return User.countDocuments({ age: 0 })
  })
  .then((result) => {
    console.log(result)
  })
  .catch((e) => {
    console.log(e)
  })
