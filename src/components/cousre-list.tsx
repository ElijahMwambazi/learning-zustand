import { Fragment } from "react";

import useCourseStore from "../stores/course-store.store";

const CourseList = () => {
  const {
    courses,
    removeCourse,
    toggleCourseStatus,
  } = useCourseStore();

  return (
    <>
      <ul>
        {courses.map((course) => {
          return (
            <Fragment key={course.id}>
              <li
                className={`course-item`}
                style={{
                  backgroundColor:
                    course.completed
                      ? "green"
                      : "white",
                }}
              >
                <span className="course-item-col-1">
                  <input
                    checked={course.completed}
                    type="checkbox"
                    onChange={(e) => {
                      toggleCourseStatus(
                        course.id
                      );
                    }}
                  />
                </span>
                <span>{course?.title}</span>
                <button
                  onClick={() => {
                    removeCourse(course.id);
                  }}
                  className="delete-btn"
                >
                  Delete
                </button>
              </li>
            </Fragment>
          );
        })}
      </ul>
    </>
  );
};

export default CourseList;
