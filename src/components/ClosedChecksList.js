import React from 'react'
import CheckOpen from "./CheckOpen";
import PropTypes from 'prop-types'

function ClosedChecksList(props) {
  const { checkList } = props;
  const closedChecks = checkList.filter((check) => check.open === false );


  return (
    <React.Fragment>
      <div className="openChecksList">
        <h2>ClosedChecksList</h2>
        {closedChecks.map((check) => (
          <CheckOpen
            /* onClick={() => setModalIsOpen(true) }*/
            handleSelectingCheck={props.handleSelectingCheck}

            drink={check.drink}
            size={check.size}
            totalPrice={check.totalPrice}
            open={check.open}
            timeOpen={check.timeOpen}
            id={check.id}
            items={check.items}
            key={check.id}
          />
        ))}
      </div>
      </React.Fragment>
  )
}

ClosedChecksList.propTypes = {}

export default ClosedChecksList
