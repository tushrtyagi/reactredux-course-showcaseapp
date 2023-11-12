import React from 'react';
import { connect } from 'react-redux';
import './Modal.css';
import Syllabus from './Syllabus';
import { enrollCourse } from '../redux/actions';

function CourseDetailModal({ course, closeModal, enrollCourse, enrolledCourses }) {
  const isEnrolled = enrolledCourses.some((enrolled) => enrolled.id === course.id);

  const handleEnroll = () => {
    if (!isEnrolled) {
      enrollCourse(course);
    }
    closeModal();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <h2>{course.name}</h2>
        <p>Instructor: {course.instructor}</p>
        <p>Description: {course.description}</p>
        <p>Enrollment Status: {course.enrollmentStatus}</p>
        <p>Course Duration: {course.duration}</p>
        <p>Schedule: {course.schedule}</p>
        <p>Location: {course.location}</p>
        <p>Pre-requisites: {course.prerequisites.join(', ')}</p>

        <Syllabus syllabus={course.syllabus} />

        <div className="actions">
          {isEnrolled ? (
            <button className="enrolled-button" disabled>
              Enrolled
            </button>
          ) : (
            <button onClick={handleEnroll} className="enroll-button">
              Enroll
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  enrolledCourses: state.enrolledCourses,
});

const mapDispatchToProps = {
  enrollCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetailModal);
