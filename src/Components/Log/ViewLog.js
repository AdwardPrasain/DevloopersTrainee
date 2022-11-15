import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react'
import './ViewLog.css'
function ViewLog() {
    
    const [logDatas, setlogDatas] = useState([]);
    const loadlogData = async () =>{
      
        const result = await axios.get("https://tsnpl.com.np/TraineeAPI/api/Log?ClientUserName=9813715932&ClientGUID=456")
        console.log(result);
        setlogDatas(result.data)
      }
      const DeletelogData = async(Id) => {
         
        const result = await axios.delete(`https://tsnpl.com.np/TraineeAPI/api/Log/${Id}`)
        console.log(result);
    
        if(result.data == -1)
        {
          alert("Data Deleted Successfully");
          loadlogData();
        }
      }

      useEffect(()=>{
        loadlogData();
      }, []);
  return (
    <div>
        <div className='logtableHead'>
        <table className='logtable'>
        <thead>
        <tr>
          <th>ID</th>
          <th>Week Number</th>
          <th>Date From</th>
          <th>Date To</th>
          <th>What have I done</th>
          <th>Action</th>   
        </tr>
      </thead>
      <tbody>
      {
                                logDatas.map((data, index) => (
                                <tr key={index}>                            
                                <td>{index+1}</td>
                                <td>{data.WeekNum}</td>
                                <td>{data.DateFrom}</td>
                                <td>{data.DateTo}</td>
                                <td>{data.Done}</td>
                                <td><input type="button" className="btns" id='btnid' value="Edit" /> | <input type="button" className="btns" id='btnid' value="Delete" onClick={() => DeletelogData(data.Id)}/></td>
                                </tr>
                                ))
                            }
      </tbody>
        </table>
       </div>
    </div>
  )
}

export default ViewLog