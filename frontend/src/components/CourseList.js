import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import CourseDetailModal from './CourseDetailModal';
import { enrollCourse } from '../redux/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Modal.css';
import courseData from '../CourseData'; 

function CourseList({ enrollCourse, enrolledCourses }) {
  const [courses, setCourses] = useState(courseData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [likes, setLikes] = useState({});
  const [dislikes, setDislikes] = useState({});
  const [noResults, setNoResults] = useState(false);


   useEffect(() => {

    fetch('http://localhost:3001/likes')
      .then((response) => response.json())
      .then((data) => setLikes(data))
      .catch((error) => console.error('Error fetching likes:', error));

    fetch('http://localhost:3001/dislikes')
      .then((response) => response.json())
      .then((data) => setDislikes(data))
      .catch((error) => console.error('Error fetching dislikes:', error));
  }, []);

    useEffect(() => {
    setLikes(likes);
    setDislikes(dislikes);
  }, [likes, dislikes]);

  const openModal = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCourse(null);
    setIsModalOpen(false);
  };

  const handleLike = (course) => {
    setLikes((prevLikes) => ({ ...prevLikes, [course.id]: (prevLikes[course.id] || 0) + 1 }));
  };

  const handleDislike = (course) => {
    setDislikes((prevDislikes) => ({ ...prevDislikes, [course.id]: (prevDislikes[course.id] || 0) + 1 }));
  };

  const getLikeCount = (course) => likes[course.id] || 0;
  const getDislikeCount = (course) => dislikes[course.id] || 0;

  const filteredCourses = courses.filter((course) => {
    const courseName = course.name.toLowerCase();
    const instructor = course.instructor.toLowerCase();
    const search = searchTerm.toLowerCase();
    return courseName.includes(search) || instructor.includes(search);
  });

  useEffect(() => {
    setNoResults(filteredCourses.length === 0);
  }, [filteredCourses]);

  return (
    <div className="course-list-container">
      <Link to="/dashboard" className="top-left-button">
        Go to Dashboard
      </Link>
      <h1>Courses List</h1>
      <input
        type="text"
        placeholder="Search courses or instructor"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {noResults ? (
        <p>No results</p>
      ) : (
        <ul>
          {filteredCourses.map((course) => (
            <li key={course.id} className="list-item">
              <h2>{course.name}</h2>
              <p>Instructor: {course.instructor}</p>
              <div>
                <button onClick={() => handleLike(course)}>
                  <FontAwesomeIcon icon={faThumbsUp} /> {getLikeCount(course)}
                </button>
                <button onClick={() => handleDislike(course)}>
                  <FontAwesomeIcon icon={faThumbsDown} /> {getDislikeCount(course)}
                </button>
                <button onClick={() => openModal(course)} className="view-details-button">
                  View Course
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {isModalOpen && selectedCourse && (
        <>
          <div className="backdrop" onClick={closeModal}></div>
          <div className="modal">
            <CourseDetailModal course={selectedCourse} closeModal={closeModal} enrollCourse={enrollCourse} />
          </div>
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  enrolledCourses: state.enrolledCourses,
});

export default connect(mapStateToProps, { enrollCourse })(CourseList);
