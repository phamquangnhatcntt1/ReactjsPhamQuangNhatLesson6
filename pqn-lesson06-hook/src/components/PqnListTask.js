import React from 'react'

export default function PqnListTask({renderPqnListTasks}) {
    console.log(renderPqnListTasks);
    let pqnElemenTask = renderPqnListTasks.map((task,index)=>{
  return (
    <>
        <tr key={index}>
            <td>{index+1}</td>
            <td>{task.pqn_taskId}</td>
            <td>{task.pqn_taskName}</td>
            <td>{task.pqn_level}</td>
            <td>
                <button className='btn btn-success'>Edit</button>
                <button className='btn btn-danger'>Remove</button>
            </td>
        </tr>
    </>
     )
     })
return (
    <div>
        <h2>Danh Sách Các Nhiệm Vụ</h2>
      <table className='table table-bordered'>
        <thead>
            <tr>
            <th>STT</th>
            <th>Task id</th>
            <th>Task name</th>
            <th>Task level</th>
            <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {pqnElemenTask}
        </tbody>
      </table>
    </div>
  )
}
