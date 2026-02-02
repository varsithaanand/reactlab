import { useState } from "react";


function App() {
  const[num1,setNum1]=useState("");
  const[num2,setNum2]=useState("");
  const a=Number(num1);
  const b=Number(num2);
  
  return (
    <div>
      <h1>Calculator</h1>
      <input type="number" placeholder='Enter the value 1' onChange={(e)=>{setNum1(e.target.value)}}/>
      <input type="number"  placeholder='Enter the value 2' onChange={(e)=>{setNum2(e.target.value)}}/>
      <div style={{height:"200px",
        width:"300px",
        border:"1px solid",
        marginLeft:"450px",
        marginTop:"20px",
        textAlign:"left"}}>
        <p><strong>Addition :</strong>{a+b}</p>
        <p><strong>Subtration :</strong>{a-b}</p>
        <p><strong>Multiplication :</strong>{a*b}</p>
        <p><strong>Division :</strong>{b==0 ?"" :a/b}</p>
                                                                                 
      </div>
    </div>
  )
}

export default App
