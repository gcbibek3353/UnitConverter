import React, { useContext, useState } from 'react'
import { currentUnitContext } from './context'

const Main = () => {
    const {currentUnit} = useContext(currentUnitContext);
    const [fromUnit,setFromUnit] = useState<string>();    
    const [toUnit,setToUnit] = useState<string>();   

  return (
    <div>
        <div>
            <label htmlFor="from">From </label>
            <input type="number" id='from' />
            <ul>
                {
                  Object.keys(currentUnit.units).map(unit =><li key={unit}>{unit}</li>)
                }
            </ul>
        </div>

        <div>
        <label htmlFor="to">To </label>
            <input type="number" id='to' />
            <ul>
                {
                  Object.keys(currentUnit.units).map(unit =>{
                    if(unit == toUnit){
                      return <li className='focus' key={unit}>{unit}</li>
                    }
                    return(
                      <li onClick={()=>setToUnit()} key={unit}>{unit}</li>
                    )
                })
                }
            </ul>
        </div>
    </div>
  )
}

export default Main