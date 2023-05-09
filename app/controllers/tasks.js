const Task = require("../models/Task");

const getAllTasks = (req, res) => {
    res.send('タスクをすべて取得しました')
}

const createTask = async (req, res) => {
    try {
        const createTask = await Task.create(req.body);
        res.status(200).json(createTask);
    } catch (error) {
        res.status(500).json(error);
    }

};

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