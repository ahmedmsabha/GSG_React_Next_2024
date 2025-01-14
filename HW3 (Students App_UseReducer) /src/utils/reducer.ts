// reducer.ts

import type { IStudent } from "../types";

interface State {
  students: IStudent[];
  totalAbsents: number;
}

type Action =
  | { type: "SET_STUDENTS"; payload: IStudent[] }
  | { type: "INCREMENT_ABSENTS"; payload: { id: string; change: number } }
  | { type: "DECREMENT_ABSENTS"; payload: { id: string; change: number } }
  | { type: "ADD_STUDENT"; payload: IStudent }
  | { type: "REMOVE_FIRST_STUDENT" };

export const initialState: State = {
  students: [],
  totalAbsents: 0,
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_STUDENTS":
      return {
        ...state,
        students: action.payload,
        totalAbsents: action.payload.reduce(
          (prev, cur) => prev + cur.absents,
          0
        ),
      };
    case "INCREMENT_ABSENTS":
      return {
        ...state,
        students: state.students.map((student) =>
          student.id === action.payload.id
            ? { ...student, absents: student.absents + action.payload.change }
            : student
        ),
        totalAbsents: state.totalAbsents + action.payload.change,
      };
    case "DECREMENT_ABSENTS":
      return {
        ...state,
        students: state.students.map((student) =>
          student.id === action.payload.id
            ? { ...student, absents: student.absents + action.payload.change }
            : student
        ),
        totalAbsents: state.totalAbsents + action.payload.change,
      };
    case "ADD_STUDENT":
      return {
        ...state,
        students: [action.payload, ...state.students],
      };
    case "REMOVE_FIRST_STUDENT":
      return {
        ...state,
        students: state.students.slice(1),
      };
    default:
      return state;
  }
};
