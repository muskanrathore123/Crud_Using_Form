import React, { useState } from "react";

function AddOrUpdate({
  addTodo,
  updateTodo,
  active,
  setActive,
  name,
  setName,
  email,
  setEmail,
}) {
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!name) {
      newErrors.name = "Name is required";
    }
    if (!email) {
      newErrors.email = "Email is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      if (active !== null) {
        updateTodo(active, { id: active, name, email, completed: false });
        setActive(null);
      } else {
        addTodo({ id: Date.now(), name, email, completed: false });
      }
      setName("");
      setEmail("");
    }
  };

  return (
    <div className="grid place-items-center m-auto">
      <form onSubmit={handleSubmit} className="mt-32">
        Name{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
          className="w-40 border-2 border-black ml-3"
        />
        {errors.name && <div className=" text-red-600">{errors.name}</div>}
        Email{" "}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          className="w-40 border-2 border-black ml-3"
        />
        {errors.email && <div className=" text-red-600">{errors.email}</div>}
        <button>{active !== null ? "Update" : "Add"}</button>
      </form>
    </div>
  );
}

export default AddOrUpdate;
