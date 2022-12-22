import React from 'react'
import Counter from './counter/counter'
import './counters.css'

function Counters() {
  return (
    <div className='counters'>
        {/* <div className='first'>Our Usage Count</div> */}
        <div className='counter_head'>
            <Counter countend='18187'/>
            <p>Consultations</p>
        </div>
        <div className='counter_head'>
            <Counter countend='2932'/>
            <p>Appointments</p>
        </div>
        <div className='counter_head'>
            <Counter countend='11186'/>
            <p>Users</p>
        </div>
        <div className='counter_head'>
            <Counter countend='153'/>
            <p>Doctors</p>
        </div>
      
    </div>
  )
}

export default Counters
