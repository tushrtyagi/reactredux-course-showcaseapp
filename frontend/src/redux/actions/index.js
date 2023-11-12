
export const enrollCourse = (course) => ({
    type: 'ENROLL_COURSE',
    payload: course,
  });
  
  export const markCompleted = (courseId) => ({
    type: 'MARK_COMPLETED',
    payload: courseId,
  });
  