import React,{useEffect, useState} from 'react'

function App() {
  const [greetings,SetGreeting]=useState("");
  useEffect(()=>{
    let hours=new Date().getHours().toString().padStart(2,"0")
    let min=new Date().getMinutes().toString().padStart(2,"0")
    let sec=new Date().getSeconds().toString().padStart(2,"0")
    if(hours<12){
      SetGreeting(`Good morning ${hours}: ${min}: ${sec}` )
    }
    else if(hours>=12 && hours<=15)
    {
      SetGreeting(`Good Afternoon ${hours}: ${min}: ${sec}` )
    }
    else if(hours>15 && hours<=19){
      SetGreeting(`Good evening ${hours}: ${min}: ${sec}` )
    }
    else{
      SetGreeting(`Good night ${hours}: ${min}: ${sec}` )
    }
  })

  return (
    <div>
      <div style={{height:"100px",
      width:"200px",
      backgroundColor:"lightblue",
      marginTop:"40px",
      marginLeft:"300px",
      borderTopLeftRadius:"20px",
      borderBottomRightRadius:"20px"}}>{greetings}</div>
    </div>
  )
}

export default App
