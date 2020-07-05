import React from "react";

import "css/menuCard.css";

const Background =
  "https://i.pinimg.com/originals/da/79/ef/da79ef416fb150d86d1a4c3f20055215.jpg";

const MenuCard = ({ task, onUpdateTask, onDeleteTask }) => {
  return (
    <div className="card gradient-card">
      <div
        className="card-image"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="text-white d-flex h-100 mask blue-gradient-rgba">
          <div className="first-content align-self-center p-3">
            <h3 className="card-title">{task.name}</h3>
          </div>
        </div>
      </div>

      <div class="third-content ml-auto mr-4 mb-2 mt-2">
        <button
          className="btn btn-info btn-sm mr-2"
          onClick={() => onUpdateTask(task._id)}
        >
          Update
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => onDeleteTask(task._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
