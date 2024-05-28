import React, { useState } from 'react'

export default function PqnTaskAddOrEdit(pqnOnSubmit) {
    const pqnTaskObj={
         pqn_taskId:0,
         pqn_taskName:"",
         pqn_level:""
    }
    const [pqnTask, setPqnTask] = useState(pqnTaskObj);
    const pqnhandlechange =(pqnEvent)=>{
        let name = pqnEvent.target.name;
        let value = pqnEvent.target.value;
        setPqnTask(prev =>{
            return {
              ... prev,
            [name]:value,}  
        })
        console.log(pqnTask);
    }
    const pqnhandlesubmit = (pqnEvent)=>{
      pqnEvent.peventDefault();
      pqnOnSubmit(pqnTask)
    }
  return (
    <div>
      <h2>Thêm Mới task</h2>
      <form>
        <div>
            <label>Task ID</label>
            <input name='pqn_taskId' value={pqnTask.pqn_taskId} onChange={pqnhandlechange} />
        </div>
        <div>
            <label>Task Name</label>
            <input name='pqn_taskName' values={pqnTask.pqn_taskName} onChange={pqnhandlechange}/>
        </div>
        <div>
            <label>Task level</label>
            <select name='pqn_taskLevel' value={pqnTask.pqn_level}onChange={pqnhandlechange}> 
                <option value={'Small'}>Small</option>
                <option value={'Medium'}>Medium</option>
                <option value={'High'}>High</option>
            </select>
        </div>
        <button onClick={pqnhandlesubmit}>Ghi lại</button>
      </form>
    </div>
  )
}
