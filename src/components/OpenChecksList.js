import React from "react";
import CheckOpen from "./CheckOpen";

export default function OpenChecksList(props) {
  const { checkList } = props;
  const openChecks = checkList.filter((check) => check.open === true );

  return (
    <React.Fragment>
      <div className="openChecksList">
        <h2>OpenChecksList</h2>
        {openChecks.map((check) => (
          <CheckOpen
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
  );
}
