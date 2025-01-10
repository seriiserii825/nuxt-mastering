import type { ICourse } from "~/interfaces/ICourse";
import course_data from "../data/course-data";
export default function useCourse() {
  const course: ICourse = course_data;
  const course_with_path = {
    ...course,
    chapters: course.chapters.map((chapter) => {
      return {
        ...chapter,
        lessons: chapter.lessons.map((lesson) => {
          return {
            ...lesson,
            path: `/course/chapter/${chapter.slug}/lesson/${lesson.slug}`,
          };
        }),
      };
    }),
  };
  return course_with_path;
}
