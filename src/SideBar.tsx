import { useContext, useState } from "react";
import { currentUnitContext, CurrentUnitContextType } from "./context";
import { Units } from "./Units";


const SideBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const context = useContext(currentUnitContext) as CurrentUnitContextType;

  return (
    <div className="bg-sky-500 md:h-screen md:w-1/6 w-full flex justify-start h-14 flex-col  ">
      <div className="md:flex hidden pt-10 p-5 items-center flex-col gap-5 text-white text-lg font-bold mr-5" >{
        Units.map(unit => <div key={unit.category}>
          <button onClick={() => context.setCurrentUnit(unit)}>{unit.category}</button>
        </div>)
      }</div>
      <div className="md:hidden flex mt-2 p-3 ">
        <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="flex flex-col items-center justify-center gap-1">
          <div className="h-1 w-5 bg-white"></div>
          <div className="h-1 w-5 bg-white"></div>
          <div className="h-1 w-5 bg-white"></div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="bg-sky-500 md:hidden border-t-2 font-bold border-t-white z-10 p-3 transition-transform">
          {
            Units.map(unit => <div
            className="text-lg text-white"
            key={unit.category}>
              <button onClick={() => {
                context.setCurrentUnit(unit)
                setIsMenuOpen(!isMenuOpen)
                }}>{unit.category}</button>
            </div>)
          }
        </div>
      )}
    </div>

  )
}

export default SideBar;