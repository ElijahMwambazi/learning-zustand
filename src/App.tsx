import CourseForm from "./components/course-form";
import CourseList from "./components/cousre-list";
import "./App.css";

function App() {
  return (
    <div className="main-container">
      <h1
        style={{
          fontSize: "2.5rem",
          marginBottom: "2rem",
        }}
      >
        {" "}
        My Course list
      </h1>
      <CourseForm />
      <CourseList />
    </div>
  );
}

export default App;
