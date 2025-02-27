import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { create } from "../APIServices";

function Create() {
  const [formData, setFormData] = useState({
    toDoName: "",
    toDoDescription: "",
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
      await create(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="content-container" onSubmit={generateSubmit}>
      <h1>Create your Todo</h1>
      <Form className="create-form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="create-todo-labels">
            Name of your task to do
          </Form.Label>
          <br />
          <Form.Control
            // call handleChange when a change is made to field
            onChange={handleChange}
            className="create-todo-form-inputs"
            type="text"
            name="toDoName"
            placeholder="Write here"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="create-todo-labels">Description</Form.Label>
          <br />
          <Form.Control
            // call handleChange when a change is made to field
            onChange={handleChange}
            className="create-todo-form-inputs"
            as="textarea"
            placeholder="Write description of duties required"
            name="toDoDescription"
          />
        </Form.Group>
        <Button className="create-button" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Create;
