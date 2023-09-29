import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Section1() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    gsap.to(section, {
      opacity: 1,
      scrollTrigger: {
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="h-screen flex items-center justify-center bg-image1"
    >
      <h1 className="text-4xl text-white">Section 1</h1>
    </section>
  );
}

export default Section1;
