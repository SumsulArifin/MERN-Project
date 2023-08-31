import { useEffect,useState } from 'react';
import './App.css'

function App() {
  const [user,setUsers]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/user')
    .then(res =>res.json())
    .then(data =>setUsers(data));
  },[])
 

  return (
    <>
      <h1>Han IT Corporation</h1>
      console.log(user);
     <h2>Number Of User :{user.length}</h2>
    </>
  )
}

export default App;
