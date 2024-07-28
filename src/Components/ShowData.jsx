import React from "react";

function ShowData({ data, handleEdit, deleteData, toggleCompleted }) {
  return (
    <div className="grid place-items-center m-auto mt-14">
      <table className="table-fixed border-separate border-spacing-2 border border-slate-400">
        <thead>
          <tr>
            <th className="">Name</th>
            <th className="">Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val) => (   
            <tr key={val.id}>
              <td className={val.completed ? "line-through" : ""}>
                {val.name}
              </td>
              <td className={val.completed ? "line-through" : ""}>
                {val.email}
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={val.completed}
                  onChange={() => toggleCompleted(val.id)}
                />
                {/*  */}
              </td>
              <td>
                <button
                  onClick={() => handleEdit(val)}
                  className=""
                  disabled={val.completed}
                >
                 Edit
                </button>
              </td>
              <td>
                <button onClick={() => deleteData(val.id)} className="">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShowData;
