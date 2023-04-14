import React from "react";
import { Navbar } from "../component/navbar.js";
import { useAppContext } from "../store/context.js";
import { Link } from "react-router-dom";
import TargetaContacto from "../component/TargetaContacto.jsx";
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

<TargetaContacto/>
 




</div>
</div>
)
}


export default Contact;