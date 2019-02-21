import React from 'react'
import PropTypes from 'prop-types'
import "./Pad.css"

function Pad({clicked, isLocked}) {
  let buttons = [1,2,3,4,5,6,7,8,9,0];

  return (
    <div className="Pad">
      {buttons.map(btn=><button disabled={isLocked} className="Button" onClick={()=>clicked(btn)}>{btn}</button>)}
    </div>
  )
}

Pad.propTypes = {

}

export default Pad

