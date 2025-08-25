import Task from "../models/taskModel.js";
import { ObjectId } from "mongodb";

const addTask = async (req, res) => {
  const userId = req.userId;
  const { title, description, category, priority, dueDate } = req.body;
  try {
    if (title === "" || description === "" || userId === "") {
      return res.status(200).json({
        success: false,
        message: "Provided Wrong information",
      });
    }

    const newTask = new Task({
      userId: userId,
      title: title,
      description: description,
      category: category,
      priority: priority,
      dueDate: dueDate,
    });

    if (newTask) {
      await newTask.save();
      res.status(200).json({
        success: true,
        newTask,
      });
    } else {
      res.status(200).json({
        success: false,
        message: "Invalid task data",
      });
    }
  } catch (error) {
    console.log("Error in addTask controller", error.message);
    res.status(500).json({
      error: "Internal server error",
    });
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  const userId = req.userId;
  try {
    if (!id || !userId) {
      return res.status(200).json({
        success: false,
        message: "Invalid data",
      });
    }

    const task = await Task.findOne({ _id: id });

    if (task) {
      if (task.userId.toString() === userId) {
        const deleteTask = await Task.findByIdAndDelete(id);

        if (deleteTask) {
          return res.status(200).json({
            success: true,
            message: "Deleted Successfully!",
          });
        }
      } else {
        res.status(200).json({
          success: false,
          error: "Unauthorized to delete",
        });
      }
    } else {
    }
  } catch (error) {
    console.log("Error in deleteTask controller", error.message);
    res.status(500).json({
      error: "Internal server error",
    });
  }
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const userId = req.userId;
  const { title, description, priority, category, dueDate, status } = req.body;
  try {
    if (
      !id ||
      !userId ||
      !title ||
      !description ||
      !priority ||
      !category ||
      !dueDate
    ) {
      return res.status(200).json({
        success: false,
        message: "Invalid data",
      });
    }

    const taskData = {
      title,
      description,
      priority,
      category,
      dueDate,
      status,
    };
    const task = await Task.findOne({ _id: id });

    if (task) {
      if (task.userId.toString() === userId) {
        const updateTask = await Task.findByIdAndUpdate(id, taskData, {
          new: true,
        });

        if (updateTask) {
          return res.status(200).json({
            success: true,
            updateTask,
          });
        }
      } else {
        res.status(200).json({
          error: "Unauthorized to update",
        });
      }
    } else {
    }
  } catch (error) {
    console.log("Error in updateTask controller", error.message);
    res.status(500).json({
      error: "Internal server error",
    });
  }
};

const allTask = async (req, res) => {
  const userId = req.userId;

  try {
    if (userId === "") {
      return res.status(200).json({
        success: false,
        message: "Invalid userId",
      });
    }

    const taskList = await Task.find({ userId: userId });

    if (taskList) {
      return res.status(200).json({
        success: true,
        taskList: taskList,
      });
    } else {
      res.status(200).json({
        error: "Invalid data",
      });
    }
  } catch (error) {
    console.log("Error in allTask controller", error.message);
    res.status(500).json({
      error: "Internal server error",
    });
  }
};

const taskStats = async (req, res) => {
  const userId = req.userId;

  try {
    const stats = await Task.aggregate([
      { $match: { userId: new ObjectId(userId) } },
      { $group: { _id: "$status", count: { $sum: 1 } } },
    ]);

    if (stats) {
      const result = { pending: 0, completed: 0 };

      stats.forEach(({ _id, count }) => {
        if (_id === true) result.completed = count;
        else result.pending = count;
      });

      res.status(200).json({
        success: true,
        result,
      });
    } else {
      res.status(200).json({
        success: false,
        message: "No task statistics found",
      });
    }
  } catch (error) {
    console.log("Error in taskStats controller", error.message);
    res.status(500).json({
      error: "Internal server error",
    });
  }
};

export { addTask, deleteTask, updateTask, allTask, taskStats };
