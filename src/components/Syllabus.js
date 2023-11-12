import React, { useState } from 'react';

function Syllabus({ syllabus }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <div className="syllabus">
      <h3 onClick={toggleDropdown} style={{ cursor: 'pointer' }}>
        Syllabus {isDropdownOpen ? '👇' : '👉'}
      </h3>
      {isDropdownOpen && (
        <ul>
          {syllabus.map((item) => (
            <li key={item.week}>
              <strong>Week {item.week}:</strong>
              <div>
                <p>
                  <strong>Topic:</strong> {item.topic}
                </p>
                <p>
                  <strong>Content:</strong> {item.content}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Syllabus;
