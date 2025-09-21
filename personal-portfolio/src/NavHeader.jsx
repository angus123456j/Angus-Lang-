import './main.css';
import { useEffect, useState } from 'react';


function NavHeader(){

    const items = [
      { id: 'hero', icon: 'bi-house', label: 'Home' },
      { id: 'about', icon: 'bi-person', label: 'About' },
      { id: 'resume', icon: 'bi-file-earmark-text', label: 'Resume' },
      { id: 'portfolio', icon: 'bi-images', label: 'Portfolio' },
      { id: 'contact', icon: 'bi-envelope', label: 'Contact' }
    ];

    const getHash = () => (typeof window !== 'undefined' && window.location.hash ? window.location.hash.slice(1) : 'hero');
    const [active, setActive] = useState(getHash);

    useEffect(() => {
      const onHashChange = () => setActive(getHash());
      window.addEventListener('hashchange', onHashChange);
      return () => window.removeEventListener('hashchange', onHashChange);
    }, []);

    useEffect(() => {
      const sectionIds = items.map(i => i.id);
      const sections = sectionIds
        .map(id => document.getElementById(id))
        .filter(Boolean);
    
      // Create a center “watch band” so the section near viewport middle becomes active
      const observer = new IntersectionObserver(
        (entries) => {
          // pick the intersecting section closest to the top
          const visible = entries
            .filter(e => e.isIntersecting)
            .sort((a, b) => a.target.getBoundingClientRect().top - b.target.getBoundingClientRect().top)[0];
    
          if (visible) {
            const id = visible.target.id;
            setActive(id);
            // optional: keep URL hash in sync without jump
            window.history.replaceState(null, '', `#${id}`);
          }
        },
        {
          root: null,
          // a center band: top 45% and bottom 45% off, triggers when section crosses the middle
          rootMargin: '-45% 0px -45% 0px',
          threshold: 0
        }
      );
    
      sections.forEach(sec => observer.observe(sec));
      return () => observer.disconnect();
    }, []);
    

    return (
    <nav id="navmenu" className="navmenu" aria-label="Primary">
      <ul className="floating-nav">
        {items.map(({ id, icon, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`fab ${active === id ? 'active' : ''}`}
              aria-label={label}
              onClick={() => setActive(id)}
            >
              <i className={`bi ${icon} navicon`}></i>
              <span className="label"> {label} </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>



    );
}

export default NavHeader;