import { useState,useEffect } from "react";


function App() {
    const [user,setUser]=useState([]);
    useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/users")
      .then((res)=>res.json())
      .then((data)=>setUser(data))
    },[])
  return (
    <div>
      <h2>User Details</h2>
      <div>
        {user.map((x)=>(
          <div key={user.id}>
          <p> UserName:{x.name}</p>
          <p> Email :{x.email}</p>
          </div>
         
        ))}
      </div>
    </div>
  )
}

export default App
