import React from "react";

import { Link } from "react-router-dom";

import Modal from "./Modal.jsx";


const TarjetaContacto = (props) => {


  return (
    <li className="list-group-item">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img 
              src="data:image/jpeg;base64,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"
              className=" img-fluid fotoContact"
              alt="..."
            />
          </div>
          <div className="col-md-5 m-3">
            <div className="card-body">
              <h5 className="card-title fs-3">{props.item.full_name}</h5>
              <p className="card-text fs-4">
                <i className="fa-solid fa-location-dot"></i>
                {props.item.address}
              </p>
              <p className="card-text fs-5">
                <i className="fa-solid fa-phone"></i>
                {props.item.phone}
              </p>
              <p className="card-text fs-6">
                <i className="fa-solid fa-envelope"></i>
                {props.item.email}
              </p>
            </div>
          </div>
          <div className="col-md-1">
            <p className="card-icon">
              <Link to={"/update/" + props.id}>
                <i className="fa-solid fa-pencil"></i>
              </Link>
            </p>
          </div>
          <div className="col-md-1">
            <div className="card-icon">
              <i className="fa-solid fa-trash-can" data-bs-toggle="modal" data-bs-target={`#modal-${props.id}`}></i>
              
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default TarjetaContacto;
