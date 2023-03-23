import React, { createContext, useContext, useState, useEffect, useMemo } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    
     const [valueName, setValueName] = useState([])
     const [valueEmail, setValueEmail] = useState([])
     const [valuePhone, setValuePhone] = useState([])
     const [valueAdreess, setValueAdreess] = useState([])
     const [listContacts , setListContacts]=useState([])
   
    
   
      const getAgenda =()=>{
        return(
        fetch("https://assets.breatheco.de/apis/fake/contact/agenda/mery")
        .then((res) => res.json())
        .then((res) =>{
          console.log("Perfect!!",res)
                setListContacts(res)
        })
        .catch(error =>console.log(error, "No fount"))
      )
    }
    useEffect(getAgenda,[])


    const putContact=(newContact)=>{
      console.log(newContact)
      return(
      fetch("https://assets.breatheco.de/apis/fake/contact/{contact_id}",{
              method:'PUT',
              body:JSON.stringify(newContact),
              headers:{
                  "Content-Type": "application/json",
              }
          })
      .then(() =>{
        getAgenda()
              
      })
      .catch(eror =>console.log(eror))
      )}
  


      const update = () => {
        if(valueName !== ""){
          const newContact = {
            full_name: valueName ,
            email: valueEmail,
            agenda_slug: "my_super_agenda",
            address: valueAdreess ,
            phone: valuePhone
          }
          
            setValueName("");
      
        setListContacts([...listContacts, newContact])
     
        }  
              
    };

const handleDeleteContact=(Name)=>{
  const newListFilter = listContacts.filter((item) => item.full_name !== Name);
  setListContacts(newListFilter);

}

    console.log(listContacts);
    const  store ={
       listContacts,
       valueName,
       valueEmail,
       valuePhone,
       valueAdreess,
       setValueName,
       setValueEmail,
       setValuePhone,
       setValueAdreess
      
      }
      const actions={
      
      update,
      handleDeleteContact
      }
      
        return (
          <AppContext.Provider value={{ store, actions }}>
            {children}
          </AppContext.Provider>
        );
      };
      
      export const useAppContext = () => useContext(AppContext);
      
      
      export default AppContextProvider;
      