import axios from "axios";

export const GET_STUDENTS = "GET_STUDENTS";
export const GET_STUDENTS_SUCCESS = "GET_STUDENTS_SUCCESS";
export const GET_STUDENTS_FAILURE = "GET_STUDENTS_FAILURE";

export const getStudents = () => ({
  type: GET_STUDENTS,
});

export const getStudentsSuccess = (students) => ({
    type: GET_STUDENTS_SUCCESS,
    payload: students,
})

export const getStudentsFailure = () => ({
    type: GET_STUDENTS_FAILURE,
});

const url = "http://localhost:8000/students";

export async function fetchStudents() {
    // return async (dispatch) => {
        // dispatch(getStudents());
        try {
        const response = await axios.get(`${url}/all`, {headers: {}});
        // dispatch(getStudentsSuccess(response.data.data));
        return response.data.data;
        } catch (error) {
        // dispatch(getStudentsFailure());
        console.log(error);
        return error?.message;
        }
    // };
}