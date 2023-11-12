import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CourseList from './components/CourseList';
import StudentDashboard from './components/StudentDashboard';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import courseData from './CourseData'; 

function App() {
  const [enrolledCourses, setEnrolledCourses] = useState(courseData);

  useEffect(() => {
  }, []);

  const enrollCourse = (course) => {
    if (!enrolledCourses.some((enrolledCourse) => enrolledCourse.id === course.id)) {
      setEnrolledCourses([...enrolledCourses, course]);
    }
  };

  const markCourseAsCompleted = (courseId) => {
    setEnrolledCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === courseId ? { ...course, completed: true } : course
      )
    );
  };

  return (
    <Provider store={store}>
      <Router>
        <div>
          <Routes>
            <Route
              path="/"
              element={<CourseList enrollCourse={enrollCourse} enrolledCourses={enrolledCourses} />}
            />
            <Route
              path="/dashboard"
              element={
                <StudentDashboard
                  enrolledCourses={enrolledCourses}
                  markCourseAsCompleted={markCourseAsCompleted}
                />
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
