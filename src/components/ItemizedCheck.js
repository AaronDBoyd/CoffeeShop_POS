import React from 'react'
// import PropTypes from 'prop-types'

function ItemizedCheck(props) {

  const time = new Date().toDateString();

  return (
    <React.Fragment>
      <div className='itemizedCheck'>
        <h3>{time}</h3>
        <h4> Large HotCoffee $3 </h4>
        <h4> Small HotCoffee $1 </h4>
        <h4> Large ColdCoffee $3 </h4>
        <h4> Medium ColdCoffee $2 </h4>
        <hr />
        <h4> Total Price: $9</h4>

      </div>
    </React.Fragment>
  )
}

ItemizedCheck.propTypes = {}

export default ItemizedCheck
