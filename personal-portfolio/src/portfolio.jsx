import portfolioimage from './logo.svg';
import projects from './projects.jsx';
// import Card from 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';


function Portfolio() {
    const [show, setShow] = useState(false);
    const [selected, setSelected] = useState(null);

    const openModal = (project) => {
      setSelected(project);
      setShow(true);
    };

    const closeModal = () => setShow(false);

    return(

<section id="portfolio" className="portfolio section light-background" style={{ backgroundColor: '#f4fafd' }}>

      
      <div class="container section-title" data-aos="fade-up" style={{ paddingBottom: '24px' }}>
        <h2>Portfolio</h2>
        <p style={{ maxWidth: '720px', margin: '8px 0 0', color: '#4a5568', textAlign: 'left' }}>
          <strong>These are my passion projects</strong> — built to explore ideas and ship real products.<br/>
          <strong>Click a card</strong> to view the full details, tech stack, and relevant links.
        </p>
      </div>

      <div class="container" style={{ marginTop: '0' }}>

        <div class="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

          
          <div class="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
            
<Row className="g-4">
  {projects.length === 0 && (
    <div className="text-center py-4" style={{color: '#4a5568'}}>
      <p>No projects to show yet — tell me your preferred layout and I’ll build it.</p>
    </div>
  )}
  {projects.map((project) => (
    <Col xs={12} sm={6} lg={3} key={project.title}>
    <Card 
      className="h-100"
      style={{ 
        backgroundColor: 'white',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 2px 16px rgba(0, 100, 255, 0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        minHeight: '420px',
        cursor: 'pointer'
      }}
      onClick={() => openModal(project)}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 100, 255, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = '0 2px 16px rgba(0, 100, 255, 0.1)';
      }}
    >
      {/* Card Image with light overlay */}


      <div style={{ position: 'relative' }}>
        <Card.Img 
          variant="top" 
          src={project.image} 
          style={{ 
            height: '200px', 
            objectFit: 'cover',
            filter: 'brightness(1.05) saturate(1.1)'
          }} 
        />
      </div>


      {/* Card Body - Light theme */}
      <Card.Body style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column' }}>
        <Card.Title 
          className="fw-bold" 
          style={{ color: '#1a3e72' }} // Deep blue
        >
          {project.title}
        </Card.Title>
        
        <Card.Text 
          className="mb-3" 
          style={{ color: '#4a5568', fontSize: '0.9rem' }} // Soft gray
        >
          {project.text}
        </Card.Text>

        {/* Modern blue button */}
        {/*<Button 
          variant="outline-primary" 
          className="rounded-pill px-4"
          style={{
            borderWidth: '2px',
            color: '#3182ce',
            fontWeight: '500',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.target.style.background = '#ebf5ff';
            e.target.style.color = '#3182ce';
          }}
          onMouseOut={(e) => {
            e.target.style.background = 'transparent';
          }}
        >
          <i className="bi bi-github me-2"></i> View Code
        </Button>*/}

        <div style={{ marginTop: 'auto', marginBottom: '8px' }}>
          {/* Primary row: show either Code/Channel or a single primary link as before */}
          <div>
          {project.linkType && project.linkUrl && (
              <Button
                variant="outline-primary"
                className="rounded-pill px-4"
                style={{
                  borderWidth: '2px',
                  fontWeight: '500',
                  color: '#3182ce',
                  transition: 'all 0.3s ease'
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  if (project.codeLinkUrl && project.linkType === 'website') {
                    // Open one new tab (usually allowed) and navigate current tab
                    window.open(project.codeLinkUrl, '_blank', 'noopener');
                    window.location.href = project.linkUrl;
                  } else if (project.linkUrl) {
                    window.open(project.linkUrl, '_blank', 'noopener');
                  }
                }}
                onMouseOver={(e) => {
                  e.target.style.background = '#ebf5ff';
                  e.target.style.color = '#3182ce';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'transparent';
                }}
              >
                <i className={`bi ${project.linkType === 'website' ? 'bi-link-45deg' : project.linkType === 'github' ? 'bi-github' : 'bi-youtube'} me-2`}></i>
                {project.linkType === 'website' ? 'View Site & Code' : project.linkType === 'github' ? 'View Code' : 'View Channel'}
              </Button>
            )}
          </div>
        </div>


      </Card.Body>
    </Card>
    </Col>
  ))}
</Row>


          </div>

        </div>

      </div>

      {/* Project Modal */}
      <Modal show={show} onHide={closeModal} size="xl" centered>
        {selected && (
          <>
            <Modal.Header closeButton>
              <Modal.Title className="fw-bold" style={{ color: '#1a3e72' }}>{selected.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="row">
                <div className="col-lg-6 mb-3">
                  {selected.videoUrl ? (
                    <video key={selected.videoUrl} src={selected.videoUrl} controls playsInline style={{ width: '100%', borderRadius: 8 }} />
                  ) : (
                    <img src={selected.image} alt="" style={{width: '100%', borderRadius: 8}} />
                  )}
                </div>
                <div className="col-lg-6" style={{ textAlign: 'left' }}>
                  <h5 style={{ color: '#1a3e72' }}>Why I built this</h5>
                  <p style={{ color: '#4a5568' }}>{selected.why || selected.text}</p>
                  {selected.skills && (
                    <div style={{ marginTop: 12 }}>
                      <h6 className="mb-2">Relevant Skills</h6>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {selected.skills.map((s) => (
                          <span key={s} className="badge bg-primary-subtle text-primary" style={{ border: '1px solid #bcd', color: '#1a3e72' }}>{s}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              {selected.linkType && selected.linkUrl && (
                <a href={selected.linkUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <Button variant="primary">
                    <i className={`bi ${selected.linkType === 'github' ? 'bi-github' : selected.linkType === 'website' ? 'bi-link-45deg' : 'bi-youtube'} me-2`}></i>
                    {selected.linkType === 'github' ? 'View Code' : selected.linkType === 'website' ? 'View Site' : 'View Channel'}
                  </Button>
                </a>
              )}
            </Modal.Footer>
          </>
        )}
      </Modal>

    </section>

    );
}

export default Portfolio;