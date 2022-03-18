import { useReducer, useState } from "react";
import "./App.css";
import Todo from "./Todo";

function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        return [
          ...state,
          { id: Date.now(), name: action.payload.name, completed: false },
        ];
      case "toggle":
        return state.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          } else {
            return todo;
          }
        });
      case "delete":
        return state.filter((todo) => todo.id !== action.payload.id);
        
      default:
        return state;
    }
  };

  const [name, setName] = useState("");
  const [todos, dispatch] = useReducer(reducer, []);

  const handleSubmit = () => {
    dispatch({ type: "add", payload: { name: name } });
    setName(" ");
  };

  return (
    <div className="container">
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
        {todos.map((value) => {
          return <Todo value={value} dispatch={dispatch} />;
        })}
      </div>
    </div>
  );
}

export default App;
