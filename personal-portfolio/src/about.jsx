import portfolioimage from './Images/home.jpg';

function About() {
    return(
<section id="about" className="about section" style={{ backgroundColor: '#ffffff' }}>
      <div className="container section-title">
        <h2>About</h2>
        <p>Software Engineering student at the University of Waterloo and full‑stack developer. I build responsive web apps with React and Node/Express, ship to AWS (Cognito, S3), and design usable interfaces. I enjoy turning ideas into polished products and learning by building.</p>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-4 justify-content-center"> 
          <div className="col-lg-4">
            <img src= {portfolioimage} className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-8 content">
            <h2>Software Engineering Student &amp; Full‑Stack Developer</h2>
            <p className="fst-italic py-3" style={{ textAlign: "left" }}>
              Focused on React, Node/Express, and cloud services (AWS Cognito, S3). Strong foundations in Python/C/C++, with a passion for shipping real projects and clean UI.
            </p>
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Website:</strong> <span>github.com/angus123456j</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>LinkedIn:</strong> <span>linkedin.com/in/angus-lang</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>(365) 999-7578</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Waterloo, ON</span></li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>a27lang@uwaterloo.ca</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>BASc, Software Engineering (In Progress)</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Open to:</strong> <span>Internships &amp; Projects</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
    );
}

export default About;
    