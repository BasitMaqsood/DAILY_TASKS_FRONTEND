import http from "./httpService";

const apiEndpoint = "/task";

export function getAllDailyTask() {
  try {
    return http.get(`${apiEndpoint}`, {
      headers: { token: localStorage.getItem("x-auth-token") },
    });
  } catch (ex) {
    return ex;
  }
}

export function getSingleTask(taskId) {
  try {
    return http.get(`${apiEndpoint}/${taskId}`, {
      headers: { token: localStorage.getItem("x-auth-token") },
    });
  } catch (ex) {
    return ex;
  }
}

export function postTask(objTask) {
  return http.post(`${apiEndpoint}`, objTask, {
    headers: { token: localStorage.getItem("x-auth-token") },
  });
}

export function putTask(objTask) {
  console.log("objTask in service-----", objTask);
  try {
    const body = { ...objTask };
    delete body._id;
    return http.put(`${apiEndpoint}/${objTask._id}`, body, {
      headers: { token: localStorage.getItem("x-auth-token") },
    });
  } catch (ex) {
    return ex.response.data;
  }
}

export function deleteTask(categoryId) {
  try {
    return http.delete(`${apiEndpoint}/${categoryId}`, {
      headers: { token: localStorage.getItem("x-auth-token") },
    });
  } catch (ex) {
    if (ex.response && ex.response.status === 400)
      return "This Task has already been deleted";
  }
}

export default {
  getAllDailyTask,
  getSingleTask,
  postTask,
  putTask,
  deleteTask,
};
