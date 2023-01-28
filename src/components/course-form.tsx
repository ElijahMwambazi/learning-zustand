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

  const courseTitleExists = courses.map(
    (course: Course) =>
      course.title === courseTitle
  );

  const handleCourseSubmit = () => {
    if (!courseTitle)
      return alert("Please add a course title");

    if (courseTitleExists)
      return alert(
        "A course with the same title has already been added"
      );

    addCourse({
      id: uuidV4(),
      title: courseTitle,
      completed: false,
    });

    setCourseTitle("");
  };

  return (
    <form
      className="form-container"
      onSubmit={handleCourseSubmit}
    >
      <input
        className="form-input"
        value={courseTitle}
        onChange={onChangeHandler}
      />
      <button
        type="submit"
        className="form-submit-btn"
      >
        Add To List
      </button>
    </form>
  );
};

export default CourseForm;
