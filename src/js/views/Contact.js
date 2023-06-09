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

            {listContacts.length == 0 ? (
                <p className="fs-4"> You haven't got contacts </p>
            ) : (
    listContacts.map((item, index)=>{

<TargetaContacto listContacts={listContacts} handleDeleteContact={handleDeleteContact} full_name={item.full_name} email= {item.email}
 adreess= {item.address} phone= {item.phone}/>

}))} 






 
</div>
</div>
)
}


export default Contact;