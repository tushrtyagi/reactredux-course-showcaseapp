import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import { markCompleted } from '../redux/actions';
import { connect } from 'react-redux';

function StudentDashboard({ enrolledCourses, markCompleted }) {
  const uniqueCourseIds = new Set();
  return (
    <div>
      <h1>Student Dashboard</h1>
      <Link to="/" className="back-to-list-link">
        Back to Course List
      </Link>
      <ul>
        {enrolledCourses && enrolledCourses.length > 0 ? (
          enrolledCourses.map((course) => {
            if (!uniqueCourseIds.has(course.id)) {
              uniqueCourseIds.add(course.id);

              return (
                <li key={course.id} className="dashboard-course">
                  <div className="dashboard-course-info">
                    <h2>{course.name}</h2>
                    <p>Instructor: {course.instructor}</p>
                    <p>Due Date: {course.dueDate}</p>
                  </div>
                  <div className="dashboard-course-progress">
                    <progress value={course.progress} max="100" />
                    <button
                      onClick={() => markCompleted(course.id)}
                      disabled={course.completed}
                      className="completion-button"
                    >
                      {course.completed ? 'Completed' : 'Mark as Completed'}
                    </button>
                  </div>
                </li>
              );
            } else {
              return null;
            }
          })
        ) : (
          <p>No enrolled courses available.</p>
        )}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({
  enrolledCourses: state.enrolledCourses,
});

const mapDispatchToProps = {
  markCompleted,
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentDashboard);
