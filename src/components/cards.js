import React from "react";

const TaskCard = () => {
  return (
    <div className="card gradient-card">
      <div className="card-body pb-3">
        <h4 className="card-title font-weight-bold">Warsaw</h4>
        <p className="card-text">Mon, 12:30 PM, Mostly Sunny</p>
        <div className="d-flex justify-content-between">
          <p className="display-1 degree">23</p>
          <i className="fas fa-sun-o fa-5x pt-3 amber-text"></i>
        </div>
        <div className="d-flex justify-content-between mb-4">
          <p>
            <i className="fas fa-tint fa-lg text-info pr-2"></i>3% Precipitation
          </p>
          <p>
            <i className="fas fa-leaf fa-lg grey-text pr-2"></i>21 km/h Winds
          </p>
        </div>
        <div className="progress md-progress">
          <div
            className="progress-bar black"
            role="progressbar"
            style={{ width: "40%" }}
            aria-valuenow="40"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <ul className="list-unstyled d-flex justify-content-between font-small text-muted mb-4">
          <li className="pl-4">8AM</li>
          <li>11AM</li>
          <li>2PM</li>
          <li>5PM</li>
          <li className="pr-4">8PM</li>
        </ul>
        <div className="collapse-content">
          <div className="collapse" id="collapseExample">
            <table className="table table-borderless table-sm mb-0">
              <tbody>
                <tr>
                  <td className="font-weight-normal align-middle">Tuesday</td>
                  <td className="float-right font-weight-normal">
                    <p className="mb-1">
                      24&deg;<span className="text-muted">/12&deg;</span>
                    </p>
                  </td>
                  <td className="float-right mr-3">
                    <i className="fas fa-sun fa-lg amber-text"></i>
                  </td>
                </tr>
                <tr>
                  <td className="font-weight-normal align-middle">Wednesday</td>
                  <td className="float-right font-weight-normal">
                    <p className="mb-1">
                      19&deg;<span className="text-muted">/10&deg;</span>
                    </p>
                  </td>
                  <td className="float-right mr-3">
                    <i className="fas fa-cloud-sun-rain fa-lg text-info"></i>
                  </td>
                </tr>
                <tr>
                  <td className="font-weight-normal align-middle">Thursday</td>
                  <td className="float-right font-weight-normal">
                    <p className="mb-1">
                      23&deg;<span className="text-muted">/15&deg;</span>
                    </p>
                  </td>
                  <td className="float-right mr-3">
                    <i className="fas fa-sun fa-lg amber-text"></i>
                  </td>
                </tr>
                <tr>
                  <td className="font-weight-normal align-middle">Friday</td>
                  <td className="float-right font-weight-normal">
                    <p className="mb-1">
                      26&deg;<span className="text-muted">/19&deg;</span>
                    </p>
                  </td>
                  <td className="float-right mr-3">
                    <i className="fas fa-sun fa-lg amber-text"></i>
                  </td>
                </tr>
                <tr>
                  <td className="font-weight-normal align-middle">Saturday</td>
                  <td className="float-right font-weight-normal">
                    <p className="mb-1">
                      20&deg;<span className="text-muted">/16&deg;</span>
                    </p>
                  </td>
                  <td className="float-right mr-3">
                    <i className="fas fa-cloud fa-lg text-info"></i>
                  </td>
                </tr>
                <tr>
                  <td className="font-weight-normal align-middle">Sunday</td>
                  <td className="float-right font-weight-normal">
                    <p className="mb-1">
                      22&deg;<span className="text-muted">/13&deg;</span>
                    </p>
                  </td>
                  <td className="float-right mr-3">
                    <i className="fas fa-cloud-sun fa-lg text-info"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr className="" />
          <a
            className="btn btn-flat red-text p-1 my-1 mr-0 mml-1 deep-purple-text collapsed"
            data-toggle="collapse"
            href="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          ></a>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
