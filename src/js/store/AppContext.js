import React from "react";

import { createContext, useContext, useState, useEffect } from "react";

import {CREATE_AGENDA, POST_ContactList, GET_All_ContactList, DELETE_All_ContactList, DELETE_ContactList, UPDATE_ContactList} from "./services.js"


const AppContext = createContext();


export const AppContextProvider = ({children}) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [nombreAgenda, setNombreAgenda] = useState("mery_super_agenda");
    const [contactList, setContactList] = useState([]);


    useEffect(() => {GET_All_ContactList(setContactList, nombreAgenda)}, [])

    const Reset = () => {

        setName("");
        setEmail("");
        setPhone("");
        setAddress("");

    }

    const handleHomeAndReset = (e) => {

        e.preventDefault();

        Reset();

    }







    

	const handleClickSave = (e, name, email, phone, address) => {
        e.preventDefault();

        const newObj = {
            full_name: name,
            email: email,
            agenda_slug: nombreAgenda,
            address: address,
            phone: phone,
        }

        POST_ContactList(newObj)
            .then(() => {GET_All_ContactList(setContactList, nombreAgenda); Reset();});

	}

    const handleClickDeleteContact = (itemID) => {

        DELETE_ContactList(itemID)
            .then(() => GET_All_ContactList(setContactList, nombreAgenda));

	}

    const handleClickUpdate = (e, contact, id) => {
        e.preventDefault();

        const newObj2 = {
            full_name: contact.name,
            email: contact.email,
            agenda_slug: nombreAgenda,
            address: contact.address,
            phone: contact.phone,
        }

        UPDATE_ContactList(newObj2, id)
            .then(() => {GET_All_ContactList(setContactList, nombreAgenda); Reset();});

	}

    const handleBORRARAgenda = () => {

        DELETE_All_ContactList(nombreAgenda)
            .then(() => setContactList(false))

    }

    const handleCREARAgenda = (e, nuevaAgenda) => {
        e.preventDefault();

        setNombreAgenda(nuevaAgenda)

        // OBJETO PARA CREAR NUEVAS AGENDAS
        const objCrearAgenda = {
            full_name: "Mery Valero",
            email: "meryvl@gmail.com",
            agenda_slug: nombreAgenda,  // NOMBRE NUEVA AGENDA
            address:"GR ES",
            phone:"#34-666666666"
        }

        CREATE_AGENDA(objCrearAgenda)
            .then(() => GET_All_ContactList(setContactList, nombreAgenda));

    }



    const store = {
        name,
        email,
        phone,
        address,
        contactList,
        nombreAgenda,
    };
    
    const actions = {
        setName,
        setEmail,
        setPhone,
        setAddress,
        setNombreAgenda,
        handleClickSave,
        handleClickDeleteContact,
        handleBORRARAgenda,
        handleClickUpdate,
        handleCREARAgenda,
        handleHomeAndReset,
    };

    return (
        <AppContext.Provider value={{store, actions}}>
            {children}
        </AppContext.Provider>
    );
}

const useAppContext = () => useContext(AppContext);

export default useAppContext;


