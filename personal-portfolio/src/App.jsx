import logo from './logo.svg';
import './App.css';
import './main.css';
import NavHeader from './NavHeader.jsx';
import Intro from './Intro.jsx';
import About from './about.jsx';
import Skills from './skills.jsx';
import Resume from './resume.jsx';
import Portfolio from './portfolio.jsx';
// import Services from './services.jsx';
import Contacts from './contacts.jsx';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import 'swiper/css';
// import 'swiper/css/navigation'; // Only if using Navigation
// import 'swiper/css/pagination'; 


// import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'glightbox/dist/css/glightbox.min.css';
// //import 'swiper/swiper-bundle.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


// import AOS from 'aos';
// import 'aos/dist/aos.css'; // CSS import (keep this)
// import { useEffect } from 'react';






// import GLightbox from 'glightbox';
// import Typed from 'typed.js';
// import PureCounter from '@srexi/purecounterjs';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import 'aos/dist/aos.css';
// import 'glightbox/dist/css/glightbox.min.css';


import { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'aos/dist/aos.css';
import 'glightbox/dist/css/glightbox.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './main.css';

// JS Plugin Imports
import AOS from 'aos';
import GLightbox from 'glightbox';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Typed from 'typed.js';
import PureCounter from '@srexi/purecounterjs';
import 'waypoints/lib/noframework.waypoints';
import Isotope from 'isotope-layout';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import imagesLoaded from 'imagesloaded'; // Use lowercase 'i' as it's typically imported as a function





function App() {
  // Refs for plugins that need DOM elements
  const typedEl = useRef(null);
  const isotopeGrid = useRef(null);

  useEffect(() => {
    // 1. AOS Initialization
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });

    // 2. GLightbox Initialization
    const lightbox = GLightbox({
      selector: '.glightbox',
      touchNavigation: true
    });

    // 3. Typed.js Initialization (if used in Intro/Header)
    if (typedEl.current) {
      const typed = new Typed(typedEl.current, {
        strings: ['Developer', 'Designer', 'Creator'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
      });
    }

    // 4. PureCounter Initialization
    new PureCounter();

    // ... inside useEffect
  // 5. Waypoints Initialization
  const waypointElement = document.getElementById('waypoint-trigger');
  let waypointInstance; // Renamed to avoid confusion with the global Waypoint
  if (waypointElement && window.Waypoint) { // Check if window.Waypoint exists
    waypointInstance = new window.Waypoint({ // Use window.Waypoint
      element: waypointElement,
      handler: function(direction) {
        console.log('Scrolled to waypoint!');
      },
      offset: '75%'
    });
  }

// ... inside cleanup
return () => {
    // ... other cleanups
    if (waypointInstance) { // Ensure you clean up the specific instance
      waypointInstance.destroy();
    }
};

    // ... inside useEffect
  // 6. Isotope Initialization (for Portfolio filtering)
  let iso;
  if (isotopeGrid.current) {
    // Use imagesLoaded as a function, passing the DOM element
    imagesLoaded(isotopeGrid.current).on('progress', () => {
      iso = new Isotope(isotopeGrid.current, {
        itemSelector: '.isotope-item',
        layoutMode: 'fitRows'
      });
    });
  }

    // Cleanup function
    return () => {
      AOS.refresh();
      lightbox.destroy();
      // Add other plugin cleanups as needed
    };
  }, []);

  return (
    <div className="App">
      <NavHeader typedRef={typedEl} /> {/* Pass typedRef if using Typed.js in header */}
      
      <main className="main">
        <Intro />
        <About />
        <Skills />
        <Resume />
        <Portfolio isotopeRef={isotopeGrid} /> {/* Pass isotopeRef if using filtering */}
        <Contacts />
      </main>

      {/* Initialize any required DOM elements for plugins */}
      <div id="waypoint-trigger" style={{position: 'absolute', bottom: '100px'}}></div>
    </div>
  );
}

export default App;

/*function App() {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    
    <div className="App">
      <NavHeader/>
      
      <main className="main">
        <Intro/>
        <About/>
        <Skills/>
        <Resume/>
        <Portfolio/>
        <Services/>
        <Contacts/>
      
      </main>
    </div>
  );
}

export default App; */
