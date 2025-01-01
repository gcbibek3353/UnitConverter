import React, { useContext } from "react";
import { currentUnitContext } from "./context";
import { Units, unitsTypes } from "./Units";    


const SideBar = () => {
    const {currentUnit,setCurrentUnit} = useContext(currentUnitContext);
    

  return (
    <div>{
        Units.map(unit =><div key={unit.category}>
            <button onClick={()=>setCurrentUnit(unit)}>{unit.category}</button>
            </div>)
        
    }</div>
  )
}

export default SideBar;