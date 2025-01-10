import type {ICourse} from '~/interfaces/ICourse';
import course_data from '../data/course-data';
export default function useCourse() {
  const course: ICourse = course_data;
  return course;
}
