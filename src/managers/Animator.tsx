import React, { useRef, useEffect, useState } from 'react';

interface AnimatorProps {
  children: React.ReactElement<any>; // Expect a single React element with any props
  anim: string; // Class to add when the element is in view
  repeat?: boolean;
}

const Animator: React.FC<AnimatorProps> = ({ children, anim, repeat = true }) => {
  const elementRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true); // Element is in view
        } else {
          // Check if the element is completely off-screen
          const isOffScreen =
            entry.boundingClientRect.top >= window.innerHeight ||
            entry.boundingClientRect.bottom <= 0;

          if (repeat && isOffScreen) {
            setIsInView(false); // Element is completely off-screen
          }
        }
      },
      { threshold: 0 } // Trigger when any part of the element is visible
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [repeat]);

  return React.cloneElement(children, {
    ref: elementRef,
    className: `${children.props.className || ''} ${isInView ? anim : 'hidden'}`.trim(),
  });
};

export default Animator;
