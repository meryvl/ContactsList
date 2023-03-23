import React from "react";
import { Navbar } from "../component/navbar.js";
import { useAppContext } from "../store/context.js";
import { Link } from "react-router-dom";

const Contact =()=>{
    const {store , actions} = useAppContext();
    const {
        listContacts,
        
        } =store;

        const {
          handleDeleteContact,
            
            } =actions;
    
return(
    <div>
<Navbar/>
<div className="bodyContacts">
<div className="d-flex">
<h1 className="w-25">Contactos</h1>
<div className="ml-auto btn-add">
				<Link to="/addContact">
					<button className="btn btn-primary ">Add contact</button>
				</Link>
			</div>
            </div>
{listContacts.length == 0 ? (
                <p className="fs-4"> You haven't got contacts </p>
            ) : (
    listContacts.map((item, index)=>{
return(
   <div className="m-3 "> 
<div key={index.id} className="contactStyle row">
<img className="fotoContact  col-4" src="https://images.pexels.com/photos/2625122/pexels-photo-2625122.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
<div className="col-5 mt-3">
<p>Nombre : {item.full_name}</p>
<p>Email : {item.email}</p>
<p>Adreess : {item.address}</p>
<p>Phone : {item.phone}</p>
</div>
<span className="me-3 col-3 iconDelete"  onClick={()=> handleDeleteContact(item.full_name)}><i className="fa-solid fa-xmark"></i></span>
</div>
</div>
)}))} 



</div>
</div>
)
}


export default Contact;