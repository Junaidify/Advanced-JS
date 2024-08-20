import { Route, Routes } from "react-router-dom";
import "./App.css";
import { SignUp } from "./components/authentication/SignUp";
import CreateTask from "./components/tasks/CreateTask";
import DisplayTask from "./components/tasks/DisplayTask";
import { Login } from "./components/authentication/Login";

function App() {
  return (
    <>
      {/* <SignUp />
      <CreateTask />
      <DisplayTask /> */}

      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createtask" element={<CreateTask />} />
        <Route path="/displaytask" element={<DisplayTask />} />
      </Routes>
    </>
  );
}

export default App;
