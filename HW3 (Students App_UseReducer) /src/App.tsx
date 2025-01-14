import "./App.css";
import About from "./screens/About.screen";
import NotFound from "./screens/NotFound.screen";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import StudentDetails from "./screens/StudentDetails.screen";
import {  useEffect, useReducer } from "react";
import useLocalStorage from "./hooks/local-storage.hook";
import { IStudent } from "./types";
import AddStudent from "./screens/AddStudent.screen";
import { AuthProvider } from "./providers/authProvider";
import Login from "./screens/Login.screen";
import { initialState, reducer } from "./utils/reducer";
import Main from "./screens/Main.screen";

function App() {
  const h1Style = { color: "#69247C", fontSize: "24px" };

  const [state, dispatch] = useReducer(reducer, initialState);

  const setStudents = (students: IStudent[]) => {
    dispatch({ type: "SET_STUDENTS", payload: students });
  };

  const handleAbsentChange = (id: string, change: number) => {
    if (change > 0) {
      dispatch({ type: "INCREMENT_ABSENTS", payload: { id, change } });
    } else {
      dispatch({ type: "DECREMENT_ABSENTS", payload: { id, change } });
    }
  };

  const handleAddStudent = (newStudent: IStudent) => {
    dispatch({ type: "ADD_STUDENT", payload: newStudent });
  };

  const removeFirstStudent = () => {
    dispatch({ type: "REMOVE_FIRST_STUDENT" });
  };

  const location = useLocation();
  const { storedData } = useLocalStorage(state.students, "students-list");

  useEffect(() => {
    const stdList: IStudent[] = storedData || [];
    setStudents(stdList);
  }, [storedData]);

  return (
    <AuthProvider>
      <div className="main wrapper">
        <h1 style={h1Style}>Welcome to GSG React/Next Course</h1>
        <nav>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home Page
          </Link>
          <Link
            to="/add"
            className={location.pathname === "/add" ? "active" : ""}
          >
            Add Student
          </Link>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            About App
          </Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <Main
                studentsList={state.students}
                totalAbsents={state.totalAbsents}
                onAbsent={handleAbsentChange}
                onRemove={removeFirstStudent}
              />
            }
          />
          <Route
            path="/add"
            element={<AddStudent onAdd={handleAddStudent} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/student/:id" element={<StudentDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
