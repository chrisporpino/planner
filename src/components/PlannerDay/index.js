import React from "react";
import styled from "styled-components";

const PlannerDayContainer = styled.div`
  border: 1px solid black;
  padding: 0 8px;
`

function PlannerDay(props) {
  return (
    <PlannerDayContainer>
      <div>
        <div>
          <p><strong>{props.dayName}</strong></p>
        </div>
        <div>
          {props.tasks.map((task) => {
            return <p key={task.id}>{task.text}</p>
          })}
        </div>
      </div>
    </PlannerDayContainer>
  );
}

export default PlannerDay;
