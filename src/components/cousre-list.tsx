import { Fragment } from "react";

import useCourseStore from "../stores/course-store.store";
import {
  ListItemCheckBox,
  ListItems,
  Listitem,
} from "../global.styles";

const CourseList = () => {
  const {
    courses,
    removeCourse,
    toggleCourseStatus,
  } = useCourseStore();

  return (
    <>
      <ListItems>
        {courses.map(
          ({ id, title, completed }) => {
            return (
              <Fragment key={id}>
                <Listitem
                  className="course-item"
                  completed={completed}
                >
                  <ListItemCheckBox
                    checked={completed}
                    type="checkbox"
                    onChange={(e) => {
                      toggleCourseStatus(id);
                    }}
                  />
                  <span className="course-item-col-2">
                    <span>{title}</span>
                    <button
                      onClick={() => {
                        removeCourse(id);
                      }}
                      className="delete-btn"
                    >
                      Delete
                    </button>
                  </span>
                </Listitem>
              </Fragment>
            );
          }
        )}
      </ListItems>
    </>
  );
};

export default CourseList;
