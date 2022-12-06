import * as actions from '../actions/StudentActions';

export const initialState = {
    students: [],
    loading: false,
  }

export default function StudentsReducer(state = initialState, action){ 
  return state;
};  