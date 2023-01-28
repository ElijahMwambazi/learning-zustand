import { ChangeEvent, useState } from "react";
import { v4 as uuidV4 } from "uuid";
import useCourseStore, {
  Course,
} from "../stores/course-store.store";

const CourseForm = () => {
  const [courseTitle, setCourseTitle] =
    useState("");
  const { addCourse, courses } = useCourseStore();

  const onChangeHandler = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setCourseTitle(e.target.value);
  };

  const handleCourseSubmit = () => {
    if (!courseTitle)
      return alert("please add a course title");

    courses.find((course: Course) => {
      if (course.title === courseTitle)
        return alert(
          "A course with the same title has already been added"
        );
    });

    addCourse({
      id: uuidV4(),
      title: courseTitle,
      completed: false,
    });

    setCourseTitle("");
  };

  return (
    <div className="form-container">
      <input
        className="form-input"
        value={courseTitle}
        onChange={onChangeHandler}
      />
      <button
        type="submit"
        onClick={() => {
          handleCourseSubmit();
        }}
        className="form-submit-btn"
      >
        Add Course
      </button>
    </div>
  );
};

export default CourseForm;
