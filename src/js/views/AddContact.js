import React from "react";
import { useState } from "react";
import { useAppContext } from "../store/AppContext.js";
import { useNavigate, useParams } from "react-router-dom";
import { GET_ContactList } from "../store/services.js";
import { Navbar } from "../component/navbar.js";
const AddContact=()=>{
const {store , actions} = useAppContext();
const navigate = useNavigate();
  
  const params = useParams();

useEffect(() => {
    GET_ContactList(params.theid)
      .then(data => {
        actions.setValueName(data.full_name)
        actions.setValueEmail(data.email)
        actions.setValuePhone(data.phone)
        actions.setValueAddress(data.address)
      })
    },[]) 



 const { update} = actions


return(
<>
<Navbar />
<div className="formStyle">
<h1 >Add a new contact </h1>

  
      <legend className="text-center fs-2 fw-bold">Add a new contact</legend>
      <div className="mb-3">
        <label htmlFor="exampleInputFullName" className="form-label">
          Full Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputFullName"
          placeholder="Full name"
          value={store.name}
          onChange={(e) => actions.setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail"
          placeholder="Enter email"
          value={store.email}
          onChange={(e) => actions.setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPhone" className="form-label">
          Phone
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputPhone"
          placeholder="Enter phone"
          value={store.phone}
          onChange={(e) => actions.setPhone(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputAddress" className="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputAddress"
          placeholder="Enter address"
          value={store.address}
          onChange={(e) => actions.setAddress(e.target.value)}
        />
      </div>

<div>
    <button onClick={()=>update()}>sabe</button>
</div>
</div>

</>


)


}
export default AddContact;