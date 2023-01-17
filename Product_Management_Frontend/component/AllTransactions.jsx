import React, { useEffect, useState } from "react";
import productService from "../service/productservice";

const AllTransactions = () => {
  const [allTransactions, setAllTransactions] = useState([]);
  const [msg] = useState("");
  useEffect(() => {
    init();
  }, []);

  const init = () => {
    productService
      .findAllTransactions()
      .then((res) => {
        setAllTransactions(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header fs-3 text-center">
                All Transactions List
                {msg && <p className="fs-4 text-center text-success">{msg}</p>}
              </div>

              <div className="card-body">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Sl No</th>
                      <th scope="col">Purchase Date and Transaction_ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allTransactions.map((p, num) => (
                      <tr>
                        <td>{num + 1}</td>
                        <td>{p.puchase_date}</td>
                       
                        
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

export default AllTransactions;