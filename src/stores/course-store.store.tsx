import { create } from "zustand";
import {
  devtools,
  persist,
} from "zustand/middleware";

interface BearState {
  bears: number;
  increase: (by: number) => void;
}

export type Course = {
  id: number;
  courseName: string;
  completed: boolean;
};

export type CoursesState = {
  courses: Course[];
  addCourse: (course: Course) => void;
  removeCourse: (courseId: number) => void;
  toggleCourseStatus: (courseId: number) => void;
};

export const useCourseStore =
  create<CoursesState>()((set) => ({
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
  }));

export default useCourseStore;
