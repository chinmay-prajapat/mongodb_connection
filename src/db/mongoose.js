const mongoose = require('mongoose')
const validator = require('validator')


mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true
    
})
const User = mongoose.model('User', {

    name: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
             throw new Error('Email is invalid')
         }
     }
    },
    password: {
        type: String,
        trim: true,
        required: true,
        minlength: 7,
        maxlength:10,
        validate(value) {
          if(value.includes('password')){
              throw new Error('you should not have password as password')
          }
        }
        },
    
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
             throw new Error('Age must be a positive number')
         }
     }   
    }

})

const me = new User({
    name: "Mike",
    email: 'MYEMAIL@GAMIL.COM',
    password:'password'
    
})

me.save().then(() => {
    console.log(me)
}).catch((err) => {
    console.log(err)
})

// // const Tasks = mongoose.model('Tasks', {
// //     description: {
// //         type:String
// //     },
// //     completed: {
// //         type:Boolean
// //     }
// // })
// // const task = new Tasks({
// //     description: 'coding',
// //     completed:false
// // })
// // task.save().then((res) => {
// //     console.log(res)
// // }).catch((err) => {
// //     console.log(err)
// // })
// // const me = new User({
// //     name: 'Chinmay',
// //     age:27
// // })
// // me.save().then(() => {
// //     console.log(me)
// // }).catch((error) => {
// //     console.log('Error!',error)
// // })
