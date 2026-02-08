
import React, { useState } from 'react'

function App() {
  const[activetab,setactivetab] = useState("Home")
  return (
    <div style={Styles.Container}>
        <h2>Tab Component</h2>
    <div style={Styles.tabcontainer}>
        <button style={activetab == "Home" ? Styles.activeBtn:Styles.btn} onClick={()=>setactivetab("Home")}>Home</button>
        <button style={activetab == "About" ? Styles.activeBtn:Styles.btn}onClick={()=>setactivetab("About")}>About</button>
        <button style={activetab == "Contact" ? Styles.activeBtn:Styles.btn}onClick={()=>setactivetab("Contact")}>Contact</button>
    </div>
    
    <div style={Styles.contentBox}>
      {activetab== "Home"  &&(
        <p>this is my home page!!</p>
      )}
      {activetab == "About" &&(
        <p>This is my about page</p>
      )}
      {
        activetab == "Contact" &&(
          <p>hi! this is my contact page</p>
        )}
  </div>
  </div>
  )}
  const Styles = {
  Container:{
    minHeight:"100vh",
    background:"lightgrey"
  },
  tabcontainer:{
    padding:"20px"
  },
contentBox:{
    height:"200px",
    width:"200px",
    border:"1px solid",
    borderRadius:"10px",
    marginLeft:"400px"
},
activeBtn:{
  backgroundColor:"grey",
  
}
}
export default App




