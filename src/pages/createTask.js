import React, { useEffect, useState } from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import { isUndefined } from "lodash";

import { taskSchema } from "utils/schema";
import { TaskService } from "services";

const toastTime = {
  autoClose: 2500,
};

const CreateTask = ({ match }) => {
  const [name, setname] = useState("");
  const [error, setError] = useState({});
  const [taskID, setTaskID] = useState("");

  useEffect(() => {
    getSingleDailyTask();
    async function getSingleDailyTask() {
      const {
        params: { id },
      } = match;

      setTaskID(id);

      const {
        data: { name },
        status,
      } = await TaskService.getSingleTask(id);
      if (status === 200) {
        setname(name);
      }
    }
  }, []);

  const validateTask = (objCategory) => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(objCategory, taskSchema, options);

    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  function validateProperty({ key, value }) {
    const obj = { [key]: value };

    const schema = { [key]: taskSchema[key] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  }

  const handleChanage = ({ target: { name: key, value } }) => {
    const errorMessage = validateProperty({ key, value });
    let tempError = { ...error };
    if (errorMessage) {
      tempError[key] = errorMessage;
    } else {
      delete tempError[key];
    }
    setError(tempError);
    eval("set" + key + "(value)");
  };

  const handleSubmitTask = async (e) => {
    const taskObj = { name };
    const error = await validateTask(taskObj);

    setError(error ? { ...error } : {});

    if (error) {
      return;
    }

    try {
      let response = {};

      if (isUndefined(taskID)) {
        response = await TaskService.postTask(taskObj);
      } else {
        response = await TaskService.putTask({ ...taskObj, _id: taskID });
      }

      const { status, data } = response;

      if (status === 200) {
        setname("");
        toast.info(data, toastTime);
      }
    } catch (ex) {
      toast.error(ex.response.data, toastTime);
    }
  };

  return (
    <div className="container">
      <div className="row h-100">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="container">
            <div className="form-group">
              <label htmlFor="dailyTask">Daily Task</label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="dailyTask"
                placeholder="Daily Task"
                value={name}
                onChange={handleChanage}
              />
              {error.name && (
                <div className="alert alert-danger mt-2" role="alert">
                  {error.name}
                </div>
              )}
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-info"
                onClick={handleSubmitTask}
                style={{ width: "100%" }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default CreateTask;
