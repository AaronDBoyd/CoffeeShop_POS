import React, { useState, useEffect } from 'react'
// import PropTypes from 'prop-types'
import ItemizedCheck from './ItemizedCheck'
import ItemButtons from './ItemButtons'

function NewCheck(props) {

  const [check, setCheck] = useState([])

  const handleAddingItemsToCheck = ( item ) => {
    setCheck(prev => [...prev, item]);
  }

  useEffect(() => {
    console.log(check);
  }, [check])

  return (
    <React.Fragment>
      <div className='newCheck'>
        <ItemizedCheck />
        <ItemButtons onItemCreation={handleAddingItemsToCheck}/>
        {/* <br/> */}
        </div>
        <button>Send Order</button>
      {/* </div> */}
    </React.Fragment>
  )
}

NewCheck.propTypes = {}

export default NewCheck

