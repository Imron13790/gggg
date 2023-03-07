import "./App.css";
import { useState } from "react";
import Axios from "axios";


function App() {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");

 
  const [userList, setUserList] = useState([]);

  const getUser = () => {
    Axios.get("http://localhost:3333/User").then((response) => {
      setUserList(response.data);
    });
  };

  const addUser = () => {
    Axios.post("http://localhost:3333/create", {
      fname: fname,
      lname :lname,

      
    }).then(() => {
      setUserList([
        ...userList,
        {
          fname: fname,
          lname :lname,
        },
      ]);
    });
  };

  

 

  return (
    <div className="App container">
      <h1>Employees Infomation</h1>
      <div className="information">
        <form action="">
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              onChange={(event) => {
                setfname(event.target.value)
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age">Age:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter age"
              onChange={(event) => {
                setlname(event.target.value)
              }}
            />
          </div>
         
          <button onClick={addUser} class="btn btn-success">
            Add Employee
          </button>
        </form>
      </div>
      <hr />
      <div className="employees">
        <button class="btn btn-primary" onClick={getUser}>
          Show Employees
        </button>
        <br />
        <br />
        {userList.map((val, key) => {
          return (
            <div className="employee card">
              <div className="card-body text-left">
                <p className="card-text">Name: {val.fname}</p>
                <p className="card-text">gmail: {val.lname}</p>
          \
               
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;