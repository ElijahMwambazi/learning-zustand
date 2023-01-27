import { create } from "zustand";
import {
  devtools,
  persist,
} from "zustand/middleware";

export type Course = {
  id: string;
  title: string;
  completed: boolean;
};

export type CoursesState = {
  courses: Course[];
  addCourse: (course: Course) => void;
  removeCourse: (courseId: string) => void;
  toggleCourseStatus: (courseId: string) => void;
};

const useCourseStore = create<CoursesState>()(
  devtools(
    persist(
      (set) => ({
        courses: [],
        addCourse: (course) =>
          set((state) => ({
            courses: [course, ...state.courses],
          })),
        removeCourse: (courseId) =>
          set((state) => ({
            courses: state.courses.filter(
              (course) => course.id !== courseId
            ),
          })),
        toggleCourseStatus: (courseId) =>
          set((state) => ({
            courses: state.courses.map((course) =>
              course.id === courseId
                ? {
                    ...course,
                    completed: !course.completed,
                  }
                : course
            ),
          })),
      }),
      { name: "courses" }
    )
  )
);

export default useCourseStore;
