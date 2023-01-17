import React, { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
import productService from "../service/productservice";
import userService from "../service/userservice";
import UserNavbar from "./UserNavbar";

const UserHome = () => {
    const [productList, setProductList] = useState([]);
    const [msg] = useState("");
    useEffect(() => {
      init();
    }, []);

    const init = () => {
        productService
          .getAllProducts()
          .then((res) => {
            setProductList(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
    };

    return (
        <>
         <UserNavbar/>
          <div className="container mt-3">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header fs-3 text-center">
                    All Product List
                    {msg && <p className="fs-4 text-center text-success">{msg}</p>}
                  </div>
    
                  <div className="card-body">
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">Sl No</th>
                          <th scope="col">Product Name</th>
                          <th scope="col">Description</th>
                          <th scope="col">Price</th>
                          <th scope="col">Status</th>
                          
                        </tr>
                      </thead>
                      <tbody>
                        {productList.map((p, num) => (
                          <tr>
                            <td>{num + 1}</td>
                            <td>{p.productName}</td>
                            <td>{p.description}</td>
                            <td>{p.price}</td>
                            <td>{p.status}</td>
                            
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
}
export default UserHome;