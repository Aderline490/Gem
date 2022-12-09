import axios from "axios";

const url = "http://localhost:8000/students";

export async function fetchStudents() {
  try {
    console.log("fetching....")
    const response = await axios.get(`${url}/all`, { headers: {} });
    return response.data.data;
  } catch (error) {
    return error?.message;
  }
}

export async function createStudent(student) {
    try {
      const response = await axios.post(`${url}`, student, { headers: {} });
      window.location.reload(false);
      return response.data.success;
    } catch (error) {
      return error?.message;
    }
}

export async function updateStudent(student) {
  try {
    const response = await axios.put(`${url}/${student.id}`, student, {headers: {}});
    window.location.reload(false);
    return response.data.success;
  }
  catch(error) {
    return error?.message;
  }
}

export async function deleteStudent(id) {
    try {
      const response = await axios.delete(`${url}/${id}`, { headers: {} });
      window.location.reload(false);
      return response.data.success;
    } catch (error) {
      return error?.message;
    }
}
