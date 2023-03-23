import React from "react";
import { useState } from "react";
import { useAppContext } from "../store/context.js";
import { NavLink } from "react-router-dom";
import { Navbar } from "../component/navbar.js";
const AddContact=()=>{
const {store , actions} = useAppContext();
const {
    valueName ,
    valueEmail ,
    valuePhone,
    valueAdreess,
    setValueName,
    setValueEmail,
    setValuePhone,
    setValueAdreess
    
    } =store;


    const { update} = actions
const inputElement = [
{
id:1,
lebel:"Full Name",
onChange:e => setValueName(e.target.value),
inputValue: valueName
},
{
    id:2,
    lebel:"Email", 
    onChange:e => setValueEmail(e.target.value),
    inputValue: valueEmail

},
{
    id:3,
    lebel:"Phone" ,
    onChange: e => setValuePhone(e.target.value),
    inputValue: valuePhone
},
{
    id:3,
    lebel:"Adreess", 
    onChange:e => setValueAdreess(e.target.value),
    inputValue: valueAdreess
}

]


return(
<>
<Navbar />
<div className="formStyle">
<h1 >Add a new contact </h1>

{inputElement.map((item , index)=>{
return(
<>

<div  key={index.id} className="labelInput">
<lebel>{item.lebel}</lebel>
<div>
<input type="text" value={item.inputValue} onChange={item.onChange}></input>
</div>

</div>
</>
)
})

}
{valueName}
<a href="./ListContact.js">or get back</a>
<div>
    <button onClick={()=>update(valueName, valueEmail,valueAdreess,valuePhone)}>sabe</button>
</div>
</div>

</>


)


}
export default AddContact;