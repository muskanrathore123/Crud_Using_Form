import React, { useState } from 'react'
import AddOrUpdate from './AddOrUpdate';
import ShowData from './ShowData';

function Crud() {
    let[id,setId]=useState("");
    let[name,setName]=useState("");
    let[email,setEmail]=useState("");
    let[data,setData]=useState([]);
    let[active,setActive]=useState(null)

    const addTodo=(obj)=>{
     setData((prev)=>[...prev,obj]);
    }

    const updateTodo = (id,obj) => {
        setData((prev)=>(
            prev.map((prevData)=>prevData.id===id? obj:prevData)
        ))
    };

    const deleteData=(id)=>{
        setData((prev)=>(
            prev.filter((val)=>val.id!==id)
        ))
    }
    const handleEdit=(val)=>{
        setActive(val.id);
        setName(val.name);
        setEmail(val.email);
    }

     const toggleCompleted = (id) => {
        // console.log(id);
      setData((prev) =>
        prev.map((prevData) =>
          prevData.id === id
            ? { ...prevData, completed: !prevData.completed }
            : prevData
        )
      )
     };
  return (
    <>
      <AddOrUpdate
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        data={data}
        setData={setData}
        active={active}
        setActive={setActive}
        updateTodo={updateTodo}
        addTodo={addTodo}
      />
      <ShowData
        data={data}
        handleEdit={handleEdit}
        deleteData={deleteData}
        toggleCompleted={toggleCompleted}
      />
    </>
  );
}

export default Crud
