# reactredux-course-showcaseapp

React and Redux Course Showcase App
Overview
This web application is a showcase for a list of courses and their details. It includes features like a course listing page, a course details page, and a student dashboard to display enrolled courses. Additionally, the project utilizes Redux for advanced state management.

Table of Contents
Features
Requirements
Getting Started
Folder Structure
Redux Implementation
Demo Video
Troubleshooting
Contributing
License
Features
Course Listing Page:

Fetches a list of sample courses from a dummy API.
Displays courses in a scrollable list with basic information.
Enables searching based on course name and instructor.
Course Details Page:

Shows detailed information about a selected course.
Includes course name, instructor's name, description, enrollment status, duration, schedule, location, pre-requisites, and a syllabus.
Student Dashboard:

Displays a user-friendly interface with a list of enrolled courses.
Shows course name, instructor name, thumbnail, due date, and a progress bar.
Allows students to mark courses as completed.
Advanced State Management:

Utilizes Redux for effective state management.
Requirements
Node.js
npm
Git
Getting Started
Clone the Repository:

bash
Copy code
git clone https://github.com/tushrtyagi/react-redux-course-showcaseapp.git
Install Dependencies:

bash
Copy code
cd react-redux-course-showcaseapp
npm install
Run the Application:

bash
Copy code
npm start
Open in Browser:
Open http://localhost:3000 in your browser.

Folder Structure
frontend: React application files.
src: Source files for the React application.
redux: Redux-related files and actions.
public: Public assets and HTML template.
**...
server : For real time api implementation
Redux Implementation
The application uses Redux for state management. The Redux-related files can be found in the redux folder. Actions, reducers, and the store are implemented to manage the application's state effectively.

Demo Video
https://drive.google.com/file/d/1eoycC1lnZWja23EmgaMeP41DPZ2fNZvO/view?usp=drive_link


Real-Time API Connection:
Implemented real-time connection with an API to show the number of likes instantly on the course listing page.
Troubleshooting
If you encounter any issues, refer to the Troubleshooting section in the README.
Contributing
Feel free to contribute by opening issues or submitting pull requests.

License
This project is licensed under the MIT License.

