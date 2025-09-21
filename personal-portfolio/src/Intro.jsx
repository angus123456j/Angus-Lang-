import logo from './logo.svg';
import ang1 from './Images/ang.png';

import Typed from 'typed.js';
import { useEffect, useRef } from 'react';
function Intro() {

  const TypedText = () => {
    const el = useRef(null)

    useEffect( () => {
      const typed = new Typed(el.current,{
        strings:["Software Engineer", "Developer", "Innovator", "Problem Solver"],
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      });

      return () => typed.destroy();
    },[]);

    return (
      <p>
        I am <span ref={el}></span>
      </p>
    )
  }

  return (
    
    <section id="hero" className="hero section dark-background">

       <img src= {ang1} alt="" data-aos="fade-in" class="" /> 

      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <h2>Angus Lang </h2>
        <TypedText/>

      <div class="social-links text-left">
      <a href="https://github.com/angus123456j" target="_blank" rel="noopener" class="github"><i class="bi bi-github"></i></a>
      <a href="https://www.linkedin.com/in/angus-lang" target="_blank" rel="noopener" class="linkedin"><i class="bi bi-linkedin"></i></a>
      <a href="https://www.youtube.com/@DWDT99" target="_blank" rel="noopener" class="youtube"><i class="bi bi-youtube"></i></a>
      </div>

      </div>
      
    

    </section>

    
  );
}

export default Intro;
