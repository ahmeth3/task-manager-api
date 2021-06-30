require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('60d86528fc4ef80db40d36f8')
//     .then((user) => {
//         console.log(user)
//         return Task.countDocuments({ completed: false })
//     }).then((result) => {
//         console.log(result)
//     }).catch((e) => {
//         console.log(e)
//     })

const deleteTaskAndCount = async (id) => {
    const deletedTask = await Task.findByIdAndDelete(id);
    const count = Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('60d86528fc4ef80db40d36f8').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})