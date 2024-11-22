import React, { useState } from 'react'

function Counter(){
  const [count,setCount]=useState(0)
  return(
    <div>
      <h3>{count}</h3>
      <button onClick={()=>setCount(count+1)}>Update</button>
    </div>
  )
}

function HOCR(props){
  return <h2 style= {{backgroundColor:'red',width:100}} ><props.cmp/></h2>
}

function HOCB(props){
  return <h2 style= {{backgroundColor:'blue',width:100}} ><props.cmp/></h2>
}

function HOCG(props){
  return <h2 style= {{backgroundColor:'green',width:100}} ><props.cmp/></h2>
}
function HOC(props) {
  return (
    <h2 style={{ backgroundColor:props.color , width: 100 }}>
      <props.cmp />
    </h2>
  );
}
function App() {
  return (
    <div>
      <h1>HOC</h1>
     <HOCR cmp={Counter} />
     <HOCB cmp={Counter} />
     <HOCG cmp={Counter} />
     <HOC cmp={Counter} color="pink" />
     {/* <Counter/> can return like this but if i want the same components multiple times with minute changes like change in background color then writing multiple counter component with style conditions in it will be tedious ---instead write a HOC that takes the counter com[onent as props and adds some changes in style itselp so we can have HOCR,HOCG,HOCB*/}
    </div>
  )
}

export default App