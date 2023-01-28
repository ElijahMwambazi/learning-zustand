import CourseForm from "./components/course-form";
import CourseList from "./components/cousre-list";

function App() {
  return (
    <div className="App">
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
