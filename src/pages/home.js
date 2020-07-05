import React, { Fragment, useEffect } from "react";
import { TaskCard, TestCard } from "components";

import { TaskService } from "services";
import { toast } from "react-toastify";

const toastTime = {
  autoClose: 2500,
};

const Home = ({ history }) => {
  const [dailyTask, setDailyTask] = React.useState([]);
  useEffect(() => {
    getDailyTasks();
    async function getDailyTasks() {
      const { data, status } = await TaskService.getAllDailyTask();
      if (status === 200) {
        setDailyTask(data);
      }
    }
  }, []);

  const handleUpdateTask = (id) => {
    history.push(`/task/${id}`);
  };

  const handleDeleteTask = async (id) => {
    try {
      const dailyTaskData = [...dailyTask];
      const updateDailyTasks = dailyTaskData.filter((task) => task._id !== id);
      setDailyTask(updateDailyTasks);
      const { status, data } = await TaskService.deleteTask(id);
      if (status === 200) {
        toast.error(data, toastTime);
      }
    } catch (ex) {
      toast.error(ex.response.data, toastTime);
      setDailyTask(dailyTask);
    }
  };

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          {dailyTask.map((task) => (
            <div className="col-md-4 mt-4">
              <TaskCard
                task={task}
                onUpdateTask={handleUpdateTask}
                onDeleteTask={handleDeleteTask}
              />
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
