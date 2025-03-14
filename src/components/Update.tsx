import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { getTodo, update } from "../APIServices";

function Update() {

let iddata;


useEffect(() => {
  async function fetchTodo() {
    try {

      iddata = sessionStorage.getItem("number");
    	const returnedResponse = await getTodo(iddata);

        if (returnedResponse) {
          setFormData({
            id: returnedResponse.id || returnedResponse.id,
            toDoName: returnedResponse.todoname || "",
            toDoDescription: returnedResponse.tododescription || "",
            created_at: returnedResponse.created_at || "",
            updated_at: returnedResponse.updated_at || "",
          });
        }
      //If an error occurs catch it and log the error for the moment.
    } catch (error) {
      console.log(error);
    }
  }
  //call the fetch chat
  fetchTodo();
}, []);

  const [formData, setFormData] = useState({
    id: -1,
    toDoName: "",
    toDoDescription: "",
    created_at: "",
    updated_at: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const generateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      todo: {
        todoname: formData.toDoName,
        tododescription: formData.toDoDescription,
      },
    };

    try {
      await update(formData.id, data);
      alert("Your Todo is Updated");
    } catch (error) {
      console.log(error);
      alert("Your Todo was not Updated, please try again");
    }
  };

  return (
    <div className="content-container" onSubmit={generateSubmit}>
      <h1>Update your Todo</h1>
      <Form className="create-form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="create-todo-labels">
            Update the Name of your task to do
          </Form.Label>
          <br />
          <Form.Control
            // call handleChange when a change is made to field
            onChange={handleChange}
            className="create-todo-form-inputs"
            type="text"
            name="toDoName"
            required
            placeholder="Write here"
            value={formData.toDoName}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="create-todo-labels">
            Update the Description
          </Form.Label>
          <br />
          <Form.Control
            // call handleChange when a change is made to field
            onChange={handleChange}
            className="create-todo-form-inputs"
            as="textarea"
            placeholder="Write description of duties required"
            name="toDoDescription"
            value={formData.toDoDescription}
            required
          />
        </Form.Group>
        <Button className="create-button" type="submit">
          Update Todo
        </Button>
      </Form>
    </div>
  );
}

export default Update;
