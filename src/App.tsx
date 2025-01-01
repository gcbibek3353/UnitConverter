import { useState } from "react"
import { currentUnitContext } from "./context";
import { Units, unitsTypes } from "./Units"
import SideBar from "./SideBar";
import MainComponent from "./MainComponent";


function App() {
  const [currentUnit, setCurrentUnit] = useState<unitsTypes>(Units[0]);


  return (
    <currentUnitContext.Provider value={{currentUnit,setCurrentUnit}}>
      <div className="flex items-center justify-evenly gap-5" >
        <SideBar />
        <MainComponent />
      </div>
    </currentUnitContext.Provider>
  )
}

export default App
