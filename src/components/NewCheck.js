import React from 'react'
// import PropTypes from 'prop-types'
import ItemizedCheck from './ItemizedCheck'
import ItemButtons from './ItemButtons'

function NewCheck(props) {
  return (
    <React.Fragment>
      <div className='newCheck'>
        <ItemizedCheck />
        <ItemButtons />
        {/* <br/> */}
        </div>
        <button>Send Order</button>
      {/* </div> */}
    </React.Fragment>
  )
}

NewCheck.propTypes = {}

export default NewCheck

