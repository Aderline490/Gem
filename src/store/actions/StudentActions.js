import axios from "axios";

const url = "http://localhost:8000/students";

export async function fetchStudents() {
  try {
    const response = await axios.get(`${url}/all`, { headers: {} });
    return response.data.data;
  } catch (error) {
    console.log(error);
    return error?.message;
  }
}

export async function createStudent(student) {
    try {
        console.log(student);
        const response = await axios.post(`${url}`, student, { headers: {} });
        console.log(response);
        return response;
    }
    catch(error) {
        console.log(error);
        return error?.message;
    }
}