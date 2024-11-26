import React, { useEffect, useState } from 'react';
import '../style.css';
import bg from '../assets/img/bg.jpg';
import signupbg from '../assets/img/signup-bg.jpg';
import HeaderComponent from '../component/HeaderComponent';
import FeaturedCourse from '../component/FeaturedCourse';
import FooterComponent from '../component/FooterComponent';

const Home = () => {
  const [categories, setCategories] = useState([]);

  // Fetch data from JSON server
  useEffect(() => {
    fetch('http://localhost:5000/categories')  // Replace with your JSON server endpoint
      .then(response => response.json())
      .then(data => {
        // Update the image paths to use require dynamically
        const updatedData = data.map(item => ({
          ...item,
          image: require(`../assets/img/${item.image}`)
        }));
        setCategories(updatedData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
    <div id="preloder">
		<div className="loader"></div>
	</div>
      <HeaderComponent />
      <section className="hero-section" style={{ backgroundImage: `url(${bg})` }}>
        <div className="container">
          <div className="hero-text text-white">
            <h2>Get The Best Free Online Courses</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla <br /> dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
          </div>
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <form className="intro-newslatter">
                <input type="text" placeholder="Name" />
                <input type="text" className="last-s" placeholder="E-mail" />
                <button className="site-btn">Sign Up Now</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/*--------------------- */}
      <section className="categories-section spad">
        <div className="container">
          <div className="section-title">
            <h2>Our Course Categories</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
          </div>
          <div className="row">
            {categories.map(category => (
              <div key={category.id} className="col-lg-4 col-md-6">
                <div className="categorie-item ">
                  <div className="ci-thumb set-bg" style={{ backgroundImage: `url(${category.image})` }}></div>
                  <div className="ci-text">
                    <h5>{category.title}</h5>
                    <p>{category.description}</p>
                    <span>{category.courses} Courses</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="search-section">
		<div className="container">
			<div className="search-warp">
				<div className="section-title text-white">
					<h2>Search your course</h2>
				</div>
				<div className="row">
					<div className="col-md-10 offset-md-1">
						<form className="course-search-form">
							<input type="text" placeholder="Course"/>
							<input type="text" className="last-m" placeholder="Category"/>
							<button className="site-btn">Search Couse</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>   
<FeaturedCourse/>

<section className="signup-section spad">
		<div className="signup-bg set-bg" style={{ backgroundImage: `url(${signupbg})` }}></div>
		<div className="container-fluid">
			<div className="row">
				<div className="col-lg-6">
					<div className="signup-warp">
						<div className="section-title text-white text-left">
							<h2>Sign up to became a teacher</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
						</div>
						<form className="signup-form">
							<input type="text" placeholder="Your Name"/>
							<input type="text" placeholder="Your E-mail"/>
							<input type="text" placeholder="Your Phone"/>
							<label for="v-upload" className="file-up-btn">Upload Course</label>
							<input type="file" id="v-upload"/>
							<button className="site-btn">Search Couse</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
    <section className="banner-section spad">
		<div className="container">
			<div class="section-title mb-0 pb-2">
				<h2>Join Our Community Now!</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
			</div>
			<div className="text-center pt-5">
				<a href="#" className="site-btn">Register Now</a>
			</div>
		</div>
	</section>
    <FooterComponent/>
    </>
  );
}

export default Home;
