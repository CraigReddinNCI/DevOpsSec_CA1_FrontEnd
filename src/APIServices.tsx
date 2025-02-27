import axios from "axios";

export async function create(data: any) {
  try {
    //Debugging log
    // console.log("create API call");
    console.log(data.todo.tododescription);


    const response = await axios.post("http://127.0.0.1:3000/todos", data);
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



export async function getAll() {
  try {

    const response = await axios.get("http://127.0.0.1:3000/todos");
    //log response for debugging
    console.log(response.data);
    //return the response to be displayed on client interface
    console.log("Uptil here works!");
    return response.data;
  } catch (error) {
    return ("API call failed");
    
  }
}

export async function getTodo(data : any) {
  try {
    const number = data.toString();
    const url = "http://127.0.0.1:3000/todos/" + number;
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
