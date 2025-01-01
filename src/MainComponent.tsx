import React, { useContext, useState } from 'react'
import { currentUnitContext } from './context'

const Main = () => {
    const {currentUnit} = useContext(currentUnitContext);
    const [fromValue,setFromValue] = useState();
    const [toValue,setToValue] = useState();
    const [fromUnit,setFromUnit] = useState<string>();    
    const [toUnit,setToUnit] = useState<string>();   

    const fromChangeHandler = (e: any)=>{
      setFromValue(e.target.value);
      const valueInDefaultUnit = fromValue / parseFloat(currentUnit.units[fromUnit]);
      const valueInToUnit = valueInDefaultUnit * parseFloat(currentUnit.units[toUnit]);
      // console.log(valueInToUnit);
      setToValue(valueInToUnit);
    }
    const toChangeHandler = (e: any)=>{
      setToValue(e.target.value);
    }

  return (
    <div className='flex gap-5 items-center'>
        <div>
            <label htmlFor="from">From </label>
            <input onChange={(e: any)=>fromChangeHandler(e)} value={fromValue} className="border-2 border-black p-1 rounded-md"  type="number" id='from' />
            <ul>
                {
                  Object.keys(currentUnit.units).map(unit =>{
                    if(unit == fromUnit){
                      return <li className='focus' onClick={()=>setFromUnit(unit)}  key={unit}>{unit}</li>
                    }else
                 return <li  onClick={()=>setFromUnit(unit)} key={unit}>{unit}</li>
                })
                }
            </ul>
        </div>

        <div>
        <label htmlFor="to">To </label>
            <input onChange={(e: any)=>toChangeHandler(e)} value={toValue} className="border-2 border-black p-1 rounded-md"   type="number" id='to' />
            <ul>
                {
                  Object.keys(currentUnit.units).map(unit =>{
                    if(unit == toUnit){
                      return <li onClick={()=>setToUnit(unit)}  className='focus' key={unit}>{unit}</li>
                    }else
                    return(
                      <li onClick={()=>setToUnit(unit)} key={unit}>{unit}</li>
                    )
                })
                }
            </ul>
        </div>
    </div>
  )
}

export default Main