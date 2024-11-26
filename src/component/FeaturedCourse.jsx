import React, { useEffect, useState } from 'react';
import mixitup from 'mixitup';
import '../style.css';

const FeaturedCourse = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Preloader logic
    const preloader = document.getElementById('preloder');
    const loader = document.querySelector('.loader');
    if (loader) loader.style.display = 'none';
    if (preloader) {
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 400);
    }
  }, []);

  useEffect(() => {
    // Fetch courses data
    fetch('http://localhost:5000/courses')
      .then((response) => response.json())
      .then((data) => {
        const updatedCourses = data.map((course) => ({
          ...course,
          image: require(`../assets/img/${course.image}`),
          autherimage: require(`../assets/img/${course.autherimage}`),
        }));
        setCourses(updatedCourses);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    // MixItUp initialization
    const containerEl = document.querySelector('.course-items-area');
    let mixer;

    if (containerEl) {
      mixer = mixitup(containerEl, {
        selectors: {
          target: '.mix',
        },
        animation: {
          duration: 500,
          nudge: true,
          effects: 'fade scale(0.5)',
        },
      });
      return () => {
        mixer.destroy(); // Clean up when the component unmounts
      };
    }

    return () => {
      // Cleanup MixItUp instance
      if (mixer) mixer.destroy();
    };
  }, [courses]);

  const handleFilterClick = (filter) => {
    const controls = document.querySelectorAll('.course-filter .control');
    controls.forEach((control) => control.classList.remove('active'));
    document.querySelector(`[data-filter="${filter}"]`).classList.add('active');
  };

  return (
    <div>
      <section className="course-section spad">
        <div className="container">
          <div className="section-title mb-0">
            <h2>Featured Courses</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus
              mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus
              faucibus finibus.
            </p>
          </div>
        </div>

        <div className="course-warp">
          {/* Filter Buttons */}
          <ul className="course-filter controls">
            <li
              className="control active"
              data-filter="all"
              onClick={() => handleFilterClick('all')}
            >
              All
            </li>
            <li
              className="control"
              data-filter=".finance"
              onClick={() => handleFilterClick('.finance')}
            >
              Finance
            </li>
            <li
              className="control"
              data-filter=".design"
              onClick={() => handleFilterClick('.design')}
            >
              Design
            </li>
            <li
              className="control"
              data-filter=".web"
              onClick={() => handleFilterClick('.web')}
            >
              Web Development
            </li>
            <li
              className="control"
              data-filter=".photo"
              onClick={() => handleFilterClick('.photo')}
            >
              Photography
            </li>
          </ul>

          {/* Course Items */}
          <div className="row course-items-area">
            {courses.map((course) => (
              <div
                key={course.id}
                className={`mix col-lg-3 col-md-4 col-sm-6 ${course.category}`}
              >
                <div className="course-item">
                  <div
                    className="course-thumb set-bg"
                    style={{ backgroundImage: `url(${course.image})` }}
                  >
                    <div className="price">Price: ${course.price}</div>
                  </div>
                  <div className="course-info">
                    <div className="course-text">
                      <h5>{course.title}</h5>
                      <p>{course.description}</p>
                      <div className="students">{course.students} Students</div>
                    </div>
                    <div className="course-author">
                      <div
                        className="ca-pic set-bg"
                        style={{
                          backgroundImage: `url(${course.autherimage})`,
                        }}
                      ></div>
                      <p>
                        {course.authorName || 'William Parker'}, <span>Developer</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedCourse;
