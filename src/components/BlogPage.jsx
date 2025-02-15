import React from "react";
import "../CSS/BlogPage.css";

const BlogPage = () => {
  return (
    <div className="blog-page">
      {/* Hero Section */}
      <header className="hero-section text-center">
        <div className="container">
          <h5 className="text-secondary">Our Blog</h5>
          <h1 className="fw-bold">
            The Untitled UI <em>journal</em>
          </h1>
          <p className="text-muted">
            The Untitled UI Journal features carefully selected good works from
            studios <br /> and designers from around the globe. Subscribe for
            new posts in your inbox.
          </p>
        </div>

        {/* Subscription Box */}

        <div className="d-flex justify-content-center mt-4">
          <div className="subscription-form d-flex w-25">
            <input
              type="email"
              className="form-control flex-grow-1"
              placeholder="Enter your email"
            />
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </header>

      {/* Recent Blogs */}
      <section className="recent-blogs container">
        <h4 className="fw-bold">Recent Blog Posts</h4>
        <div className="row">
          <div className="col-md-6">
            <div className="blog-card large">
              <img
                src="https://getlighthouse.com/blog/wp-content/uploads/2015/08/Screenshot_11.jpg"
                className="img-fluid"
                alt="Blog Post"
              />
              <div className="blog-info">
                <h5>Bill Walsh leadership lessons</h5>
                <p>
                  Like to know the secrets of transforming a 2-14 team into a 3x
                  Super Bowl winning Dynasty?
                </p>
                <div className="tags my-3">
                  <span className="badge bg-secondary mx-1">Design</span>
                  <span className="badge bg-secondary mx-2">Research</span>
                  <span className="badge bg-secondary mx-2">Presentation</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 d-flex flex-column">
            <div className="blog-card small flex-grow-1 d-flex">
              <div className="row w-100">
                <div className="col-md-5 d-flex">
                  <img
                    src="https://media.geeksforgeeks.org/wp-content/uploads/20240916182140/How-to-Build-an-API.webp"
                    className="img-fluid w-100"
                    alt="Blog Post"
                  />
                </div>

                <div className="col-md-7 d-flex flex-column justify-content-between">
                  <div>
                    <p className="text-muted small">
                      Lana Steiner • 18 Jan 2022
                    </p>
                    <h5>Building your API Stack</h5>
                    <p>
                      The rise of RESTful APIs has been met by a rise in tools
                      for creating, testing, and managing APIs.
                    </p>
                  </div>
                  <div className="tags my-3">
                    <span className="badge bg-secondary mx-1">Design</span>
                    <span className="badge bg-secondary mx-1">Research</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="blog-card small flex-grow-1 d-flex">
              <div className="row w-100">
                <div className="col-md-5 d-flex">
                  <img
                    src="https://cybersify.tech/wp-content/uploads/2024/09/Product-1024x576.png"
                    className="img-fluid w-100"
                    alt="Blog Post"
                  />
                </div>
                <div className="col-md-7 d-flex flex-column justify-content-between">
                  <div>
                    <p className="text-muted small">
                      Phoenix Baker • 19 Jan 2022
                    </p>
                    <h5>Migrating to Linear 101</h5>
                    <p>
                      Linear helps streamline software projects, sprints, tasks,
                      and bug tracking.
                    </p>
                  </div>
                  <div className="tags my-3">
                    <span className="badge bg-secondary mx-1">Design</span>
                    <span className="badge bg-secondary mx-1">Research</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
