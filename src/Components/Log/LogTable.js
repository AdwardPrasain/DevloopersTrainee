import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function LogTable() {
  const [createDatas, setcreateDatas] = useState([]);

  const loadCreateData = async () => {
    const result = await axios.get(
      "https://tsnpl.com.np/TraineeAPI/api/Log?ClientUserName=9862058913&ClientGUID=123"
    );
    console.log(result);
    setcreateDatas(result.data);
  };

  const DeleteCreateData = async (Id) => {
    const result = await axios.delete(
      `https://tsnpl.com.np/TraineeAPI/api/Log/${Id}`
    );
    console.log(result);

    if (result.data == -1) {
      alert("Data Deleted Successfully");
      loadCreateData();
    }
  };

  useEffect(() => {
    loadCreateData();
  }, []);
  return (
    <div>
      <div className="Table" id="">
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Week Number</th>
              <th>Started Date</th>
              <th>Ended Date</th>
              <th>What have i done</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {createDatas.map((data, index) => (
              <tr key={index}>
                <td>{index + 1}</td>

                <td>{data.WeekNum}</td>
                <td>{data.DateFrom}</td>
                <td>{data.DateTo}</td>
                <td>{data.Done}</td>
                <td>
                  <input
                    type="button"
                    className="btn btn-sm btn-primary"
                    value="Edit"
                  />{" "}
                  <input
                    type="button"
                    className="btn btn-sm btn-danger"
                    value="Delete"
                    onClick={() => DeleteCreateData(data.Id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LogTable;
