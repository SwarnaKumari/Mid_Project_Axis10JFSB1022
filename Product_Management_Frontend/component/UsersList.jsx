import React, { useEffect, useState } from "react";
import productService from "../service/productservice";
import {Link} from 'react-router-dom'

const UsersList = () => {
  const [userList, setUserList] = useState([]);
  const [msg] = useState("");
  useEffect(() => {
    init();
  }, []);

  const init = () => {
    productService
      .getAllUser()
      .then((res) => {
        setUserList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  

  return (
    <>
      <div className="container mt-3">
      <Link to="/home">Home</Link>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header fs-3 text-center">
                All Users List
                {msg && <p className="fs-4 text-center text-success">{msg}</p>}
              </div>

              <div className="card-body">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Sl No</th>
                      <th scope="col">User Name</th>
                      <th scope="col">Password</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userList.map((p, num) => (
                      <tr>
                        <td>{num + 1}</td>
                        <td>{p.email}</td>
                        <td>{p.password}</td>
                        
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersList;