import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { del, change } from "../redux/todoListSlice";

function List() {
  const { list } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const lists = list.map((item, index) => (
    <li key={index} className="text-primary">
      <span
        className={["item", item.status ? "completed" : ""].join(" ")}
        onClick={() => dispatch(change(index))}
      >
        {item.content}
      </span>
      <button
        type="button"
        className="close bdn"
        onClick={() => dispatch(del(index))}
      >
        &times;
      </button>
    </li>
  ));
  return (
    <div>
      <ul style={{ marginTop: "20px" }}>{lists}</ul>
    </div>
  );
}

export default List;
