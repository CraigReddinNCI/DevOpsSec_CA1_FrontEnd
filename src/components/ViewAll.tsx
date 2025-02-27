import { useEffect, useState } from "react";
import { deleteTodo, getAll } from "../APIServices";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function ViewAll() {
  const [todos, settodos] = useState<[number, string, string][]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    //async function to gather the team data when the page renders / component mounts
    async function fetchChat() {

        
      try {
        //call api services using asyncronous function.
        const response = await getAll();
        if (Array.isArray(response)) {
          // Map objects to tuples
          const formattedTodos: [number ,string, string][] = response.map((todo) => [
            todo.id || "No Id Availavle",
            todo.todoname || "Unnamed Task",
            todo.tododescription || "No description",
          ]);

          settodos(formattedTodos);
        } else {
          console.error("Invalid API response format");
          settodos([]);
        }
      } catch (error) {
        console.log(error);
      }
    }
    //call the fetch chat
    fetchChat();
  }, []);

  const deleteTheTodo = async (id: any) => {

    deleteTodo(id);
    // Remove deleted item from UI
    settodos((prevTodos) => prevTodos.filter(([todoId]) => todoId !== id));
    alert("Deleted")
  };

  const updateTodo =(id : any) =>{
    const number =id.toString();
    sessionStorage.setItem("number", number)
    navigate("/update");
  }

  return (
    <div className="content-container">
      <h1>Below are all saved Todo's</h1>
      <Table className="todo-table">
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Description</th>
            <th>Update Todo</th>
            <th>Delete Todo</th>
          </tr>
        </thead>
        <tbody>
          {/* map the todos if todos is greater than 0 into the table */}
          {todos.length > 0 ? (
            todos.map(([id, todoname, tododescription], index) => (
              <tr key={index}>
                <td className="chat-name">{todoname || "No name provided"}</td>
                <td className="chat-name">
                  {tododescription || "No description provided"}
                </td>
                <td>
                  <Button
                    onClick={() => updateTodo(id)}
                     variant="primary"
                    className="update-button"
                  >
                    Update
                  </Button>
                </td>
                <td>
                  <Button
                    onClick={() => deleteTheTodo(id)}
                    variant="primary"
                    className="delete-button"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4}>No todos available</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}
export default ViewAll;
