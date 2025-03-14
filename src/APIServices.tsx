import axios from "axios";

export async function create(data: any) {
  try {
    //Debugging log
    // console.log("create API call");
    console.log(data.todo.tododescription);

    const response = await axios.post("https://devopssecca1.site/todos", data);
    //log response for debugging
    console.log(response);
    //return the response to be displayed on client interface
    console.log("Uptil here works!");
    console.log(data.name);
    console.log(data.description);
  } catch (error) {
    console.log("API call failed");
    console.log(error);
  }
}

export async function deleteTodo(data: any) {
  try {
    const payload = "https://devopssecca1.site/todos/" + data;
    console.log(data);
    const response = await axios.delete(payload);
    //log response for debugging
    console.log(response.data);
    //return the response to be displayed on client interface
    console.log("Uptil here works!");
    return response.data;
  } catch (error) {
    return "API call failed";
  }
}

export async function getAll() {
  try {
    const response = await axios.get("https://devopssecca1.site/todos");
    //log response for debugging
    console.log(response.data);
    //return the response to be displayed on client interface
    console.log("Uptil here works!");
    return response.data;
  } catch (error) {
    return "API call failed";
  }
}

export async function update(number: any, data: any) {
  try {
    const response = await axios.put(
      "https://devopssecca1.site/todos/" + number,
      data
    );
    //log response for debugging
    console.log(response.data);
    //return the response to be displayed on client interface
    console.log("Uptil here works!");
    return response.data;
  } catch (error) {
    return "API call failed";
  }
}

export async function getTodo(data: any) {
  try {
    const number = data.toString();
    const url = "https://devopssecca1.site/todos/" + number;
    const response = await axios.get(url);
    //log response for debugging
    console.log(response.data);
    //return the response to be displayed on client interface
    console.log("Uptil here works!");
    return response.data;
  } catch (error) {
    return "API call failed";
  }
}
