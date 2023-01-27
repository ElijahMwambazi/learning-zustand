import { ChangeEvent, useState } from "react";
import { v4 as uuidV4 } from "uuid";
import useCourseStore from "../stores/course-store.store";

const CourseForm = () => {
  const [courseTitle, setCourseTitle] =
    useState("");
  const { addCourse } = useCourseStore();

  const onChangeHandler = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setCourseTitle(e.target.value);
  };

  const handleCourseSubmit = () => {
    if (!courseTitle)
      return alert("please add a course title");

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
