import React, { useContext, useState } from 'react'
import { currentUnitContext } from './context'
import { CurrentUnitContextType } from './context';


const Main = () => {
  const context = useContext(currentUnitContext) as CurrentUnitContextType;
  const [fromValue, setFromValue] = useState(0);
  const [toValue, setToValue] = useState(0);
  const [fromUnit, setFromUnit] = useState<string>();
  const [toUnit, setToUnit] = useState<string>();
  // console.log(`
  //     from value ${fromValue}
  //     to value ${toValue}
  //     from Unit ${fromUnit}
  //     to Unit ${toUnit}
  //     `);

  const fromChangeHandler = (fromValue: number) => {
    // console.log('from change handler called');
    setFromValue(fromValue);
    if (fromUnit && toUnit) {
      const valueInDefaultUnit = fromValue / parseFloat(context.currentUnit.units[fromUnit]);
      const valueInToUnit = valueInDefaultUnit * parseFloat(context.currentUnit.units[toUnit]);
      setToValue(valueInToUnit);
    }
  };

  const toChangeHandler = (toValue: number) => {
    setToValue(toValue);
    if (fromUnit && toUnit) {
      const valueInDefaultUnit = toValue / parseFloat(context.currentUnit.units[toUnit]);
      const valueInFromUnit = valueInDefaultUnit * parseFloat(context.currentUnit.units[fromUnit]);
      setFromValue(valueInFromUnit);
    }
  };

  return (
    <div className='flex flex-col md:flex-row gap-5 md:h-screen w-full items-center justify-evenly'>

      <div className='flex flex-col gap-3'>
        <label htmlFor="from" className='text-5xl'>From </label> <br />
        <div className='flex gap-5 flex-col md:flex-row'>
          <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => fromChangeHandler(parseFloat(e.target.value))} value={fromValue} className="border-2 border-slate-600 p-2 outline-none pl-3 rounded-md" type="number" id='from' />
          <span className='text-4xl '>{fromUnit}</span>
        </div>
        <ul className='flex gap-2 flex-col md:mt-10 shadow-md bg-slate-200 border-slate-700 p-3'>
          {Object.keys(context.currentUnit.units).map(unit => (
            <li
              key={unit}
              className={`${unit === fromUnit ? 'focus' : ''} p-2 rounded-md`}
              onClick={() => {
                setFromUnit(unit);
                setFromValue(0);
                setToValue(0);
              }}
            >
              {unit}
            </li>
          ))}
        </ul>
      </div>

      <div className='flex flex-col gap-3'>
        <label className='text-5xl' htmlFor="to">To</label>
        <div className='flex gap-5 flex-col md:flex-row'>
          <input onChange={(e: any) => toChangeHandler(e.target.value)} value={toValue} className="border-2 border-slate-600 p-2 outline-none pl-3 rounded-md" type="number" id='to' />
          <span className='text-4xl '> {toUnit}</span>
        </div>
        <ul className='flex gap-2 flex-col md:mt-10 shadow-md bg-slate-200 border-slate-700 p-3'>
          {Object.keys(context.currentUnit.units).map(unit => (
            <li
              key={unit}
              className={`${unit === toUnit ? 'focus' : ''} p-2 rounded-md`}
              onClick={() => {
                setToUnit(unit)
                setFromValue(0);
                setToValue(0);
              }
              }
            >
              {unit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Main