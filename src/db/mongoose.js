const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    
})
const User = mongoose.model('User', {
    name: {
      type:String 
    },
    age: {
     type:Number   
    }
})
const Tasks = mongoose.model('Tasks', {
    description: {
        type:String
    },
    completed: {
        type:Boolean
    }
})
const task = new Tasks({
    description: 'coding',
    completed:false
})
task.save().then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})
// const me = new User({
//     name: 'Chinmay',
//     age:27
// })
// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!',error)
// })