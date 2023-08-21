import React, { useEffect, useState } from 'react';
import './Stopwatch.css';
import Timer from '../Timer/Timer';
import ControlButtons from '../ControlButtons/ControlButtons';

 


const Stopwatch = () => {

  const [isActive, setIsActive] = useState(false);
  const [isPasused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

  useEffect(() =>{
    let interval = null;

    if(isActive && isPasused == false){
      interval = setInterval(() =>{
        setTime(time => time + 10)
      }, 10);
    }else{
      clearInterval(interval);
    }

    return () =>{
      clearInterval(interval);
    }

  }, [isActive, isPasused]);

  const handleStart = () =>{
    setIsActive(true);
    setIsPaused(false);
  }

  const handleReset = () =>{
    setIsActive(false);
    setTime(0);
  }

  const handlePauseResume = () =>{
    setIsPaused(!isPasused);
  }

  return (
    <section className='stop-watch'>
        <Timer time = {time} />
        <ControlButtons 
        active={isActive}
        handleStart={handleStart}
        handleReset={handleReset}
        handlePauseResume={handlePauseResume}
        />
    </section>
  )
}

export default Stopwatch;