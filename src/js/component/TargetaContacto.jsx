import React from "react";
import { Navbar } from "../component/navbar.js";
import { useAppContext } from "../store/context.js";
import { Link } from "react-router-dom";

const TargetaContacto=({listContacts, handleDeleteContact,full_name ,email ,adreess, phone})=>{
  
return(
    <div>
    <div className="m-3 "> 
 <div key={index.id} className="contactStyle row">
 <img className="fotoContact  col-4" src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/09/02/16621364623205.jpg"/>
 <div className="col-5 mt-3">
 <p>Nombre : {full_name}</p>
 <p>Email : {email}</p>
 <p>Adreess : {adreess}</p>
 <p>Phone : {phone}</p>
 </div>
 <span className="iconEdit"></span>
 <span className="me-3 col-3 iconDelete"  onClick={()=> handleDeleteContact(full_name)}><i className="fa-solid fa-xmark"></i></span>
 </div>
 </div>
 
</div>
)}


export default TargetaContacto;