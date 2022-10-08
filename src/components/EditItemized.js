import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

function EditItemized(props) {
  const { items, totalCost } = props;


  console.log(items)


  return (
    <React.Fragment>
      <div className='itemizedCheck'>
      {items.map((item) => (
          <h4
            key={item.key}
            // onClick={
            //   () => handleItemClick(item)
              // () => handleDeletingItems(item.id)
            // }
          >
            {item.size} {item.drink} - ${item.price}
          </h4>
        ))}
        <hr />
        <h4> Total Price: ${totalCost}</h4>
      </div>

    </React.Fragment>
    
  )
}

EditItemized.propTypes = {}

export default EditItemized
