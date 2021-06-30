require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('60d86d8cb8ee4c1b4487982b', { age: 1 })
//     .then((user) => {
//         console.log(user)
//         return User.countDocuments({ age: 1 })
//     }).then((result) => {
//         console.log(result)
//     }).catch((e) => {
//         console.log(e)
//     })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments(age)
    return count
}

updateAgeAndCount('60d86d8cb8ee4c1b4487982b', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})