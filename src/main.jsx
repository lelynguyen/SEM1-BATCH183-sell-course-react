import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { DLContextProvider } from "./Contexts/DLContext.jsx";
import { AuthContextProvider } from "./Contexts/AuthContext.jsx";
import { CourseContextProvider } from "./Contexts/CoursesContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CourseContextProvider>
      <AuthContextProvider>
        <DLContextProvider>
          <App />
        </DLContextProvider>
      </AuthContextProvider>
    </CourseContextProvider>
  </React.StrictMode>
);
