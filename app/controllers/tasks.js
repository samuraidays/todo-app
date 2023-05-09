const getAllTasks = (req, res) => {
    res.send('タスクをすべて取得しました')
}

const createTask = (req, res) => {
    res.send('タスクを新規作成しました')
}

const getSingleTask = (req, res) => {
    res.send('タスクを取得しました')
}

const updateTask = (req, res) => {
    res.send('タスクを取得しました')
}

const deleteTask = (req, res) => {
    res.send('タスクを取得しました')
}

module.exports = {
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask
};