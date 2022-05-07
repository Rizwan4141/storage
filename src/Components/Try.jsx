import axios from "axios";
import React, { useEffect, useState } from "react";

const Try = () => {
  const [data, setData] = useState([]);
  const geteData = async () => {
    const result = await axios.get(
      "https://6cw4vl6ty7.execute-api.ap-northeast-1.amazonaws.com/dev"
    );
    setData(result.data.body.data);
    // console.log("===>",result);
    console.log("===>",result.data.body.data[0]);
    // console.log("===>",result.data.body.data[0].DeviceID);
    // console.log("===>",result.data.body.data[0].CameraType);
    // console.log("===>",result.data.body.data[0].UserID)
    // console.log("===>",setData);
  };
  useEffect(() => {
    geteData();
  }, []);
  return (
    <div>
      <input type="text" /> <br />
      <table border="5">
          <tr>
          <th>DeviceID</th>
          <th>camera type</th>
          <th>UserID</th>
          <th>LastActivityTime</th>
          </tr>
      {data.map((item) => {
        return (
            <tr>
           <td> <h1>{item.DeviceID}</h1></td>  
            <th> <h1>{item.CameraType}</h1></th>
           <td> <h1>{item.UserID}</h1></td>
           <td> <h1>{item.LastActivityTime}</h1></td>
           </tr> 
        );
      })}
      </table>
    </div>
  );
};

export default Try;
