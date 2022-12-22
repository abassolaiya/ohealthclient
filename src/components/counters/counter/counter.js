import React, { useState } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

function Counter(props) {
    const countend = props.countend
    const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
        <div className='counter'>
        <h3>
            {counterOn && <CountUp start={0} end={countend} duration={3} delay={0}/>}
            +
        </h3>
      
    </div>

    </ScrollTrigger>
    
  )
}

export default Counter
 