import React, { useState } from 'react'

function Confusion() {
    let[user ,setUser]=useState({name:'',email:''});
    let[data,setData]=useState([]);

    const change=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
    }

    const handleSubmit=(e)=>{
       e.preventDefault();
       setData((prev)=>[...prev,user]);
       console.log(data);
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Name<input type='text' name='name' value={user.name} onChange={change}/>
        Email<input type='text' name='email' value={user.email} onChange={change}/>
        <button>Add</button>

      </form>
    </div>
  )
}

export default Confusion
