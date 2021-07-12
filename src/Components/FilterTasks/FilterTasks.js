import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

import "./FilterTasks.css";

const FilterTasks = ({ setFilteredTasks, setFilterStatus }) => {
  const listTasks = useSelector((state) => state.todoReducer.listTasks);

  return (
    <div className="filterPart">
      <Button
        variant="outline-light"
        onClick={() => {
          setFilterStatus("Done");
          setFilteredTasks(listTasks.filter((task) => task.isDone === true));
        }}
      >
        Done
      </Button>
      <Button
        variant="outline-light"
        onClick={() => {
          setFilterStatus("Undone");
          setFilteredTasks(listTasks.filter((task) => task.isDone === false));
        }}
      >
        Undone
      </Button>
      <Button
        variant="outline-light"
        onClick={() => {
          setFilterStatus("All");
          setFilteredTasks(listTasks);
        }}
      >
        All
      </Button>
    </div>
  );
};

export default FilterTasks;
