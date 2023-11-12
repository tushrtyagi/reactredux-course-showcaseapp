

  const courseData = [
      {
        "id": 1,
        "name": "Introduction to React Native",
        "instructor": "John Doe",
        "description": "Learn the basics of React Native development and build your first mobile app.",
        "enrollmentStatus": "Open",
        "thumbnail": "your.image.here",
        "duration": "8 weeks",
        "schedule": "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
        "location": "Online",
        "prerequisites": ["Basic JavaScript knowledge", "Familiarity with React"],
        "syllabus": [
          {
            "week": 1,
            "topic": "Introduction to React Native",
            "content": "Overview of React Native, setting up your development environment."
          },
          {
            "week": 2,
            "topic": "Building Your First App",
            "content": "Creating a simple mobile app using React Native components."
          }
        ],
        "students": [
          {
            "id": 101,
            "name": "Alice Johnson",
            "email": "alice@example.com"
          },
          {
            "id": 102,
            "name": "Bob Smith",
            "email": "bob@example.com"
          },
          {
            "id": 104,
            "name": "Daisy Johnson",
            "email": "daisy@example.com"
          },
        ]
      },
      {
        "id": 2,
        "name": "Advanced Web Development",
        "instructor": "Jane Smith",
        "description": "Learn advanced web development techniques and build dynamic web applications.",
        "enrollmentStatus": "Open",
        "thumbnail": "your.image.here",
        "duration": "12 weeks",
        "schedule": "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
        "location": "Online",
        "prerequisites": ["Intermediate HTML/CSS", "JavaScript proficiency"],
        "syllabus": [
          {
            "week": 1,
            "topic": "Advanced HTML/CSS",
            "content": "In-depth study of advanced HTML and CSS techniques."
          },
          {
            "week": 2,
            "topic": "JavaScript Frameworks",
            "content": "Introduction to popular JavaScript frameworks and libraries."
          },
          {
            "week": 3,
            "topic": "Dynamic Web Applications",
            "content": "Building dynamic web applications with real-time features."
          }
        ],
        "students": [
          {
            "id": 103,
            "name": "Charlie Brown",
            "email": "charlie@example.com"
          },
          {
            "id": 104,
            "name": "Daisy Johnson",
            "email": "daisy@example.com"
          },
          {
            "id": 105,
            "name": "Ella Wilson",
            "email": "ella@example.com"
          }
        ]
      },
      {
        "id": 3,
        "name": "Data Science Fundamentals",
        "instructor": "Emily Davis",
        "description": "Get started with data science, learn data analysis, and machine learning basics.",
        "enrollmentStatus": "Open",
        "thumbnail": "your.image.here",
        "duration": "10 weeks",
        "schedule": "Tuesdays and Thursdays, 5:00 PM - 7:00 PM",
        "location": "Online",
        "prerequisites": ["Basic programming knowledge", "Mathematics background"],
        "syllabus": [
          {
            "week": 1,
            "topic": "Introduction to Data Science",
            "content": "Basic concepts of data science and its applications."
          },
          {
            "week": 2,
            "topic": "Data Analysis Tools",
            "content": "Introduction to data analysis tools and techniques."
          }
        ],
        "students": [
          {
            "id": 106,
            "name": "Frank Martin",
            "email": "frank@example.com"
          },
          {
            "id": 101,
            "name": "Alice Johnson",
            "email": "alice@example.com"
          },
        ]
      },
      {
        "id": 4,
        "name": "Mobile App Design",
        "instructor": "Sophia Adams",
        "description": "Learn mobile app design principles, user interface, and user experience.",
        "enrollmentStatus": "Open",
        "thumbnail": "your.image.here",
        "duration": "6 weeks",
        "schedule": "Wednesdays, 3:00 PM - 5:00 PM",
        "location": "Online",
        "prerequisites": ["Basic design skills", "Familiarity with mobile apps"],
        "syllabus": [
          {
            "week": 1,
            "topic": "Introduction to Mobile App Design",
            "content": "Basic principles of designing mobile applications."
          },
          {
            "week": 2,
            "topic": "User Interface Design",
            "content": "Designing user-friendly interfaces for mobile apps."
          }
        ],
        "students": [
          {
            "id": 107,
            "name": "Grace Turner",
            "email": "grace@example.com"
          },
          {
            "id": 105,
            "name": "Ella Wilson",
            "email": "ella@example.com"
          },
          {
            "id": 102,
            "name": "Bob Smith",
            "email": "bob@example.com"
          },
        ]
      },
      {
        "id": 5,
        "name": "Python Programming",
        "instructor": "David Wilson",
        "description": "Learn Python programming from scratch and become a Python developer.",
        "enrollmentStatus": "Open",
        "thumbnail": "your.image.here",
        "duration": "8 weeks",
        "schedule": "Fridays, 6:00 PM - 8:00 PM",
        "location": "Online",
        "prerequisites": ["No prior programming knowledge required"],
        "syllabus": [
          {
            "week": 1,
            "topic": "Introduction to Python",
            "content": "Getting started with Python and its basic syntax."
          },
          {
            "week": 2,
            "topic": "Python Data Structures",
            "content": "Working with data structures in Python."
          }
        ],
        "students": [
          {
            "id": 108,
            "name": "Henry Clark",
            "email": "henry@example.com"
          },
          {
            "id": 102,
            "name": "Bob Smith",
            "email": "bob@example.com"
          },
        ]
      },
      {
        "id": 6,
        "name": "Machine Learning Fundamentals",
        "instructor": "Sarah Johnson",
        "description": "Introduction to machine learning, algorithms, and data analysis.",
        "enrollmentStatus": "Open",
        "thumbnail": "your.image.here",
        "duration": "10 weeks",
        "schedule": "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
        "location": "Online",
        "prerequisites": ["Basic programming knowledge", "Mathematics background"],
        "syllabus": [
          {
            "week": 1,
            "topic": "Introduction to Machine Learning",
            "content": "Overview of machine learning concepts and applications."
          },
          {
            "week": 2,
            "topic": "Data Analysis Techniques",
            "content": "Exploring data analysis techniques in machine learning."
          }
         
        ],
        "students": [
          {
            "id": 109,
            "name": "Oliver White",
            "email": "oliver@example.com"
          },
          {
            "id": 102,
            "name": "Bob Smith",
            "email": "bob@example.com"
          },
        ]
      },
      {
        "id": 7,
        "name": "Front-End Web Development",
        "instructor": "Emma Brown",
        "description": "Learn front-end web development, HTML, CSS, and JavaScript.",
        "enrollmentStatus": "Open",
        "thumbnail": "your.image.here",
        "duration": "6 weeks",
        "schedule": "Thursdays, 4:00 PM - 6:00 PM",
        "location": "Online",
        "prerequisites": ["No prior programming knowledge required"],
        "syllabus": [
          {
            "week": 1,
            "topic": "HTML Fundamentals",
            "content": "Getting started with HTML and web page structure."
          },
          {
            "week": 2,
            "topic": "CSS Styling",
            "content": "Styling web pages with CSS for better user interfaces."
          }
     
        ],
        "students": [
          {
            "id": 110,
            "name": "Mia Davis",
            "email": "mia@example.com"
          }
          
        ]
      },
      {
        "id": 8,
        "name": "Mobile App Development with Flutter",
        "instructor": "Michael Adams",
        "description": "Learn mobile app development using Flutter and create cross-platform apps.",
        "enrollmentStatus": "Open",
        "thumbnail": "your.image.here",
        "duration": "12 weeks",
        "schedule": "Tuesdays and Thursdays, 6:30 PM - 8:30 PM",
        "location": "Online",
        "prerequisites": ["Basic programming knowledge", "Familiarity with mobile apps"],
        "syllabus": [
          {
            "week": 1,
            "topic": "Introduction to Flutter",
            "content": "Overview of Flutter framework and setting up your development environment."
          },
          {
            "week": 2,
            "topic": "Building UI with Flutter",
            "content": "Creating user interfaces for mobile apps using Flutter widgets."
          }
        
        ],
        "students": [
          {
            "id": 111,
            "name": "Noah Clark",
            "email": "noah@example.com"
          }
        
        ]
      },
      {
        "id": 9,
        "name": "JavaScript for Beginners",
        "instructor": "Sarah Brown",
        "description": "Get started with JavaScript programming from scratch and become a web developer.",
        "enrollmentStatus": "Open",
        "thumbnail": "your.image.here",
        "duration": "6 weeks",
        "schedule": "Mondays and Wednesdays, 5:00 PM - 7:00 PM",
        "location": "Online",
        "prerequisites": ["No prior programming knowledge required"],
        "syllabus": [
          {
            "week": 1,
            "topic": "Introduction to JavaScript",
            "content": "Getting started with JavaScript and understanding basic concepts."
          },
          {
            "week": 2,
            "topic": "Working with Functions",
            "content": "Exploring JavaScript functions and their usage."
          }
       
        ],
        "students": [
          {
            "id": 112,
            "name": "Olivia Turner",
            "email": "olivia@example.com"
          }
         
        ]
      }
    ,
    {
      "id": 10,
      "name": "Introduction to Data Analytics",
      "instructor": "Daniel White",
      "description": "Learn the basics of data analytics, data visualization, and gain insights from data.",
      "enrollmentStatus": "Open",
      "thumbnail": "your.image.here",
      "duration": "8 weeks",
      "schedule": "Thursdays, 6:30 PM - 8:30 PM",
      "location": "Online",
      "prerequisites": ["Basic data knowledge", "Familiarity with spreadsheets"],
      "syllabus": [
        {
          "week": 1,
          "topic": "Foundations of Data Analytics",
          "content": "Introduction to data analytics and its significance."
        },
        {
          "week": 2,
          "topic": "Data Visualization",
          "content": "Exploring data visualization techniques and tools."
        }
    
      ],
      "students": [
        {
          "id": 113,
          "name": "Liam Martin",
          "email": "liam@example.com"
        }
        ,
        {
          "id": 101,
          "name": "Alice Johnson",
          "email": "alice@example.com"
        },
       
      ]
    }
    
      
      
    ];
    
export default  courseData;
    
  
  