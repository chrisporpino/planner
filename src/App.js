import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TaskForm from "./components/TaskForm";
import PlannerDay from "./components/PlannerDay";
import axios from "axios";

export const apiUrl = "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-gabarito";

const PlannerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  padding: 32px;
`;

function App() {
  const [tasks, setTasks] = useState([]);

  const getTasks = () => {
    axios.get(apiUrl).then((response) => {
      setTasks(response.data);
    });
  }

  useEffect(() => {
    getTasks()
  }, []);

  const filterTasksByDay = (day) => {
    return tasks.filter((task) => {
      return task.day === day;
    });
  };

  return (
    <div>
      <TaskForm updateTasks={getTasks} />
      <PlannerContainer>
        <PlannerDay dayName={"Segunda"} tasks={filterTasksByDay("segunda")} />
        <PlannerDay dayName={"Terça"} tasks={filterTasksByDay("terca")} />
        <PlannerDay dayName={"Quarta"} tasks={filterTasksByDay("quarta")} />
        <PlannerDay dayName={"Quinta"} tasks={filterTasksByDay("quinta")} />
        <PlannerDay dayName={"Sexta"} tasks={filterTasksByDay("sexta")} />
        <PlannerDay dayName={"Sábado"} tasks={filterTasksByDay("sabado")} />
        <PlannerDay dayName={"Domingo"} tasks={filterTasksByDay("domingo")} />
      </PlannerContainer>
    </div>
  );
}

export default App;
