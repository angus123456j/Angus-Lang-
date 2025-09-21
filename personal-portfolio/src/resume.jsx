import React from "react";

function resume(){
    return(
<section id="resume" className="resume section">

      <div class="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>Full‑stack developer focused on React, Node/Express, and AWS (Cognito, S3). Strong CS fundamentals and leadership with hands‑on projects and community involvement.</p>
        <a href="/Angus Lang Resume.pdf" download class="btn btn-primary rounded-pill px-4 mt-3">
          <i class="bi bi-download me-2"></i> Download Resume
        </a>
      </div>

      <div class="container">

        <div class="row">

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 class="resume-title">Summary</h3>

            <div class="resume-item pb-0">
              <h4>Angus Lang</h4>
              <p><em>Software Engineering student at the University of Waterloo. Full‑stack developer with projects in MERN, AWS Cognito/S3, and React UI. Passionate about building polished, performant experiences.</em></p>
              <ul>
                <li>Waterloo, ON</li>
                <li>(365) 999-7578</li>
                <li>a27lang@uwaterloo.ca</li>
              </ul>
            </div>

            <h3 class="resume-title">Education</h3>
            <div class="resume-item">
              <h4>Honors Software Engineering (Co‑op)</h4>
              <h5>Sep 2025 – Present</h5>
              <p><em>University of Waterloo</em></p>
              <p>Relevant: Object‑Oriented Programming, Logic &amp; Computing, Probability, Elementary Algorithm Design &amp; Data Abstraction, Calculus I &amp; II, Linear Algebra</p>
            </div>

            <div class="resume-item">
              <h4>Assumption Catholic Secondary School</h4>
              <h5>Sep 2021 – Jun 2025</h5>
              <p><em>GPA: 99.86%</em></p>
              <p>Awards: Schulich Leader Scholarship Nominee, Governor General Academic Medal (Recipient), Mathematics Department Award, School Letter Award (Varsity Letter)</p>
            </div>
          </div>

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 class="resume-title">Experience &amp; Leadership</h3>
            <div class="resume-item">
              <h4>Tennis Coach</h4>
              <h5>Sep 2023 – Jun 2024</h5>
              <p><em>Appleby Tennis Club</em></p>
              <ul>
                <li>Coached ages 8–15 in private and group sessions (up to 10), achieving a 100% return rate.</li>
                <li>Developed players’ form, endurance, and strategy through structured drills and gameplay.</li>
              </ul>
            </div>
            <div class="resume-item">
              <h4>Podcast Producer</h4>
              <h5>May 2025 – Present</h5>
              <p><em>Different Walks Different Talks (DWDT)</em></p>
              <ul>
                <li>Launched interview podcast with alumni, athletes, and trade professionals.</li>
                <li>Planned episodes, coordinated guests, and edited/published content.</li>
              </ul>
            </div>
            <div class="resume-item">
              <h4>Velocity Campus Ambassador</h4>
              <h5>Aug 2025 – Present</h5>
              <p><em>University of Waterloo</em></p>
              <ul>
                <li>Hosted startup info sessions and workshops; promoted programs to increase student engagement.</li>
              </ul>
            </div>
            <div class="resume-item">
              <h4>Engineering Ambassador</h4>
              <h5>Aug 2025 – Present</h5>
              <p><em>University of Waterloo</em></p>
              <ul>
                <li>Led campus tours and Q&amp;A for prospective engineering students; supported admissions and mentoring.</li>
              </ul>
            </div>
          </div>

        </div>

      </div>

    </section>
    );
}

export default resume;