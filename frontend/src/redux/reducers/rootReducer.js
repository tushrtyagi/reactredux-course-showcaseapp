
import { combineReducers } from 'redux';

const enrolledCoursesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ENROLL_COURSE':
      return [...state, action.payload];
    case 'MARK_COMPLETED':
      return state.map((course) =>
        course.id === action.payload ? { ...course, completed: true } : course
      );
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  enrolledCourses: enrolledCoursesReducer,
});

export default rootReducer;
