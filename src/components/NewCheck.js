import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import ItemizedCheck from './ItemizedCheck'
import ItemButtons from './ItemButtons'

function NewCheck(props) {

  const [check, setCheck] = useState([])

  const handleAddingItemsToCheck = ( item ) => {
    const newCheck = check.concat(item);

    setCheck({
      check: newCheck
    })

    console.log(check.length);
  }

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

