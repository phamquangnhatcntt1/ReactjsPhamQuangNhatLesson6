import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import PqnListTask from './components/PqnListTask';
import PqnTaskAddorEdit from './components/PqnTaskAddorEdit';

function App() {
  const pqn_listTasks = [
    { pqn_taskId:2210900115,pqn_taskName:"Phạm Quang Nhất", pqn_level:"Small" },
    { pqn_taskId:1,pqn_taskName:"Học lập trình frontend", pqn_level:"Small" },
    { pqn_taskId:2, pqn_taskName:"Học lập trình reactjs",pqn_level:"Medium"},
    { pqn_taskId:3, pqn_taskName:"Lập trình với Frontend - Reactjs",pqn_level:"High"},
    { pqn_taskId:4, pqn_taskName:"Lập trình Fullstack (PHP, Java, NetCore)",pqn_level:"Small"},
   ];
   const [pqnListTasks, setPqnListTasks] = useState(pqn_listTasks);  

   const pqnhandlesubmit = (pqnParam)=>{
    console.log("App:",pqnParam);
    setPqnListTasks(prev =>{
      return[
        ... prev,
    ]
    })
   }
  return (
    <div clasname ="container border">
      <h1>Phạm Quang Nhất - k22cntt1</h1>
      <hr/>
      <div>
        <PqnListTask renderPqnListTasks = {pqnListTasks}/>                                                                                                   
      </div>
      <div>
        <PqnTaskAddorEdit pqnOnSubmit={pqnhandlesubmit}/>
      </div>
    </div>

  );
}

export default App;
