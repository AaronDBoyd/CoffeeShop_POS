import React from 'react'
import CheckClosed from './CheckClosed'
// import PropTypes from 'prop-types'

function ClosedChecksList(props) {
  const { checkList } = props;
  const closedChecks = checkList.filter((check) => check.open === false );


  return (
    <React.Fragment>
      <div className="openChecksList">
        <h2>ClosedChecksList</h2>
        {closedChecks.map((check) => (
          <CheckClosed
            handleSelectingCheck={props.handleSelectingCheck}
            handleDeletingCheck={props.handleDeletingCheck}
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
