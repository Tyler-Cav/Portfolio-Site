/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";

// Wraps a page section and holds its CSS entrance animations paused
// until the section scrolls into view (see .page-section in index.css).
export default function RevealSection({ id, children }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      // Trigger once the section's top is ~15% up from the bottom of the screen
      { threshold: 0, rootMargin: "0px 0px -15% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`page-section${isVisible ? " is-visible" : ""}`}
    >
      {children}
    </section>
  );
}
