import React, { useState } from "react";
import Icon,{Minusicon} from "./icon";
import ShortTextRoundedIcon from '@material-ui/icons/ShortTextRounded';
function App() {
  
  let [item, setitem] = useState("");
  let [arrcode, setarrcode] = useState([]);
  
  function itemfun(event) {
    let a = event.target.value;
    setitem(a);
  }
  function fullfun() {
    setarrcode(function (prev) {
      return [...prev, item];
    });
    setitem("");
  }

  function deleteone(id){
    setarrcode((prev)=>{
     return prev.filter((eachitem,index)=>{
return index!==id;
      });
    });
  }

  function handleclick(){
    deleteone(0);
  }
  return (
    
    <div className="container">
      <div className="heading">
        <h1>
        <ShortTextRoundedIcon /> Inshort-hints</h1>
      </div>
      <div className="form">
      <button id="btn" onClick={handleclick}>
          <span><Minusicon/></span>
        </button>
        <button id="addbtn" onClick={fullfun}>
          <span><Icon /></span>
        </button>
        <input onChange={itemfun} value={item} type="text" required="" />
        
       
      </div>
      <div>
        <ul>
         {arrcode.map(function(eachitem){
           return(
<li>{eachitem}</li>
           );
         })}
        </ul>
      </div>
      <p>2021 @ santhosh kumar</p>;
    </div>
    
    
  );
}

export default App;
