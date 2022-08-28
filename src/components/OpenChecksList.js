import React from 'react'
import CheckOpen from './CheckOpen'

export default function OpenChecksList(props) {
  return (
    <React.Fragment>
      <h2>OpenChecksList</h2>
      {props.checkList.map((check) => (
        <CheckOpen
          drink={check.drink}
          size={check.size}
          totalPrice={check.totalPrice}
          open={check.open}
          timeOpen={check.timeOpen}
          id={check.id}
          key={check.id}
        />
      ))}
    </React.Fragment>
  )
}
