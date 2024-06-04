import React, { useState, useEffect } from "react";

export default function PqnTaskAddOrEdit(props) {
  // Task object
  const pqnTaskObj = {
    pqn_taskId: 0,
    pqn_taskName: "",
    pqn_level: "",
  };

  const [pqnTask, setpqnTask] = useState(pqnTaskObj);

  // Handle change function
  const pqnHandleChange = (pqnEvent) => {
    const name = pqnEvent.target.name;
    const value = pqnEvent.target.value;

    setpqnTask((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const pqnHandleSubmit = (pqnEvent) => {
    // Perform actions such as submitting form data
    pqnEvent.preventDefault();
    props.pqnOnSubmit(pqnTask);
  };

  useEffect(() => {
    console.log(pqnTask);
  }, [pqnTask]);

  return (
    <div>
      <h2>Thêm mới task</h2>

      <form>
        <div>
          <label>Task ID</label>
          <input
            name="pqn_taskId"
            value={pqnTask.pqn_taskId}
            onChange={pqnHandleChange}
          />
        </div>
        <div>
          <label>Task Name</label>
          <input
            name="pqn_taskName"
            value={pqnTask.pqn_taskName}
            onChange={pqnHandleChange}
          />
        </div>
        <div>
          <label>Task Level</label>
          <select
            name="pqn_level"
            value={pqnTask.pqn_level}
            onChange={pqnHandleChange}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <button onClick={pqnHandleSubmit}>Ghi lại</button>
      </form>
    </div>
  );
}
