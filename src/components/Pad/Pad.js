import React from 'react'
import PropTypes from 'prop-types'
import "./Pad.css"

const Pad = ({clicked, isLocked}) => {

  let buttons = [1,2,3,4,5,6,7,8,9,0];

  return (
    <div className="Pad">
      {buttons.map((btn,id)=><button key={id} disabled={isLocked} className="Button" onClick={()=>clicked(btn)}>{btn}</button>)}
    </div>
  )
}

Pad.propTypes = {
  clicked: PropTypes.func,
  isLocked: PropTypes.bool
}

export default Pad;

