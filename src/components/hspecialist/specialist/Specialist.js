import React from 'react'
import './specialist.css'

function Specialist(props) {
    const spec = props.spec
    const name = props.name
    const speclization =props.speclization
    const meaning = props.meaning
  return (
    <div className='indivi'>
      <img src={spec} alt='Doctor'/>
      <p className='indivi_name' >{name}</p>
      <h6 className='indivi_spec' >{speclization}</h6>
      <p className='indivi_mean' >{meaning}</p>
    </div>
  )
}

export default Specialist
