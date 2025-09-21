

function skills() {
  return(
       <section id="skills" className="skills section light-background" style={{ backgroundColor: '#f4fafd' }}>
    
      {/* Title container aligned to site-wide container */}
           <div className="container section-title" data-aos="fade-up">
              <h2>Skills</h2>
              <p className="mb-0" style={{ color: '#4a5568', textAlign: 'left' }}>A focused toolkit for building modern, performant web apps.</p>
          </div>
    
           {/* Main content container aligned to site-wide container */}
           <div className="container" data-aos="fade-up" data-aos-delay="100">        
              {/* The row now uses Bootstrap's gutter classes for consistent spacing */}
              <div className="row g-3">
                  
                  <div className="col-lg-4" style={{ borderRight: '1px solid rgba(0,0,0,.08)' }}>
                      <h3 className="h6 text-uppercase text-muted mb-3" style={{ letterSpacing: '.02em', fontWeight: 700, textAlign: 'left' }}>Languages</h3>
                       <div className="d-flex flex-wrap justify-content-start gap-3">
                           <span className="badge rounded-pill bg-primary-subtle text-primary" style={{ fontSize: '0.95rem', padding: '.55rem .9rem' }}><i className="bi bi-code-slash me-1"></i>JavaScript (ES6+)</span>
                           <span className="badge rounded-pill bg-primary-subtle text-primary" style={{ fontSize: '0.95rem', padding: '.55rem .9rem' }}><i className="bi bi-code-slash me-1"></i>Python</span>
                           <span className="badge rounded-pill bg-primary-subtle text-primary" style={{ fontSize: '0.95rem', padding: '.55rem .9rem' }}><i className="bi bi-code-slash me-1"></i>C</span>
                           <span className="badge rounded-pill bg-primary-subtle text-primary" style={{ fontSize: '0.95rem', padding: '.55rem .9rem' }}><i className="bi bi-code-slash me-1"></i>C++</span>
                           <span className="badge rounded-pill bg-primary-subtle text-primary" style={{ fontSize: '0.95rem', padding: '.55rem .9rem' }}><i className="bi bi-code-slash me-1"></i>C#</span>
                           <span className="badge rounded-pill bg-primary-subtle text-primary" style={{ fontSize: '0.95rem', padding: '.55rem .9rem' }}><i className="bi bi-code-slash me-1"></i>HTML &amp; CSS</span>
                           <span className="badge rounded-pill bg-primary-subtle text-primary" style={{ fontSize: '0.95rem', padding: '.55rem .9rem' }}><i className="bi bi-code-slash me-1"></i>SQL</span>
                      </div>
                  </div>
    
                  <div className="col-lg-4" style={{ borderRight: '1px solid rgba(0,0,0,.08)' }}>
                      <h3 className="h6 text-uppercase text-muted mb-3" style={{ letterSpacing: '.02em', fontWeight: 700, textAlign: 'left' }}>Frameworks</h3>
                      <div className="d-flex flex-wrap justify-content-start gap-3">
                          <span className="badge rounded-pill bg-primary-subtle text-primary" style={{ fontSize: '0.95rem', padding: '.55rem .9rem' }}><i className="bi bi-lightning me-1"></i>React</span>
                          <span className="badge rounded-pill bg-primary-subtle text-primary" style={{ fontSize: '0.95rem', padding: '.55rem .9rem' }}><i className="bi bi-lightning me-1"></i>Node / Express</span>
                          <span className="badge rounded-pill bg-primary-subtle text-primary" style={{ fontSize: '0.95rem', padding: '.55rem .9rem' }}><i className="bi bi-lightning me-1"></i>Tailwind</span>
                          <span className="badge rounded-pill bg-primary-subtle text-primary" style={{ fontSize: '0.95rem', padding: '.55rem .9rem' }}><i className="bi bi-lightning me-1"></i>MongoDB</span>
                          <span className="badge rounded-pill bg-primary-subtle text-primary" style={{ fontSize: '0.95rem', padding: '.55rem .9rem' }}><i className="bi bi-cloud-check me-1"></i>AWS (Cognito, S3)</span>
                      </div>
                  </div>
    
                  <div className="col-lg-4">
                      <h3 className="h6 text-uppercase text-muted mb-3" style={{ letterSpacing: '.02em', fontWeight: 700, textAlign: 'left' }}>Tools</h3>
                       <div className="d-flex justify-content-start gap-3" style={{ flexWrap: 'nowrap' }}>
                           <span className="badge rounded-pill bg-primary-subtle text-primary" style={{ fontSize: '0.95rem', padding: '.55rem .9rem' }}><i className="bi bi-palette me-1"></i>Figma</span>
                           <span className="badge rounded-pill bg-primary-subtle text-primary" style={{ fontSize: '0.95rem', padding: '.55rem .9rem' }}><i className="bi bi-git me-1"></i>Git</span>
                           <span className="badge rounded-pill bg-primary-subtle text-primary" style={{ fontSize: '0.95rem', padding: '.55rem .9rem' }}><i className="bi bi-braces-asterisk me-1"></i>VS Code</span>
                      </div>
                      <div className="d-flex flex-wrap justify-content-start gap-3 mt-3">
                           <span className="badge rounded-pill bg-primary-subtle text-primary" style={{ fontSize: '0.95rem', padding: '.55rem .9rem' }}><i className="bi bi-controller me-1"></i>Unity</span>
                           <span className="badge rounded-pill bg-primary-subtle text-primary" style={{ fontSize: '0.95rem', padding: '.55rem .9rem' }}><i className="bi bi-box-arrow-up-right me-1"></i>Vercel</span>
                           <span className="badge rounded-pill bg-primary-subtle text-primary" style={{ fontSize: '0.95rem', padding: '.55rem .9rem' }}><i className="bi bi-box-arrow-up-right me-1"></i>Heroku</span>
                           <span className="badge rounded-pill bg-primary-subtle text-primary" style={{ fontSize: '0.95rem', padding: '.55rem .9rem' }}><i className="bi bi-box-arrow-up-right me-1"></i>Render</span>
                      </div>
                  </div>
    
              </div>
    
          </div>
    
      </section>
  );
}
    
export default skills;