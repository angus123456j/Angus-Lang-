import React from "react";

function Contacts() {
  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Feel free to reach out — I’ll get back to you as soon as I can!</p>
      </div>

      <div className="container text-start" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {/* Contact Info Section */}
          <div className="col-lg-5">
            <div className="info-wrap">
              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Address</h3>
                  <p>Waterloo, ON</p>
                </div>
              </div>

              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                <i className="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Call</h3>
                  <p>(365) 999-7578</p>
                </div>
              </div>

              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email</h3>
                  <p>a27lang@uwaterloo.ca</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7">
            <form
              action="https://formspree.io/f/xblyzkkg"
              method="POST"
              className="php-email-form"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="row gy-4">
                <div className="col-md-6">
                  <label htmlFor="name-field" className="pb-2">Your Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name-field"
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="email-field" className="pb-2">Your Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email-field"
                    required
                  />
                </div>

                <div className="col-md-12">
                  <label htmlFor="subject-field" className="pb-2">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject-field"
                    required
                  />
                </div>

                <div className="col-md-12">
                  <label htmlFor="message-field" className="pb-2">Message</label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows="10"
                    id="message-field"
                    required
                  ></textarea>
                </div>

                <div className="col-md-12 text-center">
                  <button type="submit" className="btn btn-primary rounded-pill px-4 py-2 mt-3">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
