import React from 'react'
// import PropTypes from 'prop-types'

function ItemButtons(props) {
  return (
    <React.Fragment>
      <div className='itemButtons'>
        <button>Hot Coffee</button> {/* onClick show sizes */}
        <button>Cold Coffee</button>
        <br/>
        <button>Small</button>
        <button>Medium</button>
        <button>Large</button>
      </div>
    </React.Fragment>
  )
}

ItemButtons.propTypes = {}

export default ItemButtons
