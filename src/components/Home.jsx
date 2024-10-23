import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <main>
        {/* < />!-- HERO SECTION --> */}
        <section className="section-hero">
          <div className="container1 hero-box">
            <div className="hero-content margin-bottom">
              <h1 className="heading heading--1 margin-bottom">
                A place for your Basics knowledge goals
              </h1>
            </div>
            <div className="btn-group">
              <button className="btn btn__secondary">Our services</button>
            </div>
          </div>
        </section>

        {/* < />!-- SECTION ABOUT --> */}
        <section className="section-about" id="about">
          <div className="about-box container1">
            <div className="about-box__content" data-aos="fade-up">
              <h2 className="heading heading--2">
                About <span className="yellow">Q</span>uiz
              </h2>
              <p>
                Welcome to our comprehensive web development quiz! This
                interactive quiz is designed to assess and enhance your
                knowledge of essential technologies used in modern web
                development. Here’s what you’ll find:
                <li>
                  HTML: Dive into questions that evaluate your understanding of
                  HTML, the backbone of any webpage. Test your ability to create
                  structures using elements like headings, paragraphs, lists,
                  and links.
                </li>
                <li>
                  CSS: Challenge yourself with CSS-related questions that cover
                  styling techniques, layout design, and responsive web design
                  principles. Learn how to effectively use selectors,
                  properties, and media queries to create visually appealing
                  pages.
                </li>
                <li>
                  JavaScript: Put your JavaScript skills to the test! Explore
                  questions on core concepts like variables, functions, events,
                  and the Document Object Model (DOM). Discover how JavaScript
                  enhances interactivity and creates dynamic content.
                </li>
                <li>
                  React.js: Assess your familiarity with React.js, a popular
                  library for building user interfaces. Test your knowledge of
                  components, state management, props, and lifecycle methods,
                  and understand how they contribute to creating efficient and
                  reusable UI elements.
                </li>
                <li>
                  Python: Expand your understanding of backend development with
                  questions on Python. Explore its syntax, data structures, and
                  frameworks like Django or Flask. Understand how Python
                  interacts with databases and handles server-side logic.
                </li>
              </p>
              <a href="#" className="link-button">
                Read More →
              </a>
            </div>
            <figure className="about-box__image" data-aos="fade-up">
              <img
                src="https://i.ibb.co/N1HtKwC/js.png"
                alt="about-image-one"
                width="350"
                height="233"
              />
              <img
                src="https://i.ibb.co/JHLrNYv/html-5.png"
                alt="about-image-twwo"
                width="350"
                height="233"
              />
              <img
                src="https://i.ibb.co/nL3Z0qP/1102011.jpg"
                alt="about-image-three"
                width="420"
                height="280"
              />
            </figure>
          </div>
        </section>

        {/* < />!-- SECTION COURSES --> */}
        <section className="section-courses" id="courses">
          <div className="container1 courses-box" data-aos="fade-up">
            <header className="courses-heading">
              <h2 className="heading heading--2 underline">Basics</h2>
              <p>
                Our Quiz web App is related to some of programming language,
                It's a some of basics questions of programming language....
                <br />
                There are :-
              </p>
            </header>

            <article className="courses-content">
              <div className="className-card">
                <img
                  className="className-card__img"
                  src="https://i.ibb.co/JHLrNYv/html-5.png"
                  alt="body building course"
                  width="500"
                  height="500"
                />

                <div className="className-card__overlay">
                  <div className="text">
                    <p>
                      HTML (HyperText Markup Language) is the standard language
                      for creating web pages. It structures content using
                      elements like headings, paragraphs, and links.
                    </p>

                    <a href="#" className="link-button">
                      Read More →
                    </a>
                  </div>
                </div>
              </div>

              <div className="className-card">
                <img
                  className="className-card__img"
                  src="https://i.ibb.co/JrPrDnF/css-3.png"
                  alt="cross fit course"
                  width="500"
                  height="500"
                />
                <div className="className-card__overlay">
                  <div className="text">
                    <p>
                      CSS (Cascading Style Sheets) is used to style HTML
                      content. It controls layout, colors, fonts, and overall
                      presentation, enhancing the visual appeal of web pages.
                    </p>

                    <a href="#" className="link-button">
                      Read More →
                    </a>
                  </div>
                </div>
              </div>

              <div className="className-card">
                <img
                  className="className-card__img"
                  src="https://i.ibb.co/N1HtKwC/js.png"
                  alt="gymnastic course"
                  width="500"
                  height="500"
                />

                <div className="className-card__overlay">
                  <div className="text">
                    <p>
                      JavaScript is a versatile programming language that adds
                      interactivity to websites. It enables dynamic content
                      updates, form validation, and responsive user interfaces.
                    </p>

                    <a href="#" className="link-button">
                      Read More →
                    </a>
                  </div>
                </div>
              </div>

              <div className="className-card">
                <img
                  className="className-card__img"
                  src="https://i.ibb.co/VSJ0Rcq/python.png"
                  alt="fitness course"
                  width="500"
                  height="500"
                />
                <div className="className-card__overlay">
                  <div className="text">
                    <p>
                      Python is a high-level programming language known for its
                      readability and versatility. It’s widely used in web
                      development, data analysis, artificial intelligence, and
                      more.
                    </p>

                    <a href="#" className="link-button">
                      Read More →
                    </a>
                  </div>
                </div>
              </div>

              <div className="className-card">
                <img
                  className="className-card__img"
                  src="https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
                  alt="fitness course"
                  width="500"
                  height="500"
                />
                <div className="className-card__overlay">
                  <div className="text">
                    <p>
                      React.js is a JavaScript library for building user
                      interfaces. It allows developers to create reusable
                      components, making web applications more efficient and
                      easier to manage.
                    </p>

                    <a href="#" className="link-button">
                      Read More →
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* < />!-- SECTION OFFER --> */}
        <section className="section-offer" id="offer">
          <div className="offer-box">
            <div className="offer" data-aos="fade-up">
              <h2 className="heading heading--2 margin-bottom">
                May you check your basics knowledge here
              </h2>
              <p className="margin-bottom">
                This quiz is designed to check your fundamental understanding of
                essential web development concepts. You will encounter questions
                covering key areas such as HTML structure, CSS styling
                techniques, basic JavaScript functionality, the core principles
                of React.js, and introductory Python concepts. Each question
                aims to gauge your familiarity with these technologies and their
                roles in building modern web applications. Whether you're new to
                web development or brushing up on your skills, this quiz will
                help reinforce your foundational knowledge and identify areas
                for further exploration. Get ready to test your skills!
              </p>
            </div>

            <div className="offer-img"></div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
