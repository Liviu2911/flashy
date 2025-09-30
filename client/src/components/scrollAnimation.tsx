import type { Children } from "../types/default";
import { useRef, useState, useEffect } from "react";

type Props = {
  threshold: number;
  children: Children;
};

function ScrollAnimation({ threshold, children }: Props) {
  const ref = useRef(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={
        isVisible ? "opacity-100 scroll-animation" : "opacity-1 relative"
      }
    >
      {children}
    </div>
  );
}

export default ScrollAnimation;
